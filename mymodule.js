module.exports = function(dir, ext, cb){
	var fs = require('fs')
	fs.readdir(dir,
		function doneReading(err, files){
            if(err)
                return cb(err)
            var filtered = new Array();
    		for(var i = 0; i < files.length; ++i){
    			//console.log(files[i])
    			if(process.argv.length >= 4){
    				//console.log(process.argv[3])
    				var ext_len = process.argv[3].length
    				//console.log(files[i].substr(files[i].length - ext_len, ext_len))
    				if(files[i].substr(files[i].length - ext_len - 1, ext_len + 1) == '.'+ process.argv[3])
    					filtered.push(files[i])
                        //console.log(files[i])
    			}
    			else{
                    filtered.push(files[i])
    				//console.log(files[i])
    			}
    		}
            cb(null, filtered)			
		})
}