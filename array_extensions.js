Array.prototype.myMap = function(callback){
    const result = [];
    for (let index = 0; index < this.length; index++) {
        result.push(callback(this[index], index, this));
    }
    return result;
}

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let index = 0; index < this.length; index++) {
        callback(this[index]) && result.push(this[index])
    }
    return result;
}

Array.prototype.mySort = function(callback) {
    let result = [...this];
    let index = 0;
    while (index < this.length) {
        let compare = callback(result[index], result[index + 1]);
        if (compare > 0) {
            let temp = result[index];
            result[index] = result[index + 1];
            result[index + 1] = temp;
            index = 0;
        }
        else {
            index++;
        }
    }
    return result;
}