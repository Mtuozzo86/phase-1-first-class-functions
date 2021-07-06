function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    const newFunction = function(){
        
    }
      
    return newFunction
    
}

function returnsAnAnonymousFunction(){
    return function(){}
}