var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  var url_parse = url.parse(req.url, true)
  if(url_parse.pathname === '/api/parsetime'){
    var date = new Date(url_parse.query.iso)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(
      {
        'hour' : date.getHours(),
        'minute' : date.getMinutes(),
        'second' : date.getSeconds()
      }
    ))
    /*
    console.log(url_parse)
    var iso_time = url_parse.query.iso
    var parts = iso_time.split('T')[1].split('.')
    //console.log(parts)
    var hms = parts[0].split(':')
    var ret = {'hour': Number(hms[0]), 'minute': Number(hms[1]), 'second' : Number(hms[2])}
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(ret))
    */

  }
  else if(url_parse.pathname === '/api/unixtime'){
    var iso_time = url_parse.query.iso
    // or use Date.getTime()
    var unixtime = Date.parse(iso_time)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(
      {
        'unixtime' : unixtime
      }
    ))
  }
  else{
    console.log("404")
    res.writeHead(404)
    res.end()
  }
})
server.listen(process.argv[2])
