# Webfinger component

A Webfinger component that can be injected into a
[Community Solid Server](https://github.com/CommunitySolidServer/CommunitySolidServer/) (CSS) instance
using [Components.js](https://github.com/LinkedSoftwareDependencies/Components.js/).

It add a webfinger endpoint to CSS, allowing to get the URL of a user webId using a identifier like username@podurl.
It is based on https://github.com/CommunitySolidServer/hello-world-component/ . Test are not working yet.

The config set a webId url template that matches the one of CSS' default:
```
      "https://${domain}/${username}/profile/card#me"
```
If you have made change to your CSS config that affect CSS' default webId location, you should edit [urn:webfinger:default:webIdLocationTemplate](./config/http/handler/handlers/webfinger.json)

# Add it to your recipice

 // TODO

# Todo

 - add tests
   - check other pages are not broken ( registration etc..)
   - check if webfinger works
     - return correct value for exisiting webid
     - return correct error for non-exisiting webid
     - return correct error for bad resource naming
   - npm package
   - recipe example & test

