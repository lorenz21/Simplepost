# Simplepost
## A simple web application to post to a wall and comment on post(s)

## Dependencies

* body-parser 1.18.3
* ejs 2.6.1
* express 4.16.4"
* pg 7.6.0
* pg-hstore 2.3.2
* sequelize 4.41.0

## Build Setup

1. Clone the repository
  ```bash
  git clone https://github.com/lorenz21/Simplepost.git
  ```

1. Change Directories into the project
  ```bash
  cd Simplepost
  ```

1. Use Node to install Dependencies
  ```bash
  npm install
  ```

1. Create PostgreSQL Databases (If you want to change the names you need to update the config.json)
  ```bash
  createdb -U postgres -w simplepost-dev
  createdb -U postgres -w simplepost-test
  ```

1. Build database
  ```bash
  sequelize db:migrate && sequelize db:migrate --env test
  ```

1. run
  ```bash
  npm start 
  # server at http://127.0.0.1:3000/
  ```

1. test
  ```bash
  npm test 
  # will test all suites
  ```
