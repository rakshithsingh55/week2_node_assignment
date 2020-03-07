function authenticateUser(username,pwd,callback){
    if(username=="rakshith" && pwd=="rakshithrock999"){
        console.log("hello1");
        callback("Rakshith Singh");
    }
    else{
        callback("invalid user/password");
    }
}

function verifyUser(name,callback){
    if(name=="Rakshith Singh"){
        console.log("hello2");
        callback(name);
        
    }
    else{
        callback("invalid name");
    }
}

function getRoles(name,callback){
    var arr=["Developer","Manager","Admin","Hr"];
    if(name=="Rakshith Singh"){
        console.log("hello3");
        callback(arr);
    }
    else{
        callback("Ivalid designation");
    }
}

function checkUserAccess(arr,callback){
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]=="Developer" || arr[i]=="Manager" ||arr[i]=="Admin" ||arr[i]=="Hr"){
            count++;
        }
        else{
            callback("failure");
            break;
        }
    }
    if(count==4)
    {
        console.log("hello4");
        callback('success');
    }
    
}

authenticateUser("rakshith","rakshithrock999",function(para1){
    verifyUser(para1,function(para2){
        getRoles(para2,function(para3){
            checkUserAccess(para3,function(para4){
                console.log(para4);
            });
        });
    });
});