function receivesAFunction(callback){
    callback();  
}
function returnsANamedFunction(){
    return function namedFuction(){
        return "cry little one"
    }
}
function returnsAnAnonymousFunction(){
    return () => "Moringa";
}