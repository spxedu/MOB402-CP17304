var fs = require('fs');
var myMD = require('../models/sanpham.model');


exports.list = async (req, res, next)=>{
    // thêm điều kiện lọc
    let dieu_kien_loc = null;
    if(typeof(req.query.price) != 'undefined'){
        // dieu_kien_loc = { price: req.query.price }; // tìm chính xác
        dieu_kien_loc = { price: {$gte: req.query.price } }; // >= xxxx

    }

    // let list = await myMD.spModel.find(  dieu_kien_loc ).sort( { name: 1 } );
    let list = await myMD.spModel.find(dieu_kien_loc).populate('id_theloai');
    console.log(list);
    
    res.render('sanpham/list', { listSP: list})
}
exports.add = (req, res, next)=>{
     
    var url = '';
    if(req.method =='POST'){
        console.log(req.file, req.body );
        try {
            fs.renameSync(req.file.path,
                './public/uploads/' + req.file.originalname) ;
                url = 'http://localhost:3000/uploads/' + req.file.originalname;

             console.log('url: http://localhost:3000/uploads/' + req.file.originalname );

        } catch (error) {
            
        }
        
    } 
 



    res.render('sanpham/add',{url:url})
}


exports.addSanPham = async (req,res,next)=>{
    //khai báo biến thông tin
    let msg = '';
    if(req.method =='POST'){
        // kiểm tra hợp lệ dữ liệu nếu có....

        // tạo model để gán dữ liệu
        let objSP = new myMD.spModel();
        objSP.name = req.body.name;
        objSP.price = req.body.price;
        objSP.description = req.body.description;
        // ghi vào CSDL
        try {
            let new_sp = await objSP.save();
            console.log(new_sp);
            msg = 'Thêm mới thành công';

        } catch (error) {
            msg = 'Lỗi '+ error.message;
            console.log(error);
        }

    }


    res.render('sanpham/add-san-pham', {msg: msg });
}