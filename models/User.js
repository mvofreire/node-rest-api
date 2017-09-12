import Model from 'webhd-node-api-rest/dist/model'
import Sequelize from 'sequelize'

const User = {
    
    table:'user',

    attributes:{
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    },
    
    methods:
    {
        findByName:(name)=>{
            return this.findOne({firstName:name});
        }
    }
}

export default Model.define(User)