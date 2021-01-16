# About

QA is the node.js application, which allow user implementing Q&A functionality into their website.
It consist

## Prerequisites:


- Node.js and npm installed.
- an existing Node.js app (QA app)
- a free Heroku account ([sing-up for Heroku account](https://signup.heroku.com/))
- the Heroku CL ([download Heroku CLI](https://devcenter.heroku.com/categories/command-line))
- git installd on the local machine 

## Pre-installation:
Before deploying application to the private or public server, its necessary to provide the information necessary for the deployment.

- your database address, hash and limit result (pagination) should be set in .env file
- when pushing application to Heroku remove node_modules, Heroku will install all necessary modules on your package.JSON file 


## Installation (on Heroku):
Installation can be done on any public or private server. Bellow given a guidance for Heroku deployment, which is the free-to-use deployment.
Additional info can be found directly at [Heroku website](https://devcenter.heroku.com/articles/deploying-nodejs).

1. Declare dependencies.
```bash
cd your-directory
npm init
```
2. Declare node version in package.json file. Whitht it, Heroku wouldn't know which version is supporting your application.
```bash
"engines": {
    "node": "10.x"
  },
```
3. Initiate the git project. Remember to do it in your project folder.
```bash
git init
```
4. Deploy your application to Heroku. Heroku will ask you to pass the login criteria.
```
git add .
git commit -m "Added a Procfile."
heroku login
heroku create
git push heroku master
```


## Usage

You app can be accessed for the public address provided by Heroku during implementation.

## Contributing
Application may be subject to any changes.

## License
[Unlicense](https://choosealicense.com/licenses/unlicense/)