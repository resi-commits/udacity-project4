# Table of Content
- [Table of Content](#table-of-content)
- [Evaluate a News Article with Natural Processing Language](#evaluate-a-news-article-with-natural-processing-language)
  - [Project Description](#project-description)
  - [How to run this project](#how-to-run-this-project)
  - [Technologies](#technologies)
  - [Author information](#author-information)
  - [Credits](#credits)

# Evaluate a News Article with Natural Processing Language
## Project Description
This project requires to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites using the MeaningCloud API.
## How to run this project
For this project you'll need some terminal commands to actually test it:
* before running any command on the terminal, run `npm install` to get all dependencies (be sure that you are in the project directory and not in any sub-folder)
* after that you can run the project in two modes:
  * development: `npm run build-dev` to run a webpack dev server and test this project in development environment (default webpack dev server port is used: 8080)
  * production: `npm run build-dev` to build all necessary files into the distribution folder (`/dist`)
  * with `npm start` you can start the server (it listens on port 8081)
* besides, you can execute the test cases to check if all functions in `../src/client/js/` are working as expected: you can run `npm run test` on the terminal

## Technologies
Multiple technologies are used in this project:
* Setting up Webpack
* Sass styles
* Webpack Loaders and Plugins
* Creating layouts and page design
* Service workers
* Using APIs and creating requests to external URLs (MeaningCload API)
## Author information
My name is Theresa Adam and this is my first official project where I work with webpack. Hope you enjoy it. 

## Credits
* The basic project was forked from the [udacity/fend Github repository](https://github.com/udacity/fend) and then customized
* For the ReferenceError Exception[ this knowledge post](https://knowledge.udacity.com/questions/174638) was used to resolve it
* To check if the input is an URL, the regex from [this post](https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript) was used