const express = require('express');
const Router = express.Router();
const STUDENTOPEARATIONS = require('../db/StudentOperation');
Router.post('/dosearch',(request,response)=>{
    console.log('Do search...');
    var enrollment = '';
    var name = ''; 
    var college = ''; 
    console.log(request.body);
    var enrollment = request.body.enrollment;
    // var name = request.body.name;
    // var college = request.body.college;
    console.log('Enrollment Number = ',enrollment);
    console.log(enrollment.length);
    if(enrollment.length > 0 ){
        if(enrollment.length ==11){
            STUDENTOPEARATIONS.FetchStudentByEnrollmentNumber(enrollment,request,response);
        }
        else{
            response.send("Please re insert the enrollment number...");
            
        }
      
    }
    // else if( name.length>0 ){
    //     if(name.length >0){
    //         STUDENTOPEARATIONS.FetchStudentByName(name,request,response);
    //     }
    //     else{
    //         response.send("Please re insert the name...");
    //     }
      
    // }
    // else if( college.length>0){
    //         if(college.length >0){
    //             STUDENTOPEARATIONS.FetchStudentbyCollege(college,request,response);
    //         }
    //         else{
    //             response.send("Please re insert the college...");
    //         }
          
        
      
    // }
    else{
        response.send('Please fill correct information...');
    }
    
    // STUDENTOPEARATIONS.FetchStudentbyCollege(college,request,response);
    // STUDENTOPEARATIONS.FetchStudentByName(name,request,response);
    // STUDENTOPEARATIONS.Addsdemo(enrollment,name);
    // STUDENTOPEARATIONS.FetchStudentByEnrollmentNumber(enrollment,request,response);
    // STUDENTOPEARATIONS.FetchStudent(enrollment,name,request,response);
})
module.exports = Router;