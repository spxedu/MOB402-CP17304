const http  = require('http');
const fs    = require('fs'); 
const sv = http.createServer( (req, res)=>{
    console.log(req.url);
    switch(req.url){
        case '/': // trang chủ
           res.writeHead(200, {'Content-Type':'text/html'});
            res.end('Trang home <img src="/logo.png" />');
        break;
        case '/logo.png': // trả về ảnh
            fs.readFile('./logo.png', (err, data)=>{
                    if(err)
                        throw err;
                    res.end(data);
            });
        break;
        default:
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end('Khong xac dinh dia chi trang web');
        break;
    }
})

sv.listen(8080);
console.log("Server đang chạy cổng 8080");