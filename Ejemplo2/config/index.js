'use strict'

const pkg = require('../package.json')

const config = 
{
    //db: process.env.MONGODB_URL
    db: 'mongodb://127.0.0.1:27017/test'
}

Object.assign(config, { pkg })

module.exports = config