//On page load, hides weight, height Divs

/*function hide(){

 document.getElementById("weightDiv").style.display = "none";
 document.getElementById("heightDiv").style.display = "none";

}*/

//Globally scoped object
var childObject = {};

//overall calculator function
    //includes Age, Height, Weight, Submission
function calculator(){


//grabs the childs age
 var mm = Number(document.getElementById("mm").value);
 var dd = Number(document.getElementById("dd").value);
 var yyyy = Number(document.getElementById("yyyy").value);

 // Form validation, could this be optimised? 

 if(mm == null || mm == ""){
        alert("All fields must be completed!");
        return false;
    } 
    if(dd == null || dd == ""){
        alert("All fields must be completed!");
        return false;
    }
    if(yyyy == null || yyyy == ""){
        alert("All fields must be completed!");
        return false;
    }


//correct date ranges
    if(mm < 1 || mm > 12){
        alert("Incorrect date range - Month");
        return false;
    }
    if(dd < 1 || dd > 31){
        alert("Incorrect date range - Day");
        return false;
    }
    if(yyyy < 1975 || yyyy > new Date().getFullYear()){
        alert("Incorrect date range - Year");
        return false;
    }


 var birthday = mm + "/" + dd + "/" + yyyy;


 //alert(birthday);


 //document.getElementById("demo").innerHTML = birthday;
 document.getElementById("ageDiv").style.display = "none";
 document.getElementById("weightDiv").style.display = "block";

//calculate age in days and rounds up to closest whole number, places in global obj
    var today = new Date();
    var birthDate = new Date(birthday);
    var days = (today - birthDate) / (1000 * 60 * 60 * 24);
    var age = Number(Math.ceil(days));
    

    //alert(age);

 			//setting the birthday variable to the global obj
    		childObject.age = age;



//grabs the childs weight, rounds it up and places in global obj
//start of weight calculation

 var pounds = Number(document.getElementById("pounds").value);
 var ounces = Number(document.getElementById("ounces").value);

//validation
if(pounds == null || pounds == ""){
        pounds = 0;
    } 

 if(ounces == null || ounces == ""){
        ounces = 0;
    }
if((pounds + ounces) == 0){
    alert("You must place a value in the box");
    return false;
}


//alert(pounds);
//alert(ounces);


//pounds to ounces
var poundsConverted = pounds * 16;
 //combine the ounces together and rounded to highest whole
var weightRd = poundsConverted + ounces;

 //document.getElementById("demo").innerHTML = weight;
 document.getElementById("weightDiv").style.display = "none";
 document.getElementById("heightDiv").style.display = "block";
 		//setting the weight variable to the global obj
 		childObject.weight = weightRd;

//alert(weightRd + "weight");



//start of height calculation
//grabs the childs height, rounds it up and places in global obj, then submit all data to output

 var feet = Number(document.getElementById("feet").value);
 var inches = Number(document.getElementById("inches").value);


//validation
if(feet == null || feet == ""){
        feet = 0;
    } 

 if(inches == null || inches == ""){
        inches = 0;
    }
if((feet + inches) == 0){
    alert("You must place a value in the box");
    return false;
}


 //convert feet to inches
 var feetConverted = feet * 12;
 //add feet and inches together 
 var height = feetConverted + inches;
 //alert(height + "height");

 //document.getElementById("demo").innerHTML = x;
 document.getElementById("heightDiv").style.display = "none";
 var heightRd = Math.ceil(height);

 		//setting the height variable to the global obj
 		childObject.height = heightRd;
 





//this is the start of the output portion, to be fired after height submission




    //alert(childObject.age);
    //alert(childObject.weight);
    //alert(childObject.height);


     //set the button to be hidden
 document.getElementById("submitButton").style.display = "none";

 
 document.getElementById("titleText").innerHTML = "Output";

switch(true) {

case (childObject.age <= 365 && childObject.weight < 784 && childObject.height < 57) :
                var divRF = document.createElement('article');
                divRF.innerHTML = document.getElementById('RF').innerHTML; 
                document.getElementById("targetElement").appendChild(divRF);
                document.getElementById("targetElement").className = "targetRF";

        break;

case (childObject.age >= 366 && childObject.age < 731 && childObject.weight <= 624 && childObject.height < 57) :
                var divRF = document.createElement('article');
                divRF.innerHTML = document.getElementById('RF').innerHTML; 
                document.getElementById("targetElement").appendChild(divRF);
                document.getElementById("targetElement").className = "targetRF";

        break;

case (childObject.age >= 366 && childObject.age < 731 && childObject.weight >= 625 && childObject.weight <= 784 && childObject.height < 57) :
                var divRFFF = document.createElement('article');
                divRFFF.innerHTML = document.getElementById('RFFF').innerHTML; 
                document.getElementById("targetElement").appendChild(divRFFF);  

        break;

case (childObject.age >= 731 && childObject.age <= 1095 && childObject.weight <= 319 && childObject.height < 57) :
                var divRF = document.createElement('article');
                divRF.innerHTML = document.getElementById('RF').innerHTML; 
                document.getElementById("targetElement").appendChild(divRF);
                document.getElementById("targetElement").className = "targetRF";

        break;

case (childObject.age >= 731 && childObject.age <= 1095 && childObject.weight >= 320 && childObject.weight <= 784 && childObject.height < 57) :
         var divRFFF = document.createElement('article');
                divRFFF.innerHTML = document.getElementById('RFFF').innerHTML; 
                document.getElementById("targetElement").appendChild(divRFFF);  

        break;

case (childObject.age >= 731 && childObject.age <= 1095 && childObject.weight > 799 && childObject.weight < 1265 && childObject.height < 57) :
            var divFF = document.createElement('article');
                divFF.innerHTML = document.getElementById('FF').innerHTML; 
                document.getElementById("targetElement").appendChild(divFF);
                document.getElementById("targetElement").className = "targetFF";    

    break;      

case (childObject.age > 1095 && childObject.age <= 1460 && childObject.weight >= 320 && childObject.weight < 625 && childObject.height < 57) :
         var divRFFF = document.createElement('article');
                divRFFF.innerHTML = document.getElementById('RFFF').innerHTML; 
                document.getElementById("targetElement").appendChild(divRFFF);  

        break;

case (childObject.age >= 1095 && childObject.age <= 1460 && childObject.weight > 639 && childObject.weight < 1265 && childObject.height < 57) :
            var divFF = document.createElement('article');
                divFF.innerHTML = document.getElementById('FF').innerHTML; 
                document.getElementById("targetElement").appendChild(divFF);
                document.getElementById("targetElement").className = "targetFF";    

    break;   

case (childObject.age > 1460 && childObject.age <= 1825 && childObject.weight >= 320 && childObject.weight < 625 && childObject.height < 57) :
         var divRFFF = document.createElement('article');
                divRFFF.innerHTML = document.getElementById('RFFF').innerHTML; 
                document.getElementById("targetElement").appendChild(divRFFF);  

        break;



case (childObject.age >= 1460 && childObject.age <=1825 && childObject.weight > 640 && childObject.weight < 1264 && childObject.height < 57) :
         var divFFBS = document.createElement('article');
                divFFBS.innerHTML = document.getElementById('FFBS').innerHTML; 
                document.getElementById("targetElement").appendChild(divFFBS);  

        break;

case (childObject.age >= 1460 && childObject.age <=1825 && childObject.weight > 640 && childObject.weight < 1265 && childObject.height < 57) :
         var divFFBS = document.createElement('article');
                divFFBS.innerHTML = document.getElementById('FFBS').innerHTML; 
                document.getElementById("targetElement").appendChild(divFFBS);  

        break;

case (childObject.age >= 1460 && childObject.age <=1825 && childObject.weight > 1279 && childObject.height < 57) :
         var divBS = document.createElement('article');
                divBS.innerHTML = document.getElementById('BS').innerHTML; 
                document.getElementById("targetElement").appendChild(divBS);
                document.getElementById("targetElement").className = "targetBS";
    
        break;

case (childObject.age >= 1460 && childObject.age <=1825 && childObject.weight > 1279 && childObject.height > 57) :
                var divSB = document.createElement('article');
                divSB.innerHTML = document.getElementById('seatbelt').innerHTML; 
                document.getElementById("targetElement").appendChild(divSB);
                document.getElementById("targetElement").className = "targetSB";    


                break;      

case (childObject.age >= 1825 && childObject.age <= 2190 && childObject.weight > 319 && childObject.weight < 625 && childObject.height < 57) :
            var divFF = document.createElement('article');
                divFF.innerHTML = document.getElementById('FF').innerHTML; 
                document.getElementById("targetElement").appendChild(divFF);
                document.getElementById("targetElement").className = "targetFF";    

    break; 

case (childObject.age >= 1825 && childObject.age <= 2190 && childObject.weight > 639 && childObject.weight < 1265 && childObject.height < 57) :
         var divFFBS = document.createElement('article');
                divFFBS.innerHTML = document.getElementById('FFBS').innerHTML; 
                document.getElementById("targetElement").appendChild(divFFBS);  

        break;

case (childObject.age >= 1825 && childObject.age <= 2190 && childObject.weight > 1279 && childObject.height < 57) :
         var divBS = document.createElement('article');
                divBS.innerHTML = document.getElementById('BS').innerHTML; 
                document.getElementById("targetElement").appendChild(divBS);
                document.getElementById("targetElement").className = "targetBS";
    
        break;

case (childObject.age >= 1825 && childObject.age <= 2190 && childObject.weight > 1279 && childObject.height > 57) :
                var divSB = document.createElement('article');
                divSB.innerHTML = document.getElementById('seatbelt').innerHTML; 
                document.getElementById("targetElement").appendChild(divSB);
                document.getElementById("targetElement").className = "targetSB";    


                break;   

case (childObject.age >= 2190 && childObject.age <= 2555 && childObject.weight > 319 && childObject.weight < 625 && childObject.height < 57) :
            var divFF = document.createElement('article');
                divFF.innerHTML = document.getElementById('FF').innerHTML; 
                document.getElementById("targetElement").appendChild(divFF);
                document.getElementById("targetElement").className = "targetFF";    

    break;

case (childObject.age >= 2190 && childObject.age <= 2555 && childObject.weight > 639 && childObject.weight < 1265 && childObject.height < 57) :
         var divFFBS = document.createElement('article');
                divFFBS.innerHTML = document.getElementById('FFBS').innerHTML; 
                document.getElementById("targetElement").appendChild(divFFBS);  

        break;

case (childObject.age >= 2190 && childObject.age <= 2555 && childObject.weight > 1279 && childObject.height < 57) :
         var divBS = document.createElement('article');
                divBS.innerHTML = document.getElementById('BS').innerHTML; 
                document.getElementById("targetElement").appendChild(divBS);
                document.getElementById("targetElement").className = "targetBS";
    
        break;

case (childObject.age >= 2190 && childObject.age <= 2555 && childObject.weight > 1279 && childObject.height > 57) :
                var divSB = document.createElement('article');
                divSB.innerHTML = document.getElementById('seatbelt').innerHTML; 
                document.getElementById("targetElement").appendChild(divSB);
                document.getElementById("targetElement").className = "targetSB";    


                break; 

case (childObject.age >= 2555 && childObject.age <= 2920 && childObject.weight > 319 && childObject.weight < 625 && childObject.height < 57) :
            var divFF = document.createElement('article');
                divFF.innerHTML = document.getElementById('FF').innerHTML; 
                document.getElementById("targetElement").appendChild(divFF);
                document.getElementById("targetElement").className = "targetFF";    

    break;

case (childObject.age >= 2555 && childObject.age <= 2920 && childObject.weight > 639 && childObject.weight < 1265 && childObject.height < 57) :
         var divFFBS = document.createElement('article');
                divFFBS.innerHTML = document.getElementById('FFBS').innerHTML; 
                document.getElementById("targetElement").appendChild(divFFBS);  

        break;

case (childObject.age >= 2555 && childObject.age <= 2920 && childObject.weight > 1279 && childObject.height < 57) :
         var divBS = document.createElement('article');
                divBS.innerHTML = document.getElementById('BS').innerHTML; 
                document.getElementById("targetElement").appendChild(divBS);
                document.getElementById("targetElement").className = "targetBS";
    
        break;

case (childObject.age >= 2555 && childObject.age <= 2920 && childObject.weight > 1279 && childObject.height > 57) :
                var divSB = document.createElement('article');
                divSB.innerHTML = document.getElementById('seatbelt').innerHTML; 
                document.getElementById("targetElement").appendChild(divSB);
                document.getElementById("targetElement").className = "targetSB";    


                break; 

case (childObject.age >=  2921 && childObject.weight > 639 && childObject.weight < 1265 && childObject.height < 57) :
         var divFFBS = document.createElement('article');
                divFFBS.innerHTML = document.getElementById('FFBS').innerHTML; 
                document.getElementById("targetElement").appendChild(divFFBS);  

        break;

case (childObject.age >=  2921 && childObject.weight > 1279 && childObject.height < 57) :
         var divBS = document.createElement('article');
                divBS.innerHTML = document.getElementById('BS').innerHTML; 
                document.getElementById("targetElement").appendChild(divBS);
                document.getElementById("targetElement").className = "targetBS";
    
        break;

case (childObject.age >= 2921 && childObject.weight > 1279 && childObject.height > 57) :
                var divSB = document.createElement('article');
                divSB.innerHTML = document.getElementById('seatbelt').innerHTML; 
                document.getElementById("targetElement").appendChild(divSB);
                document.getElementById("targetElement").className = "targetSB";    


                break; 


default:
alert("Please go back and check the age, weight and height entered.  If the information entered is correct you need to contact a child passenger safety technician in your area for more information on the correct car seat for your child. Go to www.chw.org/carseats for information in your area.");



}



}


