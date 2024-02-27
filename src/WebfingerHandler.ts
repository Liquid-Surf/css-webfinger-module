import { getLoggerFor } from '@solid/community-server';
import type { HttpHandlerInput } from '@solid/community-server';
import { HttpHandler } from '@solid/community-server';

//import { CookieStore } from '@solid/community-server';

/**
 * HTTP handler that redirects all requests to the FedCM library.
 */

export class WebfingerHttpHandler extends HttpHandler {
  protected readonly logger = getLoggerFor(this);

  public constructor() {
    super();
  }

  public async handle({ request, response }: HttpHandlerInput): Promise<void> {

    response.writeHead(200, { 'Content-Type': 'application/json'})
    response.end(JSON.stringify({'hello': 'world'}))

    // if (request.url?.startsWith('/.well-known/web-identity')) {
    //     await this.handleWebIdentity({request, response});
    // } else if (request.url?.startsWith('/.well-known/fedcm/fedcm.json')) {
    //     await this.handleFedcmJSON({request, response});
    // } else if (request.url?.startsWith('/.well-known/fedcm/accounts_endpoint')) {
    //     await this.handleAccountsEnpoint({request, response});
    // } else if (request.url?.startsWith('/.well-known/fedcm/client_metadata_endpoint')) {
    //     await this.handleClientMetadataEndpoint({request, response});
    // } else {
    //     response.writeHead(500, { 'Content-Type': 'application/json' });
    //     response.end(JSON.stringify({'error': { 'message': `Fail in FedcmHttpHandler to handle the following request url: ${request.url}`}}));
    // }


  }
}
 
