function md(req,res,next){
    console.log("I am custom middlewere")
    next()
}


module.exports = middlewerw