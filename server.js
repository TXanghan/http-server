const http = require('http');

const fs = require('fs');

const port = 9091;

const requestHaldler = (req,res)=>{
    // res.write("<h1>hello</h1>");
    // res.end();
    // console.log(req.url);

    let fileName = "";

    switch(req.url){
        case '/' :
            fileName = "./home.html";
        break;

        case '/about' :
            fileName = "./about.html";
        break;

        case '/contact' :
            fileName = "./contact.html";
        break;

        case '/blogs' :
            fileName = "./blogs.html";
        break;
    }

    fs.readFile(fileName,(err,result)=>{
        if(!err){
            res.end(result);
        }
    })
}

const server = http.createServer(requestHaldler);

server.listen(port,(err)=>{
    if(err){
        console.log("server not start in port");
        return false;
    }
    console.log("server start in port:-"+port);
})