function reload() {
    location.reload();
}


function RF() {

        document.getElementById("targetElement").innerHTML = "";
        var RFFF_RF = document.createElement('article');
        RFFF_RF.innerHTML = document.getElementById('RFFF_RF').innerHTML; 
        document.getElementById("targetElement").appendChild(RFFF_RF);
        document.getElementById("targetElement").className = "targetRF";     
}

function FF() {

        document.getElementById("targetElement").innerHTML = "";
        var RFFF_FF = document.createElement('article');
        RFFF_FF.innerHTML = document.getElementById('RFFF_FF').innerHTML; 
        document.getElementById("targetElement").appendChild(RFFF_FF);
        document.getElementById("targetElement").className = "targetFF";     
}

function BS() {

        document.getElementById("targetElement").innerHTML = "";
        var FFBS_BS = document.createElement('article');
        FFBS_BS.innerHTML = document.getElementById('FFBS_BS').innerHTML; 
        document.getElementById("targetElement").appendChild(FFBS_BS);
        document.getElementById("targetElement").className = "targetBS";     
}

function FF_FF() {

        document.getElementById("targetElement").innerHTML = "";
        var FFBS_FF = document.createElement('article');
        FFBS_FF.innerHTML = document.getElementById('FFBS_FF').innerHTML; 
        document.getElementById("targetElement").appendChild(FFBS_FF);
        document.getElementById("targetElement").className = "targetFF";     
}
