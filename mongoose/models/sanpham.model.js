var db = require ('./db');
// định nghĩa cấu trúc của model sản phẩm
const spSchema = new db.mongoose.Schema(
    {
        name: { type:String,  required: true },
        price: { type: Number, required: true},
        description: { type: String, required: false }
    },
    {
        collection: 'san_pham'
    }
);
let spModel = db.mongoose.model( 'spModel', spSchema );
// làm tương tự với thể loại

module.exports = { spModel }
