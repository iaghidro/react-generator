/**
 * @apiName <%= fileName %>
 * @api {get} v1/<%= fileName %>
 *
 *
 * @apiSuccess {Object} Object Value returned on success
 *
 * @apiError {Boolean} success false
 * @apiError {String} error Details on the error that the user needs to handle
 */

var SDK             = require('core-sdk')();
var util            = SDK.util;
var Joi             = require('joi');
var Class           = SDK.className;
var libObjectConfig = require('../../lib/objectName');

module.exports = {
    routeType: ["HTTP_FUNCTION"],
    routePath: ["/<%= fileName %>"],
    validateInput: validateInput,
    processRequest: processRequest,
    createOutput: createOutput
};

function validateInput(req, res, cb) {
    var schema = Joi.object().keys({
    });

    Joi.validate(req.body, schema, {stripUnknown: true}, function (err, objectName) {
        if (err) {
            return cb(util.buildErr(400, 'An error occurred while validating input', req, err));
        }
        return cb(null, objectName);
    });
}

function processRequest(objectName, req, res, cb) {
    var classInstance = Class.create();
    classInstance.execute(function (err, returnObjectName) {
        if (err) {
            return cb(util.buildErr(400, "Error message goes here", req, err));
        }
        cb(null, returnObjectName);
    });
}

function createOutput(objectName, req, res, cb) {
    libObjectConfig.generateOutput(objectName, cb);
}
