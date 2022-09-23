## Movie Survey

Application is available at: https://movie-survey-be.herokuapp.com/api/v1/

## Local Environment

These variables are recommended for local development:

```
PORT=4000
DATABASE_URL=postgres://postgres:123@localhost:5432/postgres
DATABASE_SSL=
```

## Local Database

You should have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.
Then in the project root you can use:

### `docker-compose up`

Creates docker container with local PostgreSQL database.

### `docker exec -i movie-survey-be_db_1 pg_restore -U postgres -d postgres < backup/db.sql`

Restores the database from provided backup.

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs project dependencies.

### `yarn watch`

Runs the app in the development mode.\
Open [http://localhost:4000/](http://[::1]:4000/) to access application.

### `yarn build`

Builds the app for production to the `dist` folder.

### `yarn start`

Runs the app from the `dist` folder. Application should be build before with the `yarn build` command.
