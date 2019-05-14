 const STUDENT = require('../db/schema/studentschema');
 //  const SDEMO = require('../db/schema/SDEMOschema');
 //  const sdemo = require('../models/sdemo');
 //  const sd = require('../db/schema/sd');
 //  const SD = require('../models/sd');
 const STUDENTMARKS = require('../models/StudentMarks');
 var InstituteKeysValues = {
     '101': 'AMBEDKAR INSTITUTE OF TECHNOLOGY',
     '208': 'BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY'
 }
 var ProgrammeKeysValues = {
     '027': 'BACHELOR OF TECHNOLOGY (COMPUTER SCIENCE AND ENGINEERING)  |  B.Tech(CSE)  |  B.E(CSE)'
 }
 var BatchKeysValues = {
     '14': '2014',
     '15': '2015',
     '16': '2016',
     '17': '2017',
     '18': '2018'
 }
 var SubjectIDNameCodeKeysValues = {
     '27111': ['ETCS111', 'FUNDAMENTALS OF COMPUTING', 't'],
     '27159': ['ETCS159', 'FUNDAMENTALS OF COMPUTING LAB', 'p']
 }
 var AJAXURL = '';

 function doFETCH() {
     fetch(AJAXURL).then(success, fail);

     function success(response) {
         response.json().then(s, f);

         function s(s) {
             printdata(s);
         }

         function f(e) {
             console.log(`error in success = ${e}`);
         }
     }

     function fail(err) {
         console.log(`error= ${err}`);

     }
 }

 function printdata(data) {
     var Parsedjson = JSON.parse(data);
     var ijson = JSON.stringify(data);
     console.log(`${Parsedjson} and ${ijosn}`);
     return json;
 }
 class SemesterExternal {
     constructor(sn, credit, subjectname, subjectid, subjectcode, subjecttype,subjectkind,examinationdate, subjectexternalm, subjectwholem, subjectinternalM, subjectexternalM) {
         this.sn = sn,
             this.credit = credit;
         this.subjectname = subjectname,
             this.subjectid = subjectid,
             this.subjectcode = subjectcode,
             this.subjectexternalm = subjectexternalm,
             this.subjectinternalM = subjectinternalM;
         this.subjectexternalM = subjectexternalM;
         this.subjectkind = subjectkind;
         this.examinationdate=examinationdate;
         //  this.percentageWM = percentageWM;
         this.subjecttype = subjecttype
         this.subjectwholem = '100'
     }
 }
 class DatawithDate {
     constructor(date, internal, external, total, examtype, credit) {
         this.data = date;
         this.internal = internal;
         this.external = external;
         this.total = total;
         this.examtype = examtype;
         this.credit = credit;
     }
 }
 class SemesterBacklog {
     constructor(sn, subjectcode, subjectname, subjectid, subjectkind, datawithdate) {
         this.sn = sn;
         this.subjectcode = subjectcode;
         this.subjectname = subjectname;
         this.subjectkind = subjectkind;
         this.datawithdate = datawithdate;
     }
 }

 function CalculatePercentage(ExternlaMarksArrayofOneSem) {
     var sumWM = 0,
         i;
     for (i = 0; i < ExternlaMarksArrayofOneSem.length; i++) {
         sumWM = sumWM + parseInt(ExternlaMarksArrayofOneSem[i]);
     }
     return (sumWM / (i + 1)).toString();
 }


 class SemesterInternalt {
     constructor(sn, subjectname, subjectid, subjectcode, subjectinternalm1, subjectinternalm2, subjectinternalm3, subjectinternalm, subjectwholem) {
         this.sn = sn,
             this.subjectname = subjectname,
             this.subjectid = subjectid,
             this.subjectcode = subjectcode,

             this.subjectinternalm1 = subjectinternalm1,
             this.subjectinternalm2 = subjectinternalm2,
             this.subjectinternalm3 = subjectinternalm3,
             this.subjectinternalm = subjectinternalm,
             this.subjectwholem = '25'
     }

 }
 class SemesterInternalp {
     constructor(sn, subjectname, subjectid, subjectcode, subjectinternalm1, subjectinternalm2, subjectinternalm3, subjectinternalm, subjectwholem) {
         this.sn = sn,
             this.subjectname = subjectname,
             this.subjectid = subjectid,
             this.subjectcode = subjectcode,

             this.subjectinternalm1 = subjectinternalm1;
         this.subjectinternalm2 = subjectinternalm2;
         this.subjectinternalm3 = subjectinternalm3;
         this.subjectinternalm = subjectinternalm,

             this.subjectwholem = '40'
     }

 }
 class SemesterExternalt {
     constructor(sn, subjectname, subjectid, subjectcode, subjectexternalm, subjectwholem) {
         this.sn = sn,
             this.subjectname = subjectname,
             this.subjectid = subjectid,
             this.subjectcode = subjectcode,
             this.subjectexternalm = subjectexternalm,
             this.subjectwholem = '75'
     }

 }
 class SemesterExternalp {
     constructor(sn, subjectname, subjectid, subjectcode, subjectexternalm, subjectwholem) {
         this.sn = sn,
             this.subjectname = subjectname,
             this.subjectid = subjectid,
             this.subjectcode = subjectcode,
             this.subjectexternalm = subjectexternalm,
             this.subjectwholem = '60'
     }

 }
 class AAA {
     constructor(a1, a2, a3, a4, a5) {
         this.a1 = a1;
         this.a2 = a2;
         this.a3 = a3;
         this.a4 = a4;
         this.a5 = a5;
     }
 }
 class SEMOBJVALUESC {
     // var semn= SVGAnimatedNumberList
     constructor(semn, Arr) {
         this.semn = semn;
         this.Arr = Arr;
     }
 }
 var SemesterData = {

     // 's1':['01',[SemesterExternal,SemesterExternalt,SemesterExternalp,SemesterInternalp,SemesterInternalt]]
     // 's2':['02',[]],
     // 's3':['03',[]]
     // 'SemData1':['01',[SemesterExternal,SemesterExternalt,SemesterExternalp,SemesterInternalp,SemesterInternalt] ]
 }
 var CommonDetailStudent = {
     'batch': '',
     'enrollmentnumber': '',
     'name': '',
     'sid': '',
     'schemaid': '',
     'programmecode': '',
     'programmename': '',
     'institutecode': '',
     'institutename': '',
     'instituterollnubmer': '',
     'semester': SemesterData
 }

 // var sep1 = new SemesterExternalp('','','','','','60');
 function getRandomArbitrary(min, max) {
     return Math.random() * (max - min) + min;
 }

 function getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 function getRandomizer(bottom, top) {
     return function () {
         return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
     }
 }

 function CreateRandom(n, n1, n2, n3) {
     var l1 = [],
         l2 = [],
         l3 = [];
     for (var i = 0; i < n1; i++) {
         l1[i] = i + 1;
         //  l1[i] = Math.floor( getRandomizer(i + 1, n1)());
     }
     for (var i = 0; i < n2; i++) {
         l2[i] = i + 1;
         //  l2[i] = Math.floor(getRandomizer(i + 1, n2)());
     }
     for (var i = 0; i < n3; i++) {
         l3[i] = i + 1;
         //  l3[i] = Math.floor(getRandomizer(i + 1, n3)());
     }
     var ans = [];
    //  console.log(l1, l2, l3);
     for (var i = 0; i < l3.length; i++) {
         //  console.log(`${l1[i]} and`);
         for (var j = 0; j < l2.length; j++) {
             //  console.log(`${l1[i]} and ${l2[j]} and`);
             for (var k = 0; k < l1.length; k++) {
                 //  console.log(`${l1[i]} and ${l2[j]} and ${l3[k]}`);
                 if (l1[k] + l2[j] + l3[i] == n) {
                     //  console.log(`${l1[i]} and ans ${l2[j]} and ans ${l3[k]}`);
                     ans[0] = l1[k].toString();
                     ans[1] = l2[j].toString();
                     ans[2] = l3[i].toString();
                     break;


                 }
             }
         }
     }

     return ans;
 }

 function CreateRandomNumber(a, b) {
     //  console.log("TYPE = ", a, "INTERNAL = ", b);
     var ans = [];
     if (a == 'PRACTICAL') {
         if (parseInt(b) < 41 && b != 'A') {
             //  console.log("In P = ", parseInt(b));
             //  console.log(CreateRandom(parseInt(b),10,10,20));
             ans = CreateRandom(parseInt(b), 10, 10, 20);
             // for(var i=0;i<ans.length;i++){

             // }
         } else if (b == 'A') {
             ans = ['A', 'A', 'A'];
         }
     }
     if (a == 'THEORY') {
         if (parseInt(b) < 26 && b != 'A') {
             //  console.log("In T = ", parseInt(b));
             //  console.log(CreateRandom(parseInt(b),5,5,10));
             ans = CreateRandom(parseInt(b), 5, 5, 10);
         } else if (b == 'A') {
             ans = ['A', 'A', 'A'];
         }
     }
     return ans;
 }
 const STUDENTOPERATION = {
     FetchStudentByEnrollmentNumber(Enrollment, request, response) {
         console.log(typeof Enrollment, Enrollment);
         // console.log(STUDENT);
         STUDENT.find({
                 'enrollmentnumber': Enrollment
             },
             (err, docs) => {
                 if (err) {
                     console.log('Something Error Occured...');
                     response.send("<h3>Something Error Occured...</h3>");
                 } else if (docs.length > 0) {
                     console.log('In Studnt find one data....');
                    //  console.log('Data of Student  = ', docs);
                    //  console.log('NSTUDENT OBJ = ', JSON.parse(JSON.stringify(docs[0])));
                     //  console.log("Studen Done = ", typeof (docs), typeof (docs[0]), JSON.stringify(docs[0]), JSON.parse(JSON.stringify(docs[0])).semester);
                     //  console.log(typeof (JSON.parse(JSON.stringify(docs[0])).semester));

                     var MainObj = JSON.parse(JSON.stringify(docs[0]));
                     var SemObj = JSON.parse(JSON.stringify(docs[0])).semester
                     var SemObjKeys = Object.keys(SemObj);
                     var SemObjValues = Object.values(SemObj);
                     var TotalNumberofSemesterNumber = SemObjKeys.length;
                     var TotalNumberofSemesterNumberData = SemObjValues.length;
                     //  console.log("Semester Total Number  = ", TotalNumberofSemesterNumber);
                     //  console.log("Semester Total Number of Subject Daßta  = ", TotalNumberofSemesterNumberData);
                     var ValuesofSemObjValue = Object.values(SemObjValues);
                     var KeysofSemObjValue = Object.keys(SemObjValues);
                     var ValuesofSemObjKeys = Object.values(SemObjKeys);
                     var KeysofSemObjKeys = Object.keys(SemObjKeys);
                     //    console.log('k1 = ',KeysofSemObjKeys,'k2 = ',KeysofSemObjValue);
                     //    console.log('V1 = ',ValuesofSemObjKeys,'V2 = ',ValuesofSemObjValue);
                     //  console.log('First Loop Iteration....');
                     var i = 0,
                         i1 = 0;
                     var ArrayofSemester = [];
                     var ArrayofAllSubjects = [];
                     //  for (var key1 in SemObj) {
                     //      //    console.log(key1,SemObj[key1]);
                     //      ArrayofSemester[i1++]=SemObj[key1];
                     //      for (var key in SemObj[key1]) {
                     //          ArrayofAllSubjects[i++] =SemObj[key1][key]; 
                     //          console.log(key, SemObj[key1][key]);
                     //      }
                     //  }
                     // for (var i=0 ; i<SemObj.length;i++){
                     //     console.log(i,SemObj[i]);
                     // }
                     //  for (var key in MainObj) {
                     //      if (MainObj.hasOwnProperty(key)) {
                     //          console.log(key, MainObj[key]);
                     //      }
                     //  }
                     
                     for (let [key, value] of Object.entries(MainObj)) {
                         if (key == 'enrollmentnumber') {
                             CommonDetailStudent.enrollmentnumber = value;
                             //  CommonDetailStudent.batch = value.substring(9, 11);
                             //  CommonDetailStudent.institutecode = value.substring(3, 6);
                             //  CommonDetailStudent.programmecode = value.substring(6, 9);
                             //  CommonDetailStudent.instituterollnubmer = value.substring(0, 3);
                             // //  CommonDetailStudent.institutename = 
                             //  for (var k in InstituteKeysValues) {
                             //      if (k == CommonDetailStudent.institutecode) {
                             //          CommonDetailStudent.institutename = InstituteKeysValues[k];
                             //      }
                             //  }
                             //  for (var k in ProgrammeKeysValues) {
                             //      if (k == CommonDetailStudent.programmecode) {
                             //          CommonDetailStudent.programmename = ProgrammeKeysValues[k];
                             //      }
                             //  }
                             //  for (var k in BatchKeysValues) {
                             //      if (k == CommonDetailStudent.batch) {
                             //          CommonDetailStudent.batch = BatchKeysValues[k];
                             //      }
                             //  }
                         }
                         if (key == 'name') {
                             CommonDetailStudent.name = value;

                         }
                         if (key == 'sid') {
                             CommonDetailStudent.sid = value;

                         }
                         if (key == 'schemaid') {
                             CommonDetailStudent.schemaid = value;

                         }
                         if (key == 'batch') {
                             CommonDetailStudent.batch = value;
                         }
                         if (key == 'classrollnumber') {
                             CommonDetailStudent.instituterollnubmer = value;
                         }
                         if (key == 'institutecode') {
                             CommonDetailStudent.institutecode = value;
                         }
                         if (key == 'institutename') {
                             CommonDetailStudent.institutename = value;
                         }
                         if (key == 'programmecode') {
                             CommonDetailStudent.programmecode = value;
                         }
                         if (key == 'programmename') {
                             CommonDetailStudent.programmename = value;
                         }
                         var p=1;
                         var ArrayofSubjectBacklogs = [];
                         if (key == 'semester') {
                             // console.log('Value of MainObj Sem = ',value);
                             // var A=[SemesterExternal,SemesterExternalt,SemesterExternalp,SemesterInternalp,SemesterInternalt];
                             var semn = '00';
                             var A = [];
                             var AA = {};
                             var u1 = 0;
                             for (var k in value) {
                                 // console.log('nested k = ',k);
                                 semn = k;
                                 var u = 1;
                                 
                                 var semvalue = value[k];
                                 var ArrayofSubjectExternal = [];
                                 var FilteredArrayofSubjectExternal = [];
                                 
                                 var ArrayofSubjectExternalp = [];
                                 var ArrayofSubjectInternalp = [];
                                 var ArrayofSubjectExternalt = [];
                                 var ArrayofSubjectInternalt = [];

                                 for (var k1 in semvalue) {
                                     // console.log('nested id ',k1,u++);
                                     //  SemesterExternal.sn = u++;
                                     //  SemesterExternal.subjectid = k1;
                                     var SubjectValue = semvalue[k1];
                                     var sum = '0',
                                         cr = '0',
                                         sint = '',
                                         ext = '',
                                         sid = '',
                                         st = '',
                                         scode = k1,
                                         sname = '',
                                         sn = u,
                                         skind = '',
                                         ocr = '',
                                         examregulardate='',
                                         sin1 = '',
                                         sin2 = '',
                                         sin3 = '',
                                         sin4 = '',
                                         sin5 = '';

                                     var sin = [];
                                     var osj1 = {},
                                         osj2 = {},
                                         osj3 = {},
                                         osj4 = {};
                                     for (var k2 in SubjectValue) {
                                         if (k2 == 'subjectid') {
                                             //  console.log('CREDIT = ', SubjectValue[k2]);
                                             sid = SubjectValue[k2];
                                             // break;
                                         }
                                         if (k2 == 'subjectname') {
                                             sname = SubjectValue[k2];
                                             // break;
                                             //  console.log('INTERNAL = ', SubjectValue[k2]);
                                         }
                                         if (k2 == 'subjecttype') {
                                             st = SubjectValue[k2];
                                             // break;
                                             //  console.log('INTERNAL = ', SubjectValue[k2]);
                                         }
                                         if (k2 == 'totalcredit') {
                                             //  console.log('CREDIT = ', SubjectValue[k2]);
                                             cr = SubjectValue[k2];
                                             //  break;
                                         }
                                         if (k2 == 'subjectkind') {
                                             //  console.log('CREDIT = ', SubjectValue[k2]);
                                             skind = SubjectValue[k2];
                                             //  break;
                                         }
                                         if (k2 == 'internalm1') {
                                            sin1 = SubjectValue[k2];
                                             //  break;
                                             //  console.log('INTERNAL = ', SubjectValue[k2]);
                                         }
                                         if (k2 == 'internalm2') {
                                            sin2 = SubjectValue[k2];
                                             //  break;
                                             //  console.log('INTERNAL = ', SubjectValue[k2]);
                                         }
                                         if (k2 == 'internalm3') {
                                            sin3 = SubjectValue[k2];
                                             //  break;
                                             //  console.log('INTERNAL = ', SubjectValue[k2]);
                                         }
                                         if (k2 == 'internalm4') {
                                            sin4 = SubjectValue[k2];
                                             //  break;
                                             //  console.log('INTERNAL = ', SubjectValue[k2]);
                                         }
                                         if (k2 == 'internalm5') {
                                            sin5 = SubjectValue[k2];
                                             //  break;
                                             //  console.log('INTERNAL = ', SubjectValue[k2]);
                                         }
                                         if (k2 == 'markswithdate') {
                                             var MARKSWITHDATE=[];
                                            console.log('LENGTH OF DATES = ',Object.keys(SubjectValue[k2]).length); 
                                            var DateValues = SubjectValue[k2];
                                            console.log('DatesValues = ',DateValues);
                                            // if(Object.keys(DateValues).length==1){
                                                console.log('LENGTH OF DATES = ',Object.keys(DateValues).length); 
                                                
                                                for(var k4 in DateValues){
                                                //  console.log(k4);
                                                if(DateValues[k4]['examinationtype']=='REGULAR'){

                                                    examregulardate=k4;
                                                    // ocr = DateValues[k4]['obtainedcredit'];
                                                    // sint = DateValues[k4]['internalm'];
                                                    // ext = DateValues[k4]['external'];
                                                 for(var k3 in DateValues[k4]){
                                                    
                                                    if(k3 =='obtainedcredit'){
                                                        ocr = DateValues[k4][k3];
                                                      }
                                                      if(k3 =='internalm'){
                                                       
                                                        sint = DateValues[k4][k3];
                                                        console.log('Sint = ',sint);  
                                                    }
                                                      if(k3 =='external'){
                                                          if(DateValues[k4][k3]=='A'){
                                                              ext='0';
                                                          }
                                                          else{
                                                            ext = DateValues[k4][k3];
                                                          }
                                                        
                                                      }
                                                 }  
                                                    
                                                }
                                                else if (DateValues[k4]['examinationtype']=='REVISED' || DateValues[k4]['examinationtype']=='RECHECKING' || DateValues[k4]['examinationtype']=='REAPPEAR'){
                                                    if(DateValues[k4]['external']=='A'){
                                                        DateValues[k4]['external']='0';
                                                    } 
                                                    MARKSWITHDATE.push(new DatawithDate(k4,DateValues[k4]['internalm'],DateValues[k4]['external'],parseInt(DateValues[k4]['internalm'])+parseInt(DateValues[k4]['external']),
                                                    DateValues[k4]['examinationtype'],DateValues[k4]['obtainedcredit']));
                                                    console.log(p++,k1,SubjectValue['subjectname'],SubjectValue['subjectid'],k4,DateValues[k4]['examinationtype'],); 
                                                   
                                                    ArrayofSubjectBacklogs.push(new SemesterBacklog(p++,k1,SubjectValue['subjectname'],SubjectValue['subjectid'],SubjectValue['subjectkind'],
                                                MARKSWITHDATE)); 
                                                }
                                                    
                                                }
                                            //  } 
                                              
                                            //  ext = SubjectValue[k2];
                                             //  break;
                                             //  console.log('EXTERNAL = ', SubjectValue[k2]);
                                            
                                            }
                                        

                                         //  console.log(' i = ', i, 'e = ', e);
                                         //  if (i == 'A') {
                                         //      console.log(' i = ',i,'e = ',e);
                                         //      s = eval(parseInt('0') + parseInt(e)) + '';
                                         //      console.log('s = ',s);
                                         //  } else {
                                         //     console.log(' i = ',i,'e = ',e);
                                         //     s = eval(parseInt(i) + parseInt(e)) + '';
                                         //     console.log('s = ',s);
                                         // }
                                         //  SemesterExternal.subjectexternalm = s;

                                     }
                                     sin = CreateRandomNumber(st, sint);
                                     //  if(sin.length==0){
                                     //     sin = CreateRandomNumber(st,sint);
                                     // }
                                     if (sint != 'A') {
                                         //  console.log('Not A');
                                         sum = eval(parseInt(sint) + parseInt(ext)) + '';
                                         //  console.log('Credit subj = ', cr, 'Int subj = ', sint, 'Ext Subj = ', ext, 'S.n Subj = ', sn,'SUM = ',sum);

                                     } else {
                                         //  console.log('Exist A');
                                         sum = ext;
                                         //  console.log('Int Subj = ', sint,'SUM = ',sum);
                                     }
                                     //  console.log(sn, cr, sname, sid, scode, sum, '100');

                                     if (st == 'THEORY') {
                                         //  console.log("Array of Random  = ", sin, 't ', sint);
                                         osj1 = new SemesterExternalt(sn, sname, sid, scode, ext, '75');
                                         osj2 = new SemesterInternalt(sn, sname, sid, scode, sin[0], sin[1], sin[2], sint, '25');
                                         if (sint == 'A') {
                                             osj1 = new SemesterExternalt(sn, sname, sid, scode, ext, '100');
                                             osj2 = new SemesterInternalt(sn, sname, sid, scode, 'A', 'A', 'A', sint, 'A');

                                         }
                                     }
                                     if (st == 'PRACTICAL') {

                                         //  console.log("Array of Random  = ", sin, 'p ', sint);
                                         osj3 = new SemesterExternalp(sn, sname, sid, scode, ext, '60');
                                         osj4 = new SemesterInternalp(sn, sname, sid, scode, sin[0], sin[1], sin[2], sint, '40');
                                         if (sint == 'A') {

                                             osj3 = new SemesterExternalp(sn, sname, sid, scode, ext, '100');
                                             osj4 = new SemesterInternalp(sn, sname, sid, scode, 'A', 'A', 'A', sint, 'A');
                                         }
                                         if (parseInt(ext) > 60) {
                                             osj3 = new SemesterExternalp(sn, sname, sid, scode, ext, '100');
                                         }
                                     }
                                     if (cr.length > 0 && sname.length > 0 && sid.length > 0 && scode.length > 0 && st.length > 0 && sum.length > 0 && sint.length > 0 && ext.length > 0) {


                                     }
                                     var onesubjobj = new SemesterExternal(sn, cr, sname, sid, scode, st,skind,examregulardate, sum, '100', sint, ext);
                                     //   console.log('Subject number = ',u,' One Subject External obj = ',onesubjobj);
                                     ArrayofSubjectExternal[u] = onesubjobj;
                                     ArrayofSubjectExternalp[u] = osj3;
                                     ArrayofSubjectInternalp[u] = osj4;
                                     ArrayofSubjectExternalt[u] = osj1;
                                     ArrayofSubjectInternalt[u] = osj2;
                                     //  console.log('Semester External obj  = ', SemesterExternal);
                                     //  console.log('nested id value ', semvalue[k1]);
                                     u++;
                                 }
                            
                                 //  A[0] = ArrayofSubjectExternal;
                                 //  A[1] = ArrayofSubjectExternalt; 
                                 //  A[2] = ArrayofSubjectExternalp;
                                 //  A[3] = ArrayofSubjectInternalt;
                                 //  A[4] = ArrayofSubjectInternalp;
                                 //  console.log(" 4 obj = ",osj1,osj2,osj3,osj4);
                                 // for (var i =0;i<ArrayofSubjectExternalp.length;i++){
                                 //     if()
                                 // }
                                 console.log('In student Marks details....');
                                 for (let i in ArrayofSubjectExternal) {
                                     if (ArrayofSubjectExternal[i].subjectname.length > 0) {
                                        //  console.log(i, ArrayofSubjectExternal[i]);
                                         FilteredArrayofSubjectExternal.push(ArrayofSubjectExternal[i]);
                                     }

                                 }
                                //  console.log('After filter ....');
                                //  for (let i in FilteredArrayofSubjectExternal) {
                                //      console.log(i, FilteredArrayofSubjectExternal[i]);
                                //  }
                                 var aaa = new AAA(FilteredArrayofSubjectExternal, ArrayofSubjectExternalt, ArrayofSubjectExternalp, ArrayofSubjectInternalt, ArrayofSubjectInternalp);
                                 //  console.log('Sem number ',u1,'Data  = ',A[0]);
                                 // console.log('A = ',semn, A);
                                 //  var semobjdata = new SEMOBJVALUESC(semn, A);
                                 //  for (var k4 in semobjdata){
                                 //      console.log('Traverse  = ',semobjdata[k4]);
                                 //  }
                                 //  console.log('Sem Details = ',semn,semobjdata);
                                 //  SVALUE[u1] = semobjdata;
                                 //  u1++;
                                 // var SVALUE = [semn,A];
                                 //  console.log('aaa= ',aaa)


                                 //  ArrayofSubjectExternal.filter((i)=>{
                                 //      return i.subjectname.length>0;

                                 //  })

                                 AA[k] = aaa;

                                 // SemesterData[k] =new SEMOBJVALUESC(semn, A);
                                 // for (var k4 in SemesterData){
                                 //     console.log(k4,"uii = ",SemesterData[k4].Arr[0]);
                                 // }
                                 // console.log('Sem Data Upadted' ,SemesterData) 
                                 // u1++;
                             }

                             //  console.log('In whole Array...');
                             //  for (let [k,v] of Object.entries(AA)){
                             //      console.log(k );
                             //  }
                             //  for (let [k,v] of Object.entries(AA)){
                             //     console.log(v );
                             //  }
                             //  console.log('Sem Data = ', SemesterData);
                             // for (var k4 in  AA){
                             //     console.log(k4,"%%%%%%",AA[k4].a1);
                             // }
                             CommonDetailStudent.semester = AA;

                         }
                     }

                     //  console.log('Total subject of Semester ',Object.keys(CommonDetailStudent.semester),typeof(Object.keys(CommonDetailStudent.semester)));
                     //  console.log('First Array = ',ArrayofSemester);
                     //  console.log('Second Array = ',ArrayofAllSubjects);
                     //    console.log("Semester Keys ",SemObjKeys);
                     //    console.log("Semester Values ",SemObjValues);
                     //    console.log("Semester Keys Type ",typeof(SemObjKeys));
                     // console.log("Semester Values Type",typeof(CommonDetailStudent.semester),CommonDetailStudent.semester);

                     //    response.send("Student Data  = "+docs);
                    
                     for (var k in CommonDetailStudent.semester) {
                         //  console.log(k, 'render data = ', CommonDetailStudent.semester[k].a1);
                         for (var k33 in CommonDetailStudent.semester[k].a1) {
                             //   console.log('render data 2', CommonDetailStudent.semester[k].a1[k33]);
                         }
                         //   console.log('Sem Details whole marks = ', (CommonDetailStudent));
                     }
                     console.log('BACKLOG DATA...');
                     ArrayofSubjectBacklogs.forEach((i)=>console.log(i));
                    //  let NewBAcklogsArray= [...new Set(ArrayofSubjectBacklogs)];
                    var NewBAcklogsArray =[];

                     console.log('After Unique set.... ');
                     var o=0;
                     for(var i=0;i<ArrayofSubjectBacklogs.length;i++){
                        console.log(ArrayofSubjectBacklogs[i]['subjectcode']);
                        NewBAcklogsArray.push(ArrayofSubjectBacklogs[i]['subjectcode']);
                        //  if(ArrayofSubjectBacklogs[i]['subjectcode'] != NewBAcklogsArray[o]['subjectcode']){
                        //      NewBAcklogsArray[o++]=ArrayofSubjectBacklogs[i];
                        //  }
                     }
                     NewBAcklogsArray.forEach((i)=>console.log(i));
                     console.log('AFTER UNIQUE SET');
                     var UNIQUESET = [...new Set(NewBAcklogsArray)];
                     UNIQUESET.forEach((i)=>console.log(i));
                     var BACKLOGNEWSET =  [];
                     var count =0;
                     for(var j=0;j<UNIQUESET.length;j++){
                         for(var i=0;i<ArrayofSubjectBacklogs.length;i++){
                             if(ArrayofSubjectBacklogs[i]['subjectcode'] == UNIQUESET[j]){
                                 console.log(ArrayofSubjectBacklogs[i]['subjectcode'],UNIQUESET[j]);
                                 BACKLOGNEWSET[count++]=ArrayofSubjectBacklogs[i];
                                 break;
                             }
                         }
                     }
                     console.log('AFTER ARRAY UPDATE....',count,UNIQUESET.length);
                    //  BACKLOGNEWSET.forEach((i)=>console.log(i));
                    var count2=0; 
                    for(var i=0;i<BACKLOGNEWSET.length;i++){
                        for(var j=0;j<BACKLOGNEWSET[i]['datawithdate'].length;j++){
                            if(BACKLOGNEWSET[i]['datawithdate'][j]['total']<40){
                                console.log('Total',BACKLOGNEWSET[i]['datawithdate'][j]['total']);
                                count2++;
                            }
                        }
                    }
                    console.log('Total number of blacklogs...',count2-(ArrayofSubjectBacklogs.length - BACKLOGNEWSET.length));
                     response.render('result', {
                         DOCS: CommonDetailStudent,
                         SEMDATA: CommonDetailStudent.semester,
                         SEMBACK:BACKLOGNEWSET,
                         BACKLOGS:count2-(ArrayofSubjectBacklogs.length - BACKLOGNEWSET.length)
                         //  SEMDATA:CommonDetailStudent.semester
                     });
                     // response.sendFile(__dirname + '/Result.html');
                     // response.send();
                 }
             })
     },
     FetchStudentByName(Name, request, response) {
         STUDENT.find({
             'name': Name
         }, (err, docs) => {
             if (err) {
                 console.log('Something Error Occured...');
                 response.send("<h3>Something Error Occured...</h3>");
             } else {
                 console.log("Done", docs);
                 response.send("Student Data  = " + docs);
                 response.write(docs);
             }
         })
     },
     FetchStudent(Enrollment, Name, request, response) {
         console.log(Enrollment, Name)
         console.log(STUDENT.find().collation());
         STUDENT.findOne({
             'enrollmentNumber': Enrollment,
             'name': Name
         }, (err, docs) => {
             if (err) {
                 console.log('Something Error Occured...');
                 response.send("<h3>Something Error Occured...</h3>");
             } else {
                 console.log("Done", docs);
                 response.send("Student Data  = " + docs);
             }
         })
     },
     FetchStudentbyCollege(c, request, response) {
         STUDENT.find({
             'institutionname': c
         }, (e, d) => {
             if (e) {
                 console.log('Something Error Occured...');
                 response.send("<h3>Something Error Occured...</h3>");
             } else {
                 console.log("Done", d);
                 response.send("Student Data  = " + d);
             }
         })
     }

 };
 module.exports = STUDENTOPERATION;