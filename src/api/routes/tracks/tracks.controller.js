const { httpError } = require('../../helpers/handleError.helper')
const userModel = require('../../../DB/models/users.model')

const {dataMusic} = require('./data');

const getItems = async(req, res) => {
    try {
        res.send({ data: dataMusic })
    } catch (e) {
        httpError(res, e)
    }
}

// TODO: Implementar despues
const getItem = (req, res) => {
}

module.exports = { getItem, getItems }