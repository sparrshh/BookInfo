const express = require('express');
const router = express.Router();

const {getAllBooks} =  require('../controllers/bookcontroller');
const {createBook} =  require('../controllers/bookcontroller');
const {updateBook} =  require('../controllers/bookcontroller');
const {deleteBook} =  require('../controllers/bookcontroller');


router.route('/book').get(getAllBooks).post(createBook)
router.route('/book/:id').put(updateBook).delete(deleteBook)
module.exports = router;
