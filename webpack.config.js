const merge = require('lodash/merge')
const defaultConfig = require('./webpack_config/default')
const extraConfig = require(`./webpack_config/${process.env.NODE_ENV === 'development' ? 'dev' : 'prod'}`)

module.exports = merge(defaultConfig, extraConfig)