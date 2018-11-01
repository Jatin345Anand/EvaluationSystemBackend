 const STUDENT = require('../db/schema/studentschema');
 const STUDENTOPERATION = {
    FetchStudentByEnrollmentNumber(Enrollment,request,response){
        console.log(Enrollment);
       STUDENT.findOne({'EnrollmentNumber':'Enrollment'},(err,docs)=>{
           if(err){
               console.log('Something Error Occured...');
               response.send("<h3>Something Error Occured...</h3>");
           }
           else{
               console.log("Done",docs);
               response.send("Student Data  = "+docs);
           }
       })
    },
    FetchStudentByName(Name,request,response){
        STUDENT.find({'Name':Name},(err,docs)=>{
            if(err){
                console.log('Something Error Occured...');
                response.send("<h3>Something Error Occured...</h3>");
            }
            else{
                console.log("Done",docs[0]);
                response.send("Student Data  = ",docs[0]);
            }
        })
    },
    FetchStudent(Enrollment,Name,request,response){
        console.log(Enrollment,Name)
        console.log(STUDENT.find().collation());
        STUDENT.findOne({'EnrollmentNumber':Enrollment,'Name':Name},(err,docs)=>{
            if(err){
                console.log('Something Error Occured...');
                response.send("<h3>Something Error Occured...</h3>");
            }
            else{
                console.log("Done",docs);
                response.send("Student Data  = "+docs);
            }
        })
    }

 };
 module.exports = STUDENTOPERATION;