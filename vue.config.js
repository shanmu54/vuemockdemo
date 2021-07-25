const bodyParser = require('body-parser')
const isDev = process.env.NODE_ENV === 'development'

let feMock
if(isDev) {
    feMock = require('./mock')
}
module.exports = {
    devServer :{
        before :app => {
            app.use(bodyParser())
            app.use(bodyParser.urlencoded({extended:true}))
            if(isDev){
                feMock(app)
            }
        }
    }

}
