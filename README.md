# Student-Project-angular





=================  TYPE SCRIPT ============================


1. INSTALL  TS  BY THESE CODE IN YOUR EDITIOR (VS.CODE)
    
    npm install typescript@latest -g

2.👇️ generate tsconfig.json file

tsc --init

3.👇️ get typescript version  .  check the version by means it installed or not

tsc --version


if then also you got an error  like error    TS6053

then open powershell   and write . 👇️

 Set-ExecutionPolicy Unrestricted   

and press  A   for all


==================================== ANGULAR IN VS CODE ==============================

STEP-1

OPEN TERMINAL IN VS CODE AND INSTALL ANGULAR CLI 

npm install -g @angular/cli@latest



 STEP-2 

CREAT ANGULAR PROJECT NAME 

ng new firstapp


STEP-3

ANS THE QUESTION   AS   -----  Y


-------------PROJECT WILL CREATED PATH WILL SHOW AT START OF THE TERMINAL 

STEP-4

COMPILATION OF PROJECT >>

ONCE THE PROJECT IS CREATED FIND THE PATH IN THAT FOLDER AND COPY IT OPEN THAT FOLDER IN VS CODE 
OPEN TERMINAL AND TYPE IN 

cd  <----paste path of project --->

NEXT TYPE THE CODE 👇

ng serve 



STEP-5 

RUN ON Browser>>

AFTER COMPILATION THERE WILL BE A CODE RUN IT ON Browser..

EX.   ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

STEP-6

NOW OPEN APP FOLDER FROM LEFT EXPLORER OF VS AND IN APP THERE IS app.component.ts  
OPEN IT AND EDIT ACCO TO YOU IT WILL COMPILE AUTOMATICALLY AND SHOWN IN WEB BROWSER,
ONCE YOU REFRESH .. 



STEP-7 

IF YOU WANT TO ADD BOOTSTRAP THEN USE 👇 BELOW CODE 

ng add @ng-bootstrap/ng-bootstrap

STEP-7 

IF YOU WANT TO ADD NEW FOLDER IN ANGULAR SO TYPE CODE 

ng g c  foldername 


STEP-8 

REFER THIS LINK FOR GET POST  METHOD

https://www.angularjswiki.com/httpclient/post/#:~:text=post()%20method%20is%20an,the%20data%20from%20the%20server.

==========================================  JSON INSTALLATION ===============================================

STEP-1

IF WE HAVE TO INSTALL JSON USE BELOW CODE 👇

npm install -g json-server

STEP-2

MAKE A db.jason FILE THEN PASTE THIS CODE 

{
"post":[  {"id" :1, "title" : "json-server","author": "typicode"}  
],
"comments":[  {"id":1 , "body" : "some comment", "postId":1}
],
"profile": {"name": "typicode"}

}

STEP-3

TO START JSON SERVER 👇

json-server --watch db.json

AFTER RUNNING THIS U MAY GET LOCALHOST:300 COPY AND RUN ON SERVER THAT LINK  "DONE !! '

