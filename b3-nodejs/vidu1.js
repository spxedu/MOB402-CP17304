const http = require('http');
const server =http.createServer( ( req, res)=>{ 
    res.writeHead(200, "Ket noi thanh cong", {
        'Content-Type':'text/html' // text/html: hiển thị html, text/plain: hiển thị text thuần
    });

    res.write("<h1>Xin chao lop </h1>");
    res.end();

}  );
// khởi chạy server
server.listen(8080, "localhost", (err)=>{
        if(err)
            console.log(err);
    console.log("Server dang chay  http://localhost:8080  ");
});
// Chạy server:   node vidu1.js 
// gõ lệnh: dir  và enter để xem thư mục có nhìn thấy file js không
// dùng lệnh: cd <tên_thư mục> để vào vị trí thư mục chứa code.