function serverFarm(jobs, servers) {
    var serverQ = [];
    var result = [];
    for (var b = 0; b < servers; b++) {
        serverQ.push([0, b]);
        result.push([]);
    }
    var jobQ = [];
    for (var i = 0; i < jobs.length; i++) {
        jobQ[i] = [jobs[i], i];
    }
    jobQ.sort();
    for (var a = 0; a < jobQ.length; a++) {
        var copy = serverQ.slice().sort(function(a,b){
            return a[0]-b[0];
        });
        var smallest = serverQ.slice().sort().pop()[1];
        var minIndex = serverQ.indexOf(smallest);
        serverQ[minIndex] = serverQ[minIndex] + jobQ[minIndex][0];
        result[minIndex].push(jobQ[minIndex][1]);
    }
    return result;
}
