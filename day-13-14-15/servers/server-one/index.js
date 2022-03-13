const http = require('http');
//const dateModule = require('./my-modules/DateModule')
//const uppercase = require("uppercase")
const url = require('url');

const fs = require('fs');

http.createServer(function(req,res){
    //res.write(`the date   ${dateModule.getCurrentYear()}/${dateModule.getCurrentMonth()}/${dateModule.getCurrentDate()} `);
    const query = url.parse(req.url,true).query
    const pathname = url.parse(req.url,true).pathname
    /* ULR
    
    
    const search = url.parse(req.url,true).search
    const host = url.parse(req.url,true).host
    const path = url.parse(req.url,true).path
    
    
    console.log(query);
    console.log(pathname);
    console.log(search);
    console.log(host);
    console.log(path);


    switch (pathname) {
        case '/somme':
            const x = Number(query.x);
            const y = Number(query.y); 
            res.write( (x+y).toString() )
            res.end();
            break;
        case '/soustraction':
            const x2 = Number(query.x);
            const y2 = Number(query.y); 
            res.write( (x2-y2).toString() )
            res.end(); 
        break;
    
        default:
            res.write('welcome to our app')
            res.end();
            break;
    }*/


    // FS
    /*fs.writeFile('./fruits.txt','apples',function(err){
        console.log(err);
        res.end();
    })*/

   /* if (pathname === '/add-fruit') {
        fs.appendFile('./fruits.txt',query.fruit+'#',function(err){
            console.log(err);
            res.end();
        })
    }

    if (pathname === '/fruits') {
        fs.readFile('./fruits.txt',function(err,data){
            let blocHtml = '<ul>';

            const fruits = data.toString().split("#");

            fruits.map((f)=>{
                blocHtml = blocHtml+'<li>'+f+'</li>'
            })

            blocHtml= blocHtml+'</ul>'

            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(blocHtml);
            res.end();
        })
        
    }*/

    switch (pathname) {
        case '/winter':
            fs.readFile('./template/winter.html',function(err,data){
                res.write(data.toString());
                res.end();
            })
            break;
            case '/summer':
            fs.readFile('./template/summer.html',function(err,data){
                res.write(data.toString());
                res.end();
            })
            break;
        default:
             
                fs.readFile('./template/app.html',function(err,data){
                    res.write(data.toString());
                    res.end();
                }) 
            break;
    }



    
    
    
    
}).listen(8080)