const puppeteer=require("puppeteer");


const url = "https://pern-store.netlify.app/";
const users = [{
    "Username" : "rdsharm",
    "Fullname" : "rdsharm",
    "Email" : "rdsharm@gmail.com",
    "Password" : "123456",
},
{"Username" : "rdsharm1",
"Fullname" : "rdsharm1",
"Email" : "rdsharm1@gmail.com",
"Password" : "123456",
},
{
    "Username" : "rdsharm2",
    "Fullname" : "rdsharm2",
    "Email" : "rdsharm2@gmail.com",
    "Password" : "123456",
},
{
    "Username" : "rdsharm3",
    "Fullname" : "rdsharm3",
    "Email" : "rdsharm3@gmail.com",
    "Password" : "123456",
},
{"Username" : "rdsharm4",
"Fullname" : "rdsharm4",
"Email" : "rdsharm4@gmail.com",
"Password" : "123456",
},
{
    "Username" : "rdsharm5",
    "Fullname" : "rdsharm5",
    "Email" : "rdsharm5@gmail.com",
    "Password" : "123456",
}];

setInterval(function(){
    const user = users[(Math.floor(Math.random() * users.length))];
    async function run(){
        let browser=await puppeteer.launch({
            defaultViewport :null,//us browser k andar jo content hai vo full screen khulega
            args:[
                   "--start-maximized"//full screen browser dikhega
                 ],
            headless:false //work hote hue hume dikhega
        });
        let pages=await browser.pages();
        let page=pages[0];
        await page.goto(url);
        await page.waitForSelector("a[href='https://pern-store.netlify.app/login/login']");
    }
}, 5000);
