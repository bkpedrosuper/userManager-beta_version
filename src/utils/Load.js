const fs = require('fs');

function load(content){
    const buffer = fs.readFileSync('./autenticacao.json', 'utf-8')
    const contentJson = JSON.parse(buffer)
    return contentJson
}