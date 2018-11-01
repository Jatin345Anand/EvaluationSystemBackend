const express = require('express');
const Router = express.Router();
const STUDENTOPEARATIONS = require('../db/StudentOperation');
Router.post('/dosearch',(request,response)=>{
    console.log('Do search...');
    
    var enrollment = request.body.enrollmentnumber;
    var name = request.body.name;
    console.log(enrollment,name);
    STUDENTOPEARATIONS.FetchStudentByEnrollmentNumber(enrollment,request,response);
    // STUDENTOPEARATIONS.FetchStudent(enrollment,name,request,response);
})
module.exports = Router;