# Github Finder

This is the second Angular project for Moringa Core, Jan 15th, 2022.
The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.18

## Description
Github Finder is a web application that uses the GitHub API to perform searches on GitHub to display the results to the user as well as what they have worked on

## Features

1. Uses the Github API to perform searches on Github, and display the results to the users.
2. Users page searches for user profile using either their username or the repository name
4. Results re


## Behaviour Driven Development

| Behaviour | Input | Output |
| --------- | ------| ------ |
|Show github profile|Enter the Username in the search box and cick `search`|Displays name, username, bio, number of repositories, Hireable, date of creating the repo, followers, following and public gists|
|Search gitub repositories | Navigate to Repos page click on `Repositories` and type the name of repository.|Displays a list of 10 repositories based on the query|
|Load more search Results	|Click `Load More` button on the Find Repos page |Adds 10 more results in the search results|
|Redirect to github profile on Github website | Click the `view on github` button of a Github user | Opens the profile on the Github website|
|Redirect to a specific Github Repository | Click the `view on github` button of a repository on repositories page | Opens the Repository on Github website |


## Known Bugs
There are no known bugs. Contact me if you find any and i would appreciate that feedback.


## Live Website
View the complete site [here](https://leondante-ctrl.github.io/git-google/home)

## Technologies Used
It is built using Typescript, HTML, CSS and Javascript.
The website uses components, custom directives, custom pipes, routing modules.
The components in the application are: dashboard , organisation, repository, user as required

## Contributors
 - Leon Baraka

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## License
---------
### MIT License

Copyright (c) [2022] [Leon Baraka]

### Contact Information
maxgamerdu@gmail.com

## Further help

To get more help on the Angular CLI use `ng help` 