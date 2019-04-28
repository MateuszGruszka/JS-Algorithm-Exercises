var leastInterval = function(tasks, n) {
    let counter = {};
    tasks.forEach(task => {counter[task] = counter[task] && counter[task] + 1 || 1});
    
    let keys = Object.keys(counter).sort((a,b) => {
        return counter[b] - counter[a]
    });
    
    return keys.reduce((res, value, index) => {
        return Math.max(res, (counter[value]-1) * (n+1) + index + 1)
    }, tasks.length);
};