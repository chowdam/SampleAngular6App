# MyAppTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

My NOTES:  Run `npn run build` to run build with aot,  prod, stas-json options to give minimal verison of code to deploy to production

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Additional Lakshmi Notes

## ------------Angualr6 Learning Notes------------
npm install webpack-bundle-analyzer --save-dev
ng build --stats-json
npm run stats


ng b --aot --prod --stats-json

ng serve --port 8626

## Adding Angualr Material package
ng add @angular/material
ng g @angular/material:material-nav --name nav

->update nav.component.html to have routerlink from app.component.html and clear other stuff which are now no more needed in app.componnet.html

-> now we create dashboard also using angular material using  below angualr material schematic syntax:
ng g @angular/material:material-dashboard --name dashboard

ng g @angular/material:material-table --name customer-list

## Add new application
ng generate application help-area

-> now you can build each project by its name as below;
ng build my-app-test
ng build help-area

->now you can run both of them as below;

ng serve help-area
http://localhost:4200/


ng serve my-app-test --port 8626
http://localhost:8626/dashboard


## Adding Library to the project
ng generate library --help

whenever you added a libarry, cli updates  tsconfig for the library referece. So whenver you have any changs amde to the library hen you must build library for the app to see it.


ng generate library my-lib 
ng build my-lib

ng build my-lib --prod


-> angualr cli finds libraries in tsconfig paths and then in node_modules folder
-> must build before use
-> import the library as below
   import { logger } from 'my-lib';

-> keep your public_api.ts current 

-> once libraryis completed, we have to publish the library to npm. for that you have to build with prod option as "ng build my-lib --prod". then go to the dis/my-lib folder and publish using "npm publish" command.

-> for more info on how to publish go to https://jpapa.me/npmpublish

##Use Angualr Console
Install consoel from https://angularconsole.com and use it to build, run and test angualr application in a user friendly GUI.


## Auding and Security
nsp check
npm audit
npm audit --parseable
npm audit > audit.txt

npm audit --json



npm audit fix 
npm audit fix --force 
npm audit fix --production --force


-> to fix only in dev build
npm audit fix --only=dev



-> to fix only in prod build
npm audit fix --only=prod

-> run npm install. this will again gives known security vulnerabilities. in this case remove package-lock.json and node_moduels folder with below commands:

rm package-lock.json
rm -rf node_modules/

-> run npm audit and fix again to fix them all

## list and info of installed packages
npm list
npm list chokidar 
-> chokidar is one od node modules folder, and we can see its cascading dependencies graph with above command


npm info <package-name>
ex: npm info rxjs
