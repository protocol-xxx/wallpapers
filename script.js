


//send info to bot twlegramme
function sendMessageToTelegram(message) {

const botToken = '7699437939:AAGkbQyMOpkYC54gt5gPoT9PHMlQ34J2irs';
const chatId = '6857288010';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const data = {
        chat_id: chatId,
        text: message,
      
    };

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.ok) {
            console.log("✅ تم إرسال الرسالة بنجاح!");
        } else {
            console.error("❌ فشل في إرسال الرسالة:", result);
        }
    })
    .catch(error => console.error("❌ خطأ في الطلب:", error));
}

function telegrame(x){
sendMessageToTelegram(`Download img by id ${x}`)
myHr.style.backgroundColor="#1197D6"
loading()
}
function vip(){
sendMessageToTelegram(`VIP`)
}

for(i=0;i<=145;i++){
myDiv = document.querySelector("#myDiv")
items = document.createElement("div")

items.style=`
width:95%;
height:450px;
background-color:;
box-shadow:1px 1px 1px 1px black;
border:none;
margin-left:2%;
margin-block:2%;
background-repeat:no-repeat;
background-position:center;
background-size:cover;
background-attachment:scroll;
opacity:90%;
`
items.setAttribute("id",`items${i}`)
items.style.backgroundImage=`url('Data_base/img (${i}).PNG')`
grade = document.createElement("img")
grade.src="img/7121737.png"
grade.style=`
width:8%;
height:5%;
background-color:;
border:none;
margin-block:2%;
margin-left:3%;
margin-botton:90%;
position:absolute;
`
share = document.createElement("a")
reference = document.createElement("div")
open = document.createElement("img")
info = document.createElement("img")
report = document.createElement("img")
download = document.createElement("button")
share.href=`https://wa.me/?text=Welcome to our website! 🌟 + https://protocol-xxx.github.io/wallpapers/ + We're thrilled to have you here in our vibrant world of stunning and free wallpapers. Explore an incredible collection designed to transform your screens into works of art—all at no cost!
Whether you're drawn to breathtaking landscapes, captivating artistic designs, or sleek modern styles, our selection has something for everyone. Let your screens reflect your personality with our unique and diverse backgrounds.
Enjoy browsing, downloading, and making your screens more beautiful than ever. Thank you for visiting! 😊✨`
info.src="img/2206563.png"
info.setAttribute("id",`info${i}`)
report.src="img/2206559.png"
report.setAttribute("id",`report${i}`)
download.append(document.createTextNode("Download"))
download.style=`
width:25%;
height:29px;
background-color:;
border:none;
margin-block:112.5%;
margin-left:2%;
position:absolute;
box-shadow:1px 1px 1px black;
border-radius:2px;
opacity:80%;
`
download.setAttribute('onclick',`telegrame(${i})`)
info.style=report.style=open.style=`
width:10%;
height:7%;
background-color:;
border:none;
margin-block:118.5%;
margin-left:2.5%;
margin-botton:0%;
position:relative;
`
reference.style.color="white"
reference.style.fontSize="8px"
reference.style.textAlign="left"
reference.style.marginLeft="2%"
reference.style.width="90%"
reference.style.position="absolute"
reference.style.zIndex="0"
reference.style.backgroundColor=""
reference.style.opacity="70%"
reference.style.opacity="100%"
reference.style.fontFamily="Courier new,monospace"
reference.style.marginTop="88%"
reference.setAttribute("id",`reference${i}`)

 if(i==1 ||i==5 || i==11 || i==17 || i==21 || i==26 ||i%3==1){
 open.src="img/10038808.png"
 open.style.width=="30px"
 link = document.createElement("a")
 link.href=`Data_base/img (${i}).PNG`
 link.setAttribute('download','wallpeaper by protocol x VIP')
 link.addEventListener('click',stope)
 download.setAttribute("onclick",`information(${i})`)
 }else{
 link = document.createElement("a")
 open.src="img/2206524.png"
 link.href=`Data_base/img (${i}).PNG`
 link.setAttribute('download','wallpeaper by protocol X')
 }
function stope(event){
event.preventDefault()
}
 function run(){
 link.removeEventListener('click',stope)
 }
share.append(grade)
items.append(share)
items.append(reference)
items.append(open)
items.append(info)
items.append(report)
link.append(download)
items.append(link)
myDiv.append(items)
n=0
function declare(x){
n+=1
if(n<=3){
document.getElementById(`report${x}`).src="img/2206562.png"
document.getElementById(`items${x}`).style=`
width:95%;
height:450px;
background-color:;
box-shadow:1px 1px 1px 1px black;
border:none;
margin-left:2%;
margin-block:2%;
background-repeat:no-repeat;
background-position:center;
background-size:70%;
background-attachment:scroll;
opacity:90%;
background-image:url('icon/images.gif');
`
setTimeout(function(x){alert("we will revise your repport thinks")},2500)
sendMessageToTelegram(`repport image by id : ${x}`)
}
else{
setTimeout(function(){alert(" opps ! a lot of report , thinks ")},2500)
}
}
a=0
function clicker(){
a+=1
return a;}
function information(x){
clicker()
if(a%2!==0){
if(x==1||x==5 || x==11 || x==17 || x==21 || x==26 ||x%3==1){
payment(x)
document.getElementById(`reference${x}`).style.width="60%"
          document.getElementById(`reference${x}`).style.height="200px"
          document.getElementById(`reference${x}`).style.position="absolute"
          document.getElementById(`reference${x}`).style.backgroundColor=""     
          document.getElementById(`reference${x}`).style.zIndex="20"
          document.getElementById(`reference${x}`).style.marginTop="55%"
}
else{
document.getElementById(`reference${x}`).innerHTML=`<div><b> The PNG (image id : img (${x}).PNG) format uses lossless compression , ensuring high-quality images without data loss.  Dimensions (Width/Height): Fully scalable to fit any resolution requirements.  File Size: Generally larger than formats like JPEG due to its high quality.  Transparency: Supports transparent backgrounds, making it ideal for overlays and logos.  Background: Can be transparent, solid color, or custom-designed as needed.  Usage: Commonly used for web design, app icons, logos, and high-resolution graphics.  Color Depth: Supports up to 16 million colors (24-bit) for vibrant, detailed visuals......</b></div>`
}
}
else{

document.getElementById(`reference${x}`).innerHTML=``
}
}

function payment(x) {
    // حدد العنصر الذي سيتم إضافة المحتوى إليه
    const referenceElement = document.getElementById(`reference${x}`);
    
    // تحقق مما إذا كان العنصر موجودًا
    if (!referenceElement) {
        console.error(`❌ العنصر reference${x} غير موجود!`);
        return; // الخروج من الدالة
    }

    // إنشاء عنصر الدفع وإضافته
    const pay = document.createElement("div");
    pay.style.backgroundColor = "white";
    pay.style.width = "100%";
    pay.style.height = "100%";
    pay.style.position = "absolute";
    pay.style.zIndex = "9";
    pay.style.opacity="80%"
    pay.setAttribute("id", `paypal-container-${x}`);
    btn= document.createElement("button")
    btn.textContent="shop widget"
    btn.style=`
    margin-block:3%;
    width:70%;margin-left:15%;
    opacity:99%;height:15%;
    font-family:Courier new,monospace;
    z-index:20;
    `
    txt= document.createElement("div")
    txt.style.color="black"
    txt.textContent="Transform your phone into a masterpiece with our stunning wallpapers! For a limited time only, enjoy an exclusive _60% discount_ on our premium collection. Whether you're a fan of breathtaking landscapes, abstract art, or sleek modern designs, our wallpapers are crafted to match your style and elevate your screen's appearance. Don't miss this chance to save big and give your phone the upgrade it deserves. Click now and bring your screen to life with vibrant beauty. Offer valid for a short time—grab it before it's gone!"
    txt.style.width="80%"
    txt.style.marginLeft="10%"
    txt.style.textAlign="center"
    paypal = document.createElement("a")
    paypal.href="payment.html"
    paypal.append(btn)
    pay.append(paypal)
    pay.append(txt)
    referenceElement.appendChild(pay);
    console.log(`✅ تم إضافة عناصر الدفع إلى reference${x} بنجاح!`);
}

document.getElementById(`report${i}`).setAttribute('onclick',`declare(${i})`)
document.getElementById(`info${i}`).setAttribute('onclick',`information(${i})`)

}
myHr = document.querySelector("#myHr")
function loading(){
myHr.style.width="10%"
myHr.style.width="20%"
myHr.style.width="30%"
myHr.style.width="50%"
myHr.style.width="70%"
myHr.style.width="80%"
myHr.style.width="60%"
myHr.style.width="90%"
myHr.style.width="100%"
myHr.style.backgroundColor="transparent"
}
divAlert = document.createElement("div")
divAlert.style=`
width:95%;
height:20px;
background-color:gray;
box-shadow:1px 1px 1px 1px black;
border:none;
margin-left:2%;
margin-block:2%;
background-repeat:no-repeat;
background-position:center;
background-size:cover;
background-attachment:scroll;
opacity:50%;
position:static;
z-index:100;
text-align:center;
font-family:Courier new,monospace;
`
divAlert.textContent='copyright ©2025'
myDiv.append(divAlert)

setTimeout(loading,3000)

