var mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], 
	function done(err, data){
		if(err)
			return console.log(err)

		data.forEach(function(file){
			console.log(file)
		})
	})