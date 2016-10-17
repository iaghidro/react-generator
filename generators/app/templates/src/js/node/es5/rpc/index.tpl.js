var SDK = require("core-sdk")();
var log = SDK.log.createLogger();
var Task = require("./task");
var queue = SDK.queue;
var queueName = "<%= fileName %>";
var numWorkers = 1;

var runner = new queue.createWorker({
    queue       : queueName,
    concurrency : numWorkers,
    retryCount  : 0,
    retryDelay  : 2,
    handler     : function(job) {
        var task = Task.create();
        task.run(job);
    }
});