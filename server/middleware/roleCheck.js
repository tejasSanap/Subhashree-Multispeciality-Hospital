exports.adminCheck = async(req,res,next) => {
    if(req.admin.role === 'admin'){
        console.log("admin checked")
        next();
    }else{
        res.status(401).send({err : "Unauthorized request"});
    }
}

exports.doctorCheck = async(req,res,next) => {
    if(req.admin.role == 'doctor'){
        console.log("doctor checked")
        next();
    }else{
        res.status(401).send({err : "Unauthorized request"});
    }
}