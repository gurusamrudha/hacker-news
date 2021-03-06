# Remote Insurance Corpn

## Issue

Hacker News V3.0
Hacker News is an excellent resource for front end engineers, but it looks quite ugly - have a
look here: https://news.ycombinator.com/ .
Luckily, there is an Official Hacker News API (https://github.com/HackerNews/API )that we
can use to create a better version.

### Install Node & NPM

This project requires latest node and npm 
node -v ==> 12.13.0
npm -v  ==> 6.12.0
ng --version   ==> 11.2.2

### Install Packages

Now you can install this project's packages by running `npm install`.

### Run the Development Server

Run `npm start` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project Structure

Project
  ├── src/app                  - Angular app
  │    ├── Components          - This folder contains all the main components of the Hacker News
  │    ├── Services            - Folder contains all the service files for this project
  │    ├── Shared              - Folder contains Angular material imports and shared components
  │    ├── models              - Folder contains all the interfaces/models
  |    |
  │    ├── licenses            - MIT license


## Points taken care while doing this project
1. Not used any 3rd party libraries. This project is built on Angular material and bootstrap
2. Used bootstrap `4.6.0` for design patterns mainly for toolbar and Quotation form
3. DRY (DONT REPEAT YOURSELF)
4. Localization is taken care.
5. Using Observables or RXJS improperly leads to memory leak. I have used best practices to avoid memory leak.
6. Made sure Subscribed observables are unsubscribed on destroy or otherwise HTML pipe `async` does it automatically.
7. Use of reusable components `Card view, expandable panel and pagination` can be used throughout the project.
8. Written quite a few test cases. `npm run test` to test
9. Lint errors are taken care use `ng lint` to test.
10. This Project is Mobile responsive as well.
11. Specail reason for using CDK (to find viewPort size). For built-in projects to make responssive this would be best function.
12. Type casting and Type assertion at its best. Avoided using type `any`

## I welcome Queries, questions and any suggestions :)
Please do Contact gurusamrudh@gmail.com

