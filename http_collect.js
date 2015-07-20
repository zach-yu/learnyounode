var http = require('http')

http.get(process.argv[2], 
	function(res){
		/*
		//* solution 1: use buffer list module
		var bl = require('bl')

		res.pipe(bl(function(err, data){
			if(err)
				return console.error(err)
			var output = data.toString()
			console.log(output.length)
			console.log(output.toString())
		}))*/
		
		var buf = new Buffer('')
		res.on('data', function(data){
			buf = Buffer.concat([buf,data])
		})
		res.on('end', function(){
			//console.log("on end")
			str = buf.toString();
			console.log(str.length)
			console.log(str)
		})
		
	})