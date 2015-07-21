
var net = require('net')
    
var server = net.createServer(function (socket) {
   var strftime = require('strftime')
   console.log(strftime('%B %d, %Y %H:%M:%S'))
   socket.write(strftime('%Y-%m-%d %H:%M'))
   socket.end()

  })
    
 server.listen(process.argv[2])