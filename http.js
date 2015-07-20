var http = require('http')
http.get(process.argv[2], 
	function(res){
		res.on('data', function(data){
			console.log(data.toString())
		})
		res.on('error', console.error) 
	}).on('error', function(e){
		console.log(e)
	})