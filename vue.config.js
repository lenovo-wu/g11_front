
module.exports={
    publicPath: process.env.NODE_ENV=='production'?'./':'/'
}
 
/*
* baseUrl:打包时，资源文件都是通过baseUrl来查找
* process.env：环境变量的NODE_ENV
* production：开发模式时，获取当前路径下，如果是测试模式或开发模式，仍然通过 / 来获取
* */