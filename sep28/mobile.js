

var mobile = {
    company : "Samsung",
    model: "M53",
    ram: 8,
    storage : 256,
    usedStorage : 102 ,
    
    remainingStorage : function(){
       return this.storage-this.usedStorage
    },
    
}



console.log("remaining storage in mobile is " + mobile.remainingStorage());
