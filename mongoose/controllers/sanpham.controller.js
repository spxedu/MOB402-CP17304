var fs = require('fs');

exports.list = (q,s,n)=>{
    s.render('sanpham/list')
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