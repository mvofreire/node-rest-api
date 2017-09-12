import Controller from 'webhd-node-api-rest/dist/controller'
import User from 'app/models/User'

class UserController extends Controller {

    constructor(route) { 
        super(route, User)
    }

    get$users = (ctx) => {
        ctx.body = 'teste'
        User.findOne({ name: 'teste' }).then(user => {
            console.log(user);
        }, err => {
            console.log('erro', err);
        })
    }

    post$user = (ctx) => {
        const user = ctx.request.body
        console.log(user);
        User.create(user).then(r => {
            ctx.body = r
        })
    }

    put$user = (ctx) => {
        ctx.body = 'Hello World put User';
    }

    delete$user = (ctx) => {
        ctx.body = 'Hello World Delete User';
    }
}

export default UserController