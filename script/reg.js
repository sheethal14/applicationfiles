function validate(){
    var username=document.getElementById("username").value;
    var name=document.getElementById("name").value;
    var branch=document.getElementById("branch").value;
    var addNo=document.getElementById("addNo").value;
    var usn=document.getElementById("usn").value
    var email=document.getElementById("email").value;
    var dob=document.getElementById("dob").value;
    var conNo=document.getElementById("conNo").value;
    var gender=document.getElementsByName("gender").value;
    var password=document.getElementById("password").value;
    var confpass=document.getElementById("confpass").value;

    if(username=="" || name=="" || branch=="" || addNo=="" || usn=="" || email=="" || dob=="" || conNo=="" || gender=="" || password=="" || confpass==""){
        document.getElementById("print").innerHTML="Field cannot be empty "
    } 
    else{
        if(email.length<6 || email.length>30){
            document.getElementById("print").innerHTML="Email id cannot be <6 character and not >30 character"
        }else if(password.length<5){
            document.getElementById("print").innerHTML="Password cannot be <5 character"
        }else if(cnfpass!=password){
            document.getElementById("print").innerHTML="Password not confirmed"
        }
    }   
}