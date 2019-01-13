const express=require('express');
const hbs=require('hbs');
const fs=require('fs');

var app=express();

hbs.registerHelper('getCurrentDate',()=>{
  new Date().getFullYear()
});

app.use((req,res,next)=>{
  var now=new Date().toString();
  var a=`${now}:${req.method} ${req.url}`
  console.log(now);
  fs.appendFileSync('server.log',a);
  next()
});

app.use((req,res,next)=>{
  res.render('error.hbs',{
    errorT:'error message',
    errorB:'access later'
  });
});

hbs.registerPartials(__dirname+'/views/partials');
//app.set('view engine','hbs');
app.get('/',(req,res)=>{
  res.render('about.hbs',{
    titleStart:'Eng-A educational Course',
    title:'BE end'

  });
});

app.get('/start',(req,res)=>{
  res.render('home.hbs',{
    titleStart:'Eng-A educational Course',
    title1:'BE start'

  });
});
app.listen(3000);
