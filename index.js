const http=require("http")
http.createServer((req,res)=>{
console.log(req);
res.end("hello!!Amessage from Ivy's server")

}).listen(8000)