function verifyUser(username) {
    return new Promise(function(resolve,reject){
        if(username=="rakshith")
        resolve(username);
        else
        reject("Invalid User");
    });
}

function getRoles(username){
    var arr=["Developer","Manager","Admin"];
    return new Promise(function(resolve,reject){
        if(username=="rakshith")
        resolve(arr);
        else
        reject("invalid");
    })
}
function checkUserAccess(arr){
    var count=0;
    return new Promise(function(resolve,reject){
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]=="Admin" || arr[i]=="Developer" || arr[i]=="Manager")
        {
            count++;
        }
        else
        {
            reject("Invalid");
        }
    }
    if(count==3){
        resolve("Success");
    }
})
}
function authenticateUser(username,pwd){
    return new Promise(function(resolve,reject){
        if(username=="rakshith" && pwd=="rakshithrock999")
        resolve(username);
        else
        reject("Failure");
    })
}
async function res(){
    try{
        var p=await authenticateUser("rakshith","rakshithrock999");
        var q=await verifyUser(p);
        var r=await getRoles(q);
        var s=await checkUserAccess(r);
        console.log(s);
    }
    catch(exception){
        console.log("exception :",exception);
    }
}
res();