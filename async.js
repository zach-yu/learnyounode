var http = require('http')
/*
var async = require('async')
async.map([process.argv[2], process.argv[3], process.argv[4]],
	http.get,
	function(err, results){
		if(err){
			//console.log("error")
			console.log(err);
			return
		}
		results.forEach(function(result){
			console.log(result.toString())
		})
	})
*/
var urls = process.argv.slice(2,process.argv.length);

var map = []

function print_map(){
	//console.log("in print_map")
	for(i = 0; i < map.length; ++i){
		console.log(map[i])
	}
}


var response_count = 0
/*
// solution 1: use array.map
urls.map(function(url, idx){
	http.get(url, function(res){
		var buf = new Buffer('')
		res.on('data', function(data){
			buf = Buffer.concat([buf,data])
		})
		res.on('end', function(){
			map[idx] = buf.toString();
			if(++response_count > 2){
				print_map()
			}
		})
	})	
})
*/

// solution 2: using buffer list
function httpGet(index){
	http.get(process.argv[index], function(res){
		var bl = require('bl')

		res.pipe(bl(function(err, data){
			++ response_count;
			if(err){
				map[index - 2] = data.toString()
				//map.push(data.toString())
				if(response_count > 2){
					print_map()
				}
				return console.error(err)
			}
			//console.log("i: " + index)
			//console.log("pushing string: " + data.toString())
			map[index - 2] = data.toString()
			//console.log(map.toString())
			if(response_count > 2){
				print_map()
			}

		}))
	})	
}

for(i = 2; i < 5; ++i){
	httpGet(i)
}

/*
for(i = 2; i < 5; ++i){
	http.get(process.argv[i], function(res){
		var bl = require('bl')

		res.pipe(bl(function(err, data){
			++ response_count;
			if(err){
				map[i] = data.toString()
				//map.push(data.toString())
				if(response_count > 2){
					print_map()
				}
				return console.error(err)
			}
			//console.log(response_count)
			// i is not the index we expected!!!!
			console.log("i: " + i)
			console.log("pushing string: " + data.toString())
			map[i] = data.toString()
			console.log(map.toString())
			if(response_count > 2){
				print_map()
			}

		}))
	})
}
*/

