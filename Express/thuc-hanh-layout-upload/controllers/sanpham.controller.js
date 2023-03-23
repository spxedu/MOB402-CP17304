exports.list = (q,s,n)=>{
    s.render('sanpham/list')
}
exports.add = (req, res, next)=>{
    res.render('sanpham/add')
}