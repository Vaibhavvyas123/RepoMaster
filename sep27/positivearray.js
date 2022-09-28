var numbers = [-3,4,-4,6,7,-9,87,-5,67]


function positiveArray(numbers){
    var newArr = numbers.filter((n)=>{
        return n > 0;
    })
    return newArr;
}


console.log(positiveArray(numbers));












