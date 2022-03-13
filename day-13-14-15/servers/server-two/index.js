const http = require('http');

http.createServer(function(req,res){


    // get the data from user POST method
     
    const method = req.method;


    if (method === 'POST') {
        
        let stream = [];
        req.on('data',(info)=>{
            stream.push(info);
        }).on('end',()=>{
            const body = (JSON.parse(stream.toString()));
            console.log(body.name);
            res.end();
        })

    }else{
        res.write("bad request");
        res.end();
    }


    

}).listen(8080)