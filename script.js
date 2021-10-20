



function showtime(){
    var date = new Date();
    
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var dd = date.getDate();
    var mm = date.getMonth();
    var yy = date.getFullYear();
    var day = date.getDay();

    var wish = "Have a nice day";
  


    switch(mm){
        case 0:
        mm = "January";
        break;

        case 1:
        mm = "Febuary";
        break;

        case 2:
        mm = "March";
        break;

        case 3:
        mm = "April";
        break;

        case 4:
        mm = "May";
        break;

        case 5:
        mm = "June";
        break;

        case 6:
        mm = "July";
        break;

        case 7:
        mm = "August";
        break;

        case 8:
        mm = "September";
        break;

        case 9:
        mm = "October";
        break;

        case 10:
        mm="November"
        break;

        case 11:
        mm="December";
        break;

        default:
        mm="Nothing";
    }

    switch(day){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;    
        case 4:
            day = "Thursday";
            break;            
        case 5:
            day = "Friday";
            break;
        
        case 6:
            day = "Saturday";
            break;
        
            default :
            day = "None";
    }    
    var session = "AM";
    
    if(h==0){
        h=12;
    }
    
    if(h>12){
        h=h-12;
        session="PM";
    }

  
    if(dd<10)
    
    h = (h<10)? "0"+ h : h;
    m = (m<10)? "0"+ m : m;
    s = (s<10)? "0"+ s : s;
    
    
    var time = h + ":" + m + ":" + s + " " + session;
    var date = day + ", " + dd +" " + mm + " " + yy;


    document.getElementById("display").innerText = time;
    document.getElementById("date").innerText = date;
    

    setTimeout(showtime, 1000);
    }
    
    showtime();

    function yellow(){    
        document.getElementById("box").style.background="rgb(243, 245, 158)";
        document.getElementById("box").style.color="rgb(43, 44, 4)";
        document.getElementById("display").style.color="rgb(43, 44, 4)";
        document.getElementById("date").style.color="rgb(43, 44, 4)";
        document.getElementById("selectors").style.borderColor="rgb(43, 44, 4)";
        document.getElementById("selectors").style.background=" rgb(243, 245, 158)"; 
        document.getElementById("line").style.background=" rgb(43, 44, 4)";
        document.getElementById("text").innerText='“The two most powerful warriors are patience and time.”';
    }


    function green(){    
        document.getElementById("box").style.background=" rgb(192, 250, 202)";
        document.getElementById("box").style.color="rgb(19, 44, 7)";
        document.getElementById("display").style.color="rgb(19, 44, 7)";
        document.getElementById("date").style.color="rgb(19, 44, 7)";
        document.getElementById("selectors").style.borderColor="rgb(19, 44, 7)";
        document.getElementById("selectors").style.background=" rgb(192, 250, 202)";
        document.getElementById("line").style.background="rgb(19, 44, 7)";
        document.getElementById("text").innerText='“All we have to decide is what to do with the time that is given us.”';  
    }

function red(){    
    document.getElementById("box").style.background="rgb(245, 194, 204)";
    document.getElementById("box").style.color="rgb(95, 11, 28)";
    document.getElementById("display").style.color="rgb(95, 11, 28)";
    document.getElementById("date").style.color="rgb(95, 11, 28)";
    document.getElementById("selectors").style.borderColor="rgb(95, 11, 28)";
    document.getElementById("selectors").style.background="rgb(245, 194, 204)";
    document.getElementById("line").style.background="rgb(95, 11, 28)";
    document.getElementById("text").innerText='“The bad news is time flies. The good news is you’re the pilot.”';
}

function blue(){    
    document.getElementById("box").style.background="rgb(192, 196, 250)";
    document.getElementById("box").style.color="rgb(4, 9, 80)";
    document.getElementById("display").style.color="rgb(4, 9, 80)";
    document.getElementById("date").style.color="rgb(4, 9, 80)";
    document.getElementById("selectors").style.borderColor="rgb(4, 9, 80)";
    document.getElementById("selectors").style.background="rgb(192, 196, 250)";
    document.getElementById("line").style.background="rgb(4, 9, 80)";
    document.getElementById("text").innerText='"The way we spend our time defines who we are."';
} 
document.getElementById("text").innerText='“A man who dares to waste an hour of time has not discovered the value of life.”'


function theam(){
    var element = document.getElementById("selectors");
    element.classList.toggle("switching");
}