const router = require('express').Router();
const controller = require('../controllers/productController');


//gets
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

//post
router.post('/', controller.create);

//put
router.put('/:id', controller.update);

//patch
router.patch('/:id', controller.patch);

//delete
router.delete('/:id', controller.remove);



module.exports = router;
