const http = require("http");
const fs = require("fs");
//only strings allowed inside res.end()

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Here is your normal text response")
    }
    else if(req.url === '/json'){
        const myObject = {
            name: "Sarthak Pandit",
            PRN: "12110900",
            div: "ETC-C"
        }
        res.writeHead(200, {"Content-Type" : "application/json"})
        res.end(JSON.stringify(myObject)) 
    }
    else if(req.url === '/html'){
        res.writeHead(200, {"Content-Type": "text/html"});
        const htmlResp = fs.readFileSync(
            "D:\\WT_Codes\\NodeJS\\httpResponse.html", "utf-8")
        res.end(htmlResp);
    }
    else{
        res.writeHead(404);
        res.end("Page not found!");
    }
})

server.listen(3001, () => {
    console.log("Server listening on port 3001...");
});