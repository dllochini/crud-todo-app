# crud-todo-app
YarlInsight 2.0 - Hands-on : Backend Development (MongoDB, Node.js &amp; Express)

1. created project repo in github
2. clone the repo to our local
3. created the high-level project structure -> backend, frontend

# backend

## creating the backend skeleton

4. npm init -y
        give the package.json file
5. npm install express mongoose dotenv nodemon
       install dependecies for the server
            mongodb - database
            express -
            dotenv - keep some variables confidential
            nodemon  - development purpose. auto restart the server in each save.
6. create server.js file
7. do these changes to package.json file
        "main": "server.js",
        "scripts": 
            "start": "node server.js",
            "dev" : "nodemon server.js"
8. server.js

## creating the frontend skeleton

9. npx create-create-app 
        create the react app -> npm start
10. delete these files in src -> App.css, App.test.js, logo.svg, reportWebVitals.js, setupTests.js,
11. delete code segments -> 
        index.js last 4 lines, 
        all in index.css, 
        everything under div element in App.js,
        all unnecessary imports

## create endpoints (in backend)

12. create route.js and add get, put, post, delete methods
13. test the methods using postman

## create a new project and a cluster in mongodb 

14. copy the code: mongodb+srv://##:##@cluster0.mefclwa.mongodb.net/task_manager
        naming convention - small case, space -> underscore/hyphen

## connect backend with db
create .env file


