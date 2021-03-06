export default {
    server:
    {
        port: 5000
    },
    db:
    {
        database: 'leitura_educativa',
        username: 'root',
        password: '',

        options: {
            host: 'localhost',
            dialect: 'mysql',

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },

            // SQLite only
            //storage: 'path/to/database.sqlite'
        }
    }
}