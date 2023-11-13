



function validate(){

   let uname=document.getElementById("uname");
   let email=document.getElementById("email");

   let area=document.getElementById("area")

   if(email.value=="")
   {
    alert("Plese add email address");
   }

   if(uname.value=="")
   {
    alert("Plese type your name")
   }
   


   if(area.value=="")
   {
    alert("plese give suggections");
   }

    if(email.value!="" || uname.value!=""||  area.value!="" )
    {
        alert("Your Form Submitted Successfully..Thank You");
    }




}


