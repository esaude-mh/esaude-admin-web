<br/><br/><br/>
<img src="https://s3-eu-west-1.amazonaws.com/esaude/images/esaude-site-header.png" alt="OpenMRS"/>
<br/><br/><br/>

# eSaude Admin Web App

[![Build Status](https://travis-ci.org/esaude/esaude-admin-web.svg?branch=master)](https://travis-ci.org/esaude/esaude-admin-web)
[![codecov](https://codecov.io/gh/esaude/esaude-admin-web/branch/master/graph/badge.svg)](https://codecov.io/gh/esaude/esaude-admin-web)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7c87bde9ffe443d0a704ca394ae0c24f)](https://www.codacy.com/app/esaude/esaude-admin-web?utm_source=github.com)
[![eSaude Docs](https://omrs-shields.psbrandt.io/custom/esaude/docs/blue?logo=esaude)](https://docs.esaude.org)
[![eSaude Slack](https://slack.esaude.org/badge.svg)](https://slack.esaude.org)

The eSaude Admin web application is an [Angular 4](https://angular.io/) application
that provides a user interface to the [eSaude Admin API](https://github.com/esaude/esaude-admin-api/blob/master/readme.md).

## Install

To install the eSaude admin app, first install the [prerequisites](https://paper.dropbox.com/doc/eSaude-App-Install-Guide-Uvk5mTlgG2m0nyOYy5Zyg#:uid=515415815748821&h2=Prerequisites) (Docker & Compose), then follow the [eSaude Admin install instructions](https://paper.dropbox.com/doc/eSaude-App-Install-Guide-Uvk5mTlgG2m0nyOYy5Zyg#:uid=853323144286988&h2=eSaude-Admin):

```
$ wget https://get.esaude.org/app/esaude-app-admin.yml
$ docker-compose -p esaude -f esaude-app-admin.yml up -d
```

:pushpin: You will need need `v1.2.30+` of the [eSaude Platform](https://paper.dropbox.com/doc/eSaude-App-Install-Guide-Uvk5mTlgG2m0nyOYy5Zyg#:uid=496479570672974&h2=eSaude-EMR-Platform) running to use the admin app.

## Development

To contribute to the eSaude Admin web app, first install the [Angular CLI](https://github.com/angular/angular-cli) tool
globally:

```
npm install -g @angular/cli
```

Then install the project dependencies:

```
npm install
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

:pushpin: You will need the [eSaude Admin API](https://github.com/esaude/esaude-admin-api/blob/master/readme.md) up and
running to interact with the eSaude Platform.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Docker

To build a Docker image, first create a production build (see above), then run:

```
docker build -t esaude-admin-web:dev .
```

## Testing

### Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## License

[MPL 2.0 w/ HD](http://openmrs.org/license/)
