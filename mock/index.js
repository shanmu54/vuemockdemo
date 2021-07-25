const fs = require('fs')
const path = __dirname
const files = fs.readdirSync(path + '/modules')
const mockList = [];
files.forEach(function (filename){
    let model = require(path + '/modules/' + filename);
    mockList.push(...model)
})

function handleMock(app) {
    mockList.forEach(func=>{
        func(app)
    })
}
module.exports = handleMock;
