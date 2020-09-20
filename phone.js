 var screen = document.getElementById("screen_display");
    var loader = document.getElementById('loading');
    var msg = document.getElementById('msg');
    msg.style.textAlign = "center";
    var ip = document.getElementById('input');
    var oN = document.getElementById('on');
    var airtime = document.getElementById('airtimeMinus');
    airtime.style.display = "none";
    var ph = document.getElementById('ph');
    ph.style.display = "none";
    var aud = new Audio();
    aud.src = "./Sleep Away.mp3";
    var tha = document.querySelectorAll("input[type=button]");
    for(let q = 0; q<tha.length; q++){
        tha[q].disabled = true;
        tha[5].disabled = false;
    }
    
var codeArray = [];
codeArray['*123#'] = [
                    '1. check your balance',
                '2. add a friend',
                '3. update your tariff',
                '4. friend and family',
                '5. borrow airtime'
                ];
codeArray['1'] = [
                '1. bundle balance',
                '2. data balance',
                '3. go balance',
                ];
codeArray['2'] = [
                '1. add a Negigbor',
                '2. add a Reverend',
                '3. add an Angel',
                ];
codeArray['*556#'] = [
                '1. Block a number',
                '2. Loan a friend',
                '3. customer care',
                '4. welcome back',
                '5. friend and family',
                '6. borrow airtime'
                ];
const rechargeCards = [
                        {pin: "*555*12345#", value: 100},
                        {pin: "*555*6789#", value: 300},
                        {pin: "*555*1234#", value: 400},
]
//conversion of objects to an array
const pins = rechargeCards.map((pin) =>{
    return pin.pin;
});
const values = rechargeCards.map((value) =>{
    return value.value;
});

let pinIndex, t;
rechargeAirtime = false;
interfere=true;
console.log(interfere);
console.log(rechargeAirtime);

var pinFunction = function(){
    
if(interfere===true){
    msg.style.top = "9rem";
    msg.style.textAlign = "center";
    for(t=0; t<pins.length; t++){
        if(screen.innerHTML==pins[t]){
            pinIndex = t;
            console.log(pinIndex);
            break;
            if(availableAirtime==""){
                availableAirtime = values[pinIndex];
                msg.innerHTML="";
                msg.innerHTML="Recharge successful!!<br> Congrats";
            }
           
        }
        else{
            setTimeout(function(){
                msg.innerHTML="";
                msg.style.top = "9rem";
                msg.innerHTML="Inavlid Recharge pin";
            }, 1000);
        }
    console.log(availableAirtime);
    }
}
}
   
function show(i){
    screen.innerHTML+=i;
}
    
var len, ll ="";
function del(){
    len = (screen.innerHTML).length;
    var ll = (len - 1);
    (screen.innerHTML) = (screen.innerHTML).substring(0, ll);
}

var disButtonTrue = function(){
    var tha = document.querySelectorAll("input[type=button]");
    for(let q = 0; q<tha.length; q++){
        tha[q].disabled = true;
        tha[5].disabled = false;
    }
}

var disButtonFalse = function(){
    var tha = document.querySelectorAll("input[type=button]");
    for(let q = 0; q<tha.length; q++){
        tha[q].disabled = false;
    }
}

var on = false;
var welcomeScreen = function(){
    msg.style.top = "9rem";
    msg.style.textAlign = "center";
    aud.load();
    msg.classList.remove('dial');
    msg.style.display = "none";
    screen.innerHTML= "";
    ip.style.display= "none";
    
    if(on===false){
    oN.value = "OFF";
    msg.style.display ="flex";
    msg.classList.add('anime');
    msg.innerHTML= "WELCOME";
    aud.load();
    aud.play();
    setTimeout(function(){
        msg.innerHTML = "Nokia";
        }, 3000);
    setTimeout(function(){
        aud.pause();
        msg.innerHTML = "Bringing Lives together";
    }, 6000);
    setTimeout(function(){
        msg.innerHTML = "";
        screen.style.background = "rgb(32, 34, 32)";
        disButtonFalse();
    }, 9000);
    
    on=true;
    
    }

    else{
    screen.innerHTML= "";
    ip.style.display= "none";
    oN.value = "ON";
    ph.style.display = "none";
    msg.style.display ="flex";
    msg.classList.add('anime');
    
    disButtonTrue();
    msg.innerHTML= "Shutting Down...";
    setTimeout(function(){
        msg.innerHTML = "BYE";
    }, 3000);
    setTimeout(function(){
        msg.innerHTML = "";
        screen.style.background = "rgb(1, 5, 1)";
    }, 4000);
    setTimeout(function(){
       location.reload(true);
    }, 4000);
    on=false;
    
    }
   
}


myAirtimeRead = false;
connected = false;
console.log(connected);
var availableAirtime = 10, aM = 0.5;
newAirtime = availableAirtime;
var callMinute = 0, callSeconds = 0, thisInterval;
var onDial = function(){
    
    if((availableAirtime==0)||availableAirtime==""){
        rechargeAirtime = true;
        myAirtimeRead = false;
        connected = false;
        if(myAirtimeRead===false){
        clearInterval(airtimeInterval);
        callMinute = callSeconds = 0;
        msg.innerHTML ="";
        screen.innerHTML = "";
        ip.style.display = "";
        msg.classList.remove('dial');
        ph.style.display = "none";
        msg.style.display = "flex";
        msg.innerHTML+= "Out of Airtime. <br> Recharge your account.";
        }
    }
    if((myAirtimeRead===true)&&(connected===true)){
    callSeconds+=1;
    var show = callMinute +" : "+ callSeconds;
    airtime.innerHTML = show;
    availableAirtime = (availableAirtime - aM);
    console.log(availableAirtime);
    }
    if(connected===true){
        msg.innerHTML= "";
        msg.style.textAlign = "center";
        msg.innerHTML+= "connected with"+" "+screen.innerHTML;
    }
    if(callSeconds==59){
     callMinute+=1;
     callSeconds = 0;
    }  
}
var airtimeInterval = setInterval(onDial, 1000);


