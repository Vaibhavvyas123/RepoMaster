var str = "ujjwal";

function converter(str){
    var strArr = [];

    for(let i = 0;i<str.length;i++){
         strArr[i] = str.charAt(i);
    }

    return strArr;
}


console.log(converter(str));