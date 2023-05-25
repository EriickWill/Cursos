exports.getFlag = function(arg){
    for(let i = 0; i < process.argv.length;i++){
        if(process.argv[i] == arg){
            return process.argv[++i]
            
        }
    }

}

