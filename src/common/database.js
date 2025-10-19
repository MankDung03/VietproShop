const mongoose = require('mongoose');

module.exports = () => {
    // Dùng MONGODB_URI từ .env, nếu không có thì dùng local
    const dbUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vp_shop_project';
    
    mongoose.connect(dbUri)
        .then(() => console.log('Connected to MongoDB!'))
        .catch(err => {
            console.error('MongoDB connection error:', err);
            process.exit(1); // Thoát nếu không kết nối được
        });
    
    return mongoose;
};