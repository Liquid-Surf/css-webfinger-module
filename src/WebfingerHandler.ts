import { getLoggerFor } from '@solid/community-server';
import type { HttpHandlerInput } from '@solid/community-server';
import { HttpHandler } from '@solid/community-server';

//import { CookieStore } from '@solid/community-server';

/**
 * HTTP handler to provide webfinger to css.
 */

export class WebfingerHttpHandler extends HttpHandler {
  protected readonly logger = getLoggerFor(this);
  protected readonly webIdLocationTemplate: string

  public constructor(webIdLocationTemplate: string) {
    super();
    this.webIdLocationTemplate = webIdLocationTemplate
    this.logger.info("PLACEHOLDER="+webIdLocationTemplate)
  }

  public async handle({ request, response }: HttpHandlerInput): Promise<void> {

    // Parse query parameters
    const url = new URL(request.url!, `http://${request.headers.host}`);
    const resource = url.searchParams.get('resource');

    if (!resource) {
      response.writeHead(400, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ error: 'Query parameter "resource" is required' }));
      return;
    }
		//TODO error if webIdLocationTemplate doesn't contain domain and username
		// TODO handle error if no account exist with this webid

    // Extract username and domain from resource
    // Expected format: acct:username@domain
    const match = resource.match(/^acct:(.*)@(.*)$/);
    if (!match) {
      response.writeHead(400, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ error: 'Invalid resource format' }));
      return;
    }

    const [, username, domain] = match;

		//TODO add other links such as profile picture
    const webfingerResponse = {
      subject: resource,
      links: [
        {
          rel: "http://webfinger.net/rel/profile-page",
          type: "text/html",
          // TODO use baseUrl ? Is $domain can be something else than baseUrl ? check RFC
          webid: this.webIdLocationTemplate.replace("${domain}", domain).replace("${username}", username)
        }
      ]
    };

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(webfingerResponse));
  }
}
 
