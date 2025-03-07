


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

function telegrame(){
sendMessageToTelegram(`Download`)
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
box-shadow:1px 1px 1px 1px gray;
border:none;
margin-left:2%;
margin-block:2%;
background-repeat:no-repeat;
background-position:center;
background-size:cover;
background-attachment:scroll;
opacity:90%;
`
items.style.backgroundImage=`url('Data/img (${i}).jpg')`
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
open = document.createElement("img")
info = document.createElement("img")
report = document.createElement("img")
download = document.createElement("button")
share.href=`https://wa.me/?text=Welcome to our website!+https://protocol-xxx.github.io/wallpapers/ + 🌟 We're thrilled to have you here in our vibrant world of stunning and free wallpapers. Explore an incredible collection designed to transform your screens into works of art—all at no cost!

Whether you're drawn to breathtaking landscapes, captivating artistic designs, or sleek modern styles, our selection has something for everyone. Let your screens reflect your personality with our unique and diverse backgrounds.

Enjoy browsing, downloading, and making your screens more beautiful than ever. Thank you for visiting! 😊✨`
if(i===1 ||i===5 || i===11 || i===17 || i===21 || i===26 ||i%3===1){
open.src="img/10038808.png"
open.style.width=="30px"
link = document.createElement("a")
link.removeAttribute("href")
link.removeAttribute("download")
}else{
link = document.createElement("a")
open.src="img/2206524.png"
link.href=`Data/img (${i}).jpg`
link.setAttribute('download','wallpeaper by protocol X')
}
info.src="img/2206563.png"
report.src="img/2206559.png"
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
download.setAttribute('onclick',`telegrame()`)
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

share.append(grade)
items.append(share)
items.append(open)
items.append(info)
items.append(report)
link.append(download)
items.append(link)
myDiv.append(items)


}