var connectButton =  function(){
    connected = true;
    console.log(connected);
}
console.log(connected);

var possibleCodes = function(){
    console.log(screen.innerHTML);
    msg.style.textAlign = "left";

if((screen.innerHTML)=="*556#"){
    connected = false;
    msg.innerHTML+="<br/>";
    msg.innerHTML+= "Select options (MTN): </br>";
    
    for(let i=0; i<codeArray[(screen.innerHTML)].length; i++){
        msg.innerHTML+= codeArray[screen.innerHTML][i]+"</br>";
    }
        ip.style.display="block";
}
if((screen.innerHTML)=="*123#"){
    connected = false;
    console.log(screen.innerHTML);
    console.log(ip.value);
    msg.innerHTML+="<br/>";
    msg.innerHTML+= "Select options (AirtelN): </br>";
    
    for(let i=0; i<codeArray[(screen.innerHTML)].length; i++){
        msg.innerHTML+= codeArray[(screen.innerHTML)][i]+"</br>";
    }
        ip.style.display="block";
}
if(screen.innerHTML=="*121#"){
    msg.style.top = "9rem";
    msg.style.textAlign = "center";
    connected=false;
    if(availableAirtime>0){
    msg.style.fontStyle = "italic";
    ip.style.display = "none";
    msg.innerHTML+="Your account balance is: <br>"+"N"+availableAirtime+".";
    }
    else{
     msg.innerHTML+="Sorry, you have no available airtime.<br>";

    }
    
}
if((ip.value)>((codeArray[(screen.innerHTML)].length))){
    connected = false;
    msg.innerHTML="";
    msg.innerHTML+="Invalid Digit...";
}
if((ip.value)==1&&(screen.innerHTML)=="*123#"){
    connected = false;
    msg.innerHTML="";
    msg.innerHTML+="</br>";
    msg.innerHTML+= "Sub menu (Airtel): </br>";
    msg.innerHTML+="</br>";
    for(let i=0; i<codeArray[(ip.value)].length; i++){
    msg.innerHTML+= codeArray[(ip.value)][i]+"</br>";
}
    ip.style.display="block";
}
if((ip.value)==2&&(screen.innerHTML)=="*123#"){
    msg.innerHTML="";
    msg.innerHTML+="</br>";
    msg.innerHTML+= "Sub menu (Airtel): </br>";
    msg.innerHTML+="</br>";
    for(let i=0; i<codeArray[(ip.value)].length; i++){
    msg.innerHTML+= codeArray[(ip.value)][i]+"</br>";
    }
    ip.style.display="block";
    disButtonFalse();
}
}
myDial = false;
var ussdNumbers = function(){
    var ma = (screen.innerHTML).match(/#/g);
    console.log(ma);
    if((screen.innerHTML)==""&&(ip.value)==""){
        console.log((ip.value));
        return false;
    }
    if(availableAirtime==""&&myDial===true){
        msg.style.fontSize = "13.5px";
        msg.style.textAlign = "center";
        msg.classList.add('dial');
        msg.innerHTML = "";
        msg.innerHTML+= "Out of airtime, <br> Please recharge your account.<br>";
        return false;
    }
    if(((screen.innerHTML).length>4)&&(availableAirtime!="")){
        msg.style.top = "9rem";
        msg.style.textAlign = "center";
        myDial=true;
        if(availableAirtime==""){
            msg.innerHTML+= "Out of airtime, <br> Please recharge your account.<br>";
        }
        myAirtimeRead = true;
        airtime.style.display = "block";
        loader.style.display = "none";
        msg.style.display= "flex";
        msg.classList.add('dial');
        ph.classList.add('dial');
        ph.style.display = "block";
        aud.load();
        aud.play();
        msg.innerHTML = "";
        msg.innerHTML+= "Dialing ";
        msg.innerHTML+= screen.innerHTML;
    }
    if(ma=="#"){
        interfere=false;
        myAirtimeRead = false;
        msg.innerHTML="";
        airtime.style.display = "none";
        ph.style.display = "none";
        msg.style.textAlign = "left";  
        msg.classList.remove('dial');
        aud.pause();
        ip.style.color = "white";
        disButtonFalse();
        loader.style.display = "flex";
        console.log(screen.innerHTML);
        console.log(screen.innerHTML);
        setTimeout(function(){
            loader.style.display = "none";
            msg.style.top = "5.5rem";
            msg.style.display = "flex";
            possibleCodes();
            tha[5].disabled = tha[6].disabled = false;
            tha[2].disabled = tha[8].disabled = false;
            }, 1000);
    
    }
    
    
}

var sendKey = function(){
    
    interfere=false;
    msg.classList.remove('anime');
    pinFunction();
    ussdNumbers();
    onDial();
}
var cancelKey = function(){
    connected=false;
    myAirtimeRead = false
    loader.style.display= "none";
    screen.innerHTML = "";
    msg.innerHTML="";
    ip.style.display = "none";
    ph.style.display = "none";
    airtime.style.display = "none";
    clearInterval(airtimeInterval);
    aud.pause();
}