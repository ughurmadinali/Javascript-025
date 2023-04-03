1
function sortByLength(arr) {
    arr.sort((a, b) => a.length - b.length)

    return arr
}

2
function getAbsSum(num) {
    let sum = 0

    for(let x of num){
        sum += Math.abs(x)
    }

    return sum
}

console.log(getAbsSum([2, -1, 4, 8, 10]));

3
//function emotify(a){
    //if(a.includes('улыбка')){
        //return :D
    //}
//}

//console.log(emotify('улыбка'));


//unction emotify(a){
    //if(a.includes('усмешка')){
        //return :)
    //}
//}

//console.log(emotify('усмешка'));


//function emotify(a){
    //if(a.includes('грустно')){
    //    return :(
    //}
//}
//console.log(emotify('грустно'));

4
function mean(num) {
    let sum = 0

    for(let x of num){
        sum += x / 11
    }

    return sum
}
console.log(mean(1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3));

5
