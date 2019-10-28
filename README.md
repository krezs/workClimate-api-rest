# Survey Project with typeORM, expressJS

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
```
    {
       "type": "mysql",
       "host": "localhost",
       "port": 3306,
       "username": "test",
       "password": "test",
       "database": "test",
       "synchronize": true,
       "logging": false,
       "entities": [
          "src/entity/**/*.ts"
       ],
       "migrations": [
          "src/migration/**/*.ts"
       ],
       "subscribers": [
          "src/subscriber/**/*.ts"
       ],
       "cli": {
          "entitiesDir": "src/entity",
          "migrationsDir": "src/migration",
          "subscribersDir": "src/subscriber"
       }
    }
```    
3. Create .env file with enviroment variables
```
    APP_HOST = '127.0.0.1'
    APP_PORT = '3000'
```
4. Run `npm start` command
 
