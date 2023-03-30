var express = require('express');
var router = express.Router();
var spCtrl = require('../controllers/sanpham.controller')

router.get('/', spCtrl.list);

router.get('/add', spCtrl.add);

var multer = require('multer');
var uploader = multer( { dest:'./tmp'}) ;

router.post('/add', uploader.single('file_anh') , spCtrl.add);


module.exports = router;