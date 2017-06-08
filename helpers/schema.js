var joi = require('joi');

module.exports = {
    parse: function(schema) {
        return {
            joi: joi.compile(schema),
            schema: JSON.parse(schema)
        }
    }
};
