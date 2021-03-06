var joi = require('joi');
var helper = require('./common');

module.exports = {
    parse: function(schema) {
        var schemaArr = JSON.parse(schema);
        var fullSchema = schemaArr.map(function(field) {
            return  {
                lowerCamelCase: field,
                kebabCase: helper.toKebabCase(field),
                plainText: helper.toPlainText(field)
            };
        });

        return {
            joi: joi.compile(schemaArr),
            schema: fullSchema,
        }
    }
};
