# AngularAuthNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Features

### NgRx Store

This project is using the redux patern to cominuicate with external APIs and managing the application store implementing [NgRx library](https://ngrx.io/docs) folliwing the [NgRx - Best Practices for Enterprice Angular Applications](https://wesleygrimes.com/angular/2018/05/30/ngrx-best-practices-for-enterprise-angular-applications) guide refered from the [Official NgRx library documentation](https://ngrx.io/docs).

###  Authentication

User authentication is handled following this [guide](https://mherman.org/blog/authentication-in-angular-with-ngrx/).

# Authentication in Angular with NGRX

## Want to learn how to build this project?

Check out the [blog post](http://mherman.org/blog/2018/04/17/authentication-in-angular-with-ngrx/).

## Want to use this project?

1. Fork/Clone
1. Install dependencies - `npm install`
1. Run the development server - `ng serve` 

You will need to also spin up a back-end with the following routes:

| URL                            | HTTP Verb | Action              |
|--------------------------------|-----------|---------------------|
| http://localhost:1337/register | POST      | Register a new user |
| http://localhost:1337/login    | POST      | Log a user in       |
| http://localhost:1337/status   | GET       | Get user status     |

The blog post uses a fake back-end that generates a dummy token to test out the functionality on the front-end. If you'd like to use it, clone down the repo in a new terminal window, install the dependencies, and fire up the app:

```sh
$ git clone https://github.com/testdrivenio/fake-token-api
$ cd fake-token-api
$ npm install
$ npm start
```

> Just keep in mind that the back-end does **not** create a real JSON Web Token (JWT). Feel free to swap it out for a working back-end or use the final application from the [Token-Based Authentication with Node](http://mherman.org/blog/2016/10/28/token-based-authentication-with-node) blog post, if you'd like.