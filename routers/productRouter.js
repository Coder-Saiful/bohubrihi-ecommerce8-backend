const router = require('express').Router();
const { createProduct, getProducts, productDetails, getProductPhoto, updateProduct, deleteProduct, filterProducts } = require('../controllers/productController');
const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');

router.route('/')
    .post([authorize, admin], createProduct)
    .get(getProducts);

router.route('/:id')
    .put([authorize, admin], updateProduct)
    .delete([authorize, admin], deleteProduct)
    .get(productDetails);

router.route('/photo/:id')
    .get(getProductPhoto);

router.route('/filter')
    .post(filterProducts);

module.exports = router;