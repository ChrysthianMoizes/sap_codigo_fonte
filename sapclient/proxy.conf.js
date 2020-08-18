const proxy =[{
context:['/api'],
target:'http://localhost:8081',
secure:false,
logLevel:'debug',
changerOrigin:true,
pathRewrite:{'^/api':'http://localhost:8081/'}
}]
module.exports=proxy;