const http = require('http');
const sv = http.createServer((req, res)=>{
    //  vào trang / thì là home
    // vào trang /gioithieu.html thì hiển thị nội dung giới thiệu
    console.log(req.url);
    switch(req.url){
        case '/':               homePage(req, res);  break;
        case '/gioithieu.html': aboutPage(req, res);  break;
        default:
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('Dia chi trang web khong ton tai')
        break;
    }
});
const homePage = (req, res)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<meta charset="utf-8"/> <h1>Đây là trang chủ </h1>');
}
const aboutPage = (req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<meta charset="utf-8"/> <h1>Đây là giới thiệu </h1>');
}
sv.listen(8080);
console.log("Server đang chạy cổng 8080");