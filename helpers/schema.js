var joi = require('joi');
var helper = require('./helper');

module.exports = {
    parse: function(schema) {
        var schemaArr = JSON.parse(schema);
        var fullSchema = schemaArr.map(function(field) {
            return  {
                lowerCamelCase: field,
                kebabCase: helper.toKebabCase(field)
            };
        });

        return {
            joi: joi.compile(schemaArr),
            schema: fullSchema,
        }
    }
};
