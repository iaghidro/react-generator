
function <%= fileName %>() {}

<%= fileName %>.prototype.init = function (cb) {
    
    cb();
};

module.exports = {
    create: function () {
        return new <%= fileName %>();
    }
};