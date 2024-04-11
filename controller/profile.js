const User  =require('../models/user');
module.exports.home = function(req,res)
{

   return  res.render('home',{
    title : 'ABHISHEK'
   })
}

module.exports.signin = function(req,res)
{
  return res.render('sign-in-page',{
  'title' : 'Sign-in-Page'
  });
}

module.exports.signup = function(req,res)
{
   return res.render('sign-up-page',{
     'title' : 'Sign-up-Page'
      });
}

module.exports.create = function(req,res)
{
  if(req.body.password != req.body.confirm_password) return res.redirect('back');
  var a = User.findOne({email:req.body.email});
  if(!a) User.create(req.body);
  else {console.log('user found'); return res.redirect('sign-in');} 
}
module.exports.create_session = function(req,res)
{
 
}