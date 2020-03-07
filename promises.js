let authenticateUser = function(uname ,password){
    return new Promise(function(resolve,reject){
        if(uname == "Rakshith" && password=="rakshithrock999"){
           resolve("Rakshith Singh") 
        }
        else{
            reject("Error in username and password");
        }
    });
};


let verifyUserName = function(name){
    return new Promise(function(resolve,reject){
        if(name == "Rakshith Singh"){
            resolve(name);
        }
        else{
            reject("error in verifyUser");
        }
    });
}

let getRoles = function(name){
    var arr=["Developer","Manager","Admin"];
    return new Promise(function(resolve,reject){
        if(name == "Rakshith Singh"){
            resolve(arr);
        }
        else{
            reject("error at getRoles");
        }
    });
}; 

let checkUserAccess=function(arr){
    var count=0;
    return new Promise(function(resolve,reject){
        for(var i=0; i<arr.length;i++)
        {
            if(arr[i]=="Developer" || arr[i]=="Manager" ||arr[i]=="Admin"){
                count++;
            }
            else{
                reject("Failure");
                break;
            }
        }
        if(count==3){ resolve("success");}
    });
};

authenticateUser("Rakshith","rakshithrock999").then(function(name){
    return verifyUserName(name);
}).then(function(name){
    return getRoles(name);
}).then(function(arr){
    return checkUserAccess(arr);
}).then(function(status){
    console.log(status);
}).catch(function(status){
    console.log(status);
})