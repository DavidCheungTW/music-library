## Project title

Music Library - an API exercise for Express, Postgres database and **CRUD** operations.

- [Music library deployment](https://dashboard.render.com/)

## Project setup

### Environment setup

1. Docker - run
   ```
   docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
   ```
2. pgAdmin - setup database serviers 'postgres'
3. Postman

### API setup

1. change to working directory, i.e. /projects
2. run
   ```
   git clone https://github.com/DavidCheungTW/music-library.git
   cd music-library
   npm install
   ```
3. Environment variables

   Create a `.env` file for postman test:

   ```
    PGUSER=postgres
    PGHOST=localhost
    PGPASSWORD=password
    PGDATABASE=music_library_dev
    PGPORT=5432
    PORT=3000
   ```

   Create a `.env.test` file for `npm test`:

   ```
    PGUSER=postgres
    PGHOST=localhost
    PGPASSWORD=password
    PGDATABASE=music_library_api_test
    PGPORT=5432
    PORT=3000
   ```

## Tests

### Test by node

1. use `music_library_api_test` database
2. change to music-library directory
3. run `npm test` to execute the test
4. add test case to \*.test.js files
5. run `npm test` to execute the test again

### Test by Postman

1. use `music_library_dev` database
2. change to music-library directory
3. run `npm start` to start testing
4. input test cases in Postman and check results (remark: suggest to use \*.test.js test cases first, then you can add your own test case)
5. Example:

   Add Artist record:

   POST : http://localhost:3000/artists

   BODY/RAW/JSON :
   `{ "name": "Tame Impala", "genre": "rock" }`

   Response Body:

   ```
   {
   "id": 1,
   "name": "Tame Impala",
   "genre": "rock"
   }
   ```

   Add Album record:

   POST : http://localhost:3000/artists/1/albums

   BODY/RAW/JSON :`{"name": "Tame Impala Album","year": 1968}`

   Response Body:

   ```
   {
   "id": 1,
   "name": "Tame Impala Album",
   "year": 1968,
   "artistid": 1
   }
   ```

## Learning npm modules

For development libraries

- [dotenv](https://github.com/motdotla/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)

For production libraries

- [pg](https://node-postgres.com/)
- [postgres-migrations](https://www.npmjs.com/package/postgres-migrations)
- [swagger](https://dailyspaghetticode.com/adding-swagger-to-your-expressjs-api/)

  Others learning

- [race condition](https://www.youtube.com/watch?v=KF8dF1QS8Go)
- [SQL Injection](https://www.veracode.com/blog/secure-development/how-prevent-sql-injection-nodejs)
- [testing with github actions](https://docs.github.com/en/actions/quickstart)
- [render doc](https://render.com/docs/)

## Credits

### Recommended Reading List

- [Docker in 5 minutes](https://www.youtube.com/watch?v=_dfLOzuIg2o)
- [Docker installation](https://docs.docker.com/get-docker/)
- [pgAdmin4 installation](https://www.pgadmin.org/download/) (Remark:Just install **macOS** for Mac computer)

## License

Free license

MCRCODES © [David Cheung]()
