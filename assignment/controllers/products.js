const express     = require('express');
const userModel   = require.main.require('./models/dbproducts');
const router    = express.Router();

router.get('/', (req, res)=>{
  res.render('products/products');
});

router.post('/', (req, res)=>{

  userModel.validate(user, function(status){
    if(status){
      res.cookie('uname', req.body.username);
      res.redirect('/products');
    }else{

      res.redirect('/products');
      /*res.send('Invalid');*/
            
    }
  });
}); 

module.exports = router;