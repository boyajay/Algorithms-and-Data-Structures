function dailyIntake(caloricValue) {
    var results = [];
    var closest = 10000;
    var helper = function (arr, current, sum, min){
        for (var i = min; i < arr.length; i++) {
            current.push(i);
            console.log('current is ', current);
            var diff =Math.abs(sum + arr[i] - 2000);
            if (diff < closest ){
                results = [current.slice()];
                closest = diff;
                console.log('results is ', results);
            } else if (Math.abs(sum + arr[i] - 2000) === closest) {
                results.push(current.slice());
            } 
            if (arr.slice(i+1).length >= 1){
                helper(arr, current, sum+arr[i], i+1);
            }
            current.pop();
        }
    }
    helper(caloricValue, [], 0, 0);
    
    results.sort(function (a, b) {
        for (var j =0; j < a.length; j++){
            if (a[j] < b[j]){
                return -1;
            } else if (b[j] < a[j]) {
                return 1;
            }
        }
        return 0;
    });
    
    return results[0];
    
}
