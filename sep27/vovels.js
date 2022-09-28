var myName = "Ujjwal Lade aaa";


function countVovels(myName){
    var count = 0;
    for(var i = 0; i<myName.length;i++){
        myName = myName.toLowerCase();
        if(myName.charAt(i)  === "a" || myName.charAt(i) === "e" ||myName.charAt(i) === "i" 
        || myName.charAt(i) === "o" ||myName.charAt(i) === "u" ){
            console.log(`vovel is ${myName.charAt(i)}`);
            count = count + 1;
        }
    }
    console.log(myName);
    return count;
}
console.log("total vovels counts are ",countVovels(myName));
