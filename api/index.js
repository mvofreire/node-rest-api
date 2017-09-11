
const Koa = require('koa')
const configDb = require('app/config/db.config')

const iniciateDb = () =>{
    console.log(configDb);
}

const registerModels = () =>{

}

const registerRoutes = () =>{
    
}

const ApiRest = {
    init(){
        const app = new Koa();

        //init db connection
        iniciateDb()
        
        //register models
        //registerModels()

        //register routes
        registerRoutes()

        console.log('server listenig on port localhost:4000');
        app.listen(4000);
    }
}
module.exports = ApiRest