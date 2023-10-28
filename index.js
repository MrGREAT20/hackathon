const puppeteer=require("puppeteer");


const url = "http://192.168.10.233:3000/";
const users = [
{"Username" : "rdsharm123",
"Fullname" : "rdsharm123",
"Email" : "rdsharm123@gmail.com",
"Password" : "123456",
},
{
    "Username" : "rdsharm1234",
    "Fullname" : "rdsharm1234",
    "Email" : "rdsharm1234@gmail.com",
    "Password" : "123456",
},
{
    "Username" : "rdsharm12345",
    "Fullname" : "rdsharm12345",
    "Email" : "rdsharm12345@gmail.com",
    "Password" : "123456",
},
{"Username" : "rdsharm123456",
"Fullname" : "rdsharm123456",
"Email" : "rdsharm123456@gmail.com",
"Password" : "123456",
},
{
    "Username" : "rdsharm1234567",
    "Fullname" : "rdsharm1234567",
    "Email" : "rdsharm1234567@gmail.com",
    "Password" : "123456",
}];

const data =  [{ productId: 20, name: 'Saskatoon Berries - Frozen' },
{ productId: 7, name: 'Beef Consomme' },
{ productId: 2, name: 'Pears' },
{ productId: 13, name: 'Mince - Meat FIlling' },
{ productId: 14, name: 'Pate - Cognac' },
{ productId: 6, name: 'Sage Ground' },
{ productId: 10, name: 'Bacardi Breezer' },
{ productId: 4, name: 'Soup - Cambells Chicken' },
{ productId: 1, name: 'Swiss Cheese' },
{ productId: 5, name: 'Triple Sec-Mcguinness' },
{ productId: 19, name: 'Rice - 7 Grain Blend' },
{ productId: 15, name: 'Lamb Shoulder (Boneless)' },
{ productId: 3},
{productId: 8},
{productId: 9},
{productId: 11},
{productId: 12},
{productId: 16},
{productId: 17},
{productId: 18}];


console.log();
let userTask = users.map((user) => ({
    username : user.Email,
    password: user.Password,
    session1: [],
    session2: [],
    session3: [],
    session4: []
}));

userTask[0].session1.push({
    "login" : {username: userTask[0].username, password : userTask[0].password},
    "region" : {address: "India", country: "India", state: "Maharashtra", city: "Mumbai"},
    // "view" : [{"product_id" : data[0].productId}, {"product_id" : data[1].productId}, {"product_id" : data[2].productId},{"product_id" : data[3].productId}, {"product_id" : data[4].productId},{"product_id" : data[5].productId},{"product_id" : data[6].productId}, {"product_id" : data[7].productId}, {"product_id" : data[8].productId}, {"product_id" : data[9].productId}, {"product_id" : data[10].productId},{"product_id" : data[11].productId},{"product_id" : data[12].productId}],
    "addtoCart" : [{"product_id" : data[0].productId}, {"product_id" : data[1].productId}, {"product_id" : data[2].productId},{"product_id" : data[3].productId}, {"product_id" : data[4].productId},{"product_id" : data[5].productId},{"product_id" : data[6].productId}, {"product_id" : data[7].productId}, {"product_id" : data[8].productId}], //do checkout as well
    "buyout" : true,
    "logout" : true 
});
userTask[0].session2.push({
    "login" : {username: userTask[0].username, password : userTask[0].password},
    //"view" : [{"product_id" : data[0].productId}, {"product_id" : data[11].productId}, {"product_id" : data[3].productId},{"product_id" : data[4].productId}, {"product_id" : data[5].productId},{"product_id" : data[12].productId},{"product_id" : data[13].productId}],
    "addtoCart" : [{"product_id" : data[0].productId}, {"product_id" : data[11].productId}, {"product_id" : data[3].productId},{"product_id" : data[4].productId}, {"product_id" : data[5].productId},{"product_id" : data[12].productId},{"product_id" : data[13].productId}], //do checkout as well
    "buyout" : false,
    "logout" : true 
});
userTask[0].session3.push({
    "login" : {username: userTask[0].username, password : userTask[0].password},
    //"view" : [{"product_id" : data[0].productId}, {"product_id" : data[11].productId}, {"product_id" : data[3].productId},{"product_id" : data[4].productId}, {"product_id" : data[5].productId},{"product_id" : data[12].productId},{"product_id" : data[13].productId}],
    "addtoCart" : [{"product_id" : data[0].productId}, {"product_id" : data[11].productId}, {"product_id" : data[3].productId},{"product_id" : data[4].productId}, {"product_id" : data[5].productId},{"product_id" : data[12].productId},{"product_id" : data[13].productId}], //do checkout as well
    "buyout" : true,
    "logout" : true 
});
userTask[0].session4.push({
    "login" : {username: userTask[0].username, password : userTask[0].password},
    //"view" : [{"product_id" : data[0].productId}, {"product_id" : data[11].productId}, {"product_id" : data[3].productId},{"product_id" : data[4].productId}, {"product_id" : data[5].productId},{"product_id" : data[12].productId},{"product_id" : data[13].productId}],
    "addtoCart" : [{"product_id" : data[0].productId}, {"product_id" : data[11].productId}, {"product_id" : data[3].productId},{"product_id" : data[4].productId}, {"product_id" : data[5].productId},{"product_id" : data[12].productId},{"product_id" : data[13].productId}], //do checkout as well
    "buyout" : false,
    "logout" : true 
});
userTask[1].session1.push({
    "login" : {username: userTask[1].username, password : userTask[1].password},
    //"view" : [{"product_id" : data[0].productId, "name" : data[0].name}],
    "addtoCart" : [{"product_id" : data[0].productId, "name" : data[0].name}], //do checkout as well
    "buyout" : true,
    "logout" : true
})

userTask[1].session2.push({
    "login" : {username: userTask[1].username, password : userTask[1].password},
    //"view" : [{"product_id" : data[3].productId, "name" : data[3].name},{"product_id" : data[5].productId, "name" : data[5].name}],
    "addtoCart" : [{"product_id" : data[5].productId, "name" : data[5].name}], //do checkout as well
    "buyout" : false,
    "logout" : true
})

userTask[1].session3.push({
    "login" : {username: userTask[1].username, password : userTask[1].password},
    //"view" : [{"product_id" : data[3].productId, "name" : data[3].name},{"product_id" : data[5].productId, "name" : data[5].name},{"product_id" : data[8].productId, "name" : data[8].name}],
    "addtoCart" : [{"product_id" : data[8].productId, "name" : data[8].name}], //do checkout as well
    "buyout" : false,
    "logout" : true
})

userTask[1].session4.push({
    "login" : {username: userTask[1].username, password : userTask[1].password},
    //"view" : [{"product_id" : data[1].productId, "name" : data[1].name},{"product_id" : data[4].productId, "name" : data[4].name},{"product_id" : data[1].productId, "name" : data[1].name}],
    "addtoCart" : [{"product_id" : data[1].productId, "name" : data[1].name},{"product_id" : data[4].productId, "name" : data[4].name}], //do checkout as well
    "buyout" : true,
    "logout" : true
})

//5th user
userTask[4].session1.push({
    "login" : {username: userTask[4].username, password : userTask[4].password},
    //"view" : [{"product_id" : data[10].productId, "name" : data[10].name}],
    "addtoCart" : [{"product_id" : data[10].productId, "name" : data[10].name}], //do checkout as well
    "buyout" : false,
    "logout" : true
})

userTask[4].session2.push({
    "login" : {username: userTask[4].username, password : userTask[4].password},
    //"view" : [{"product_id" : data[3].productId, "name" : data[3].name},{"product_id" : data[5].productId, "name" : data[5].name},{"product_id" : data[9].productId, "name" : data[9].name}],
    "addtoCart" : [{"product_id" : data[5].productId, "name" : data[5].name}], //do checkout as well
    "buyout" : false,
    "logout" : true
})

userTask[4].session3.push({
    "login" : {username: userTask[4].username, password : userTask[4].password},
    //"view" : [{"product_id" : data[3].productId, "name" : data[3].name},{"product_id" : data[8].productId, "name" : data[8].name}],
    "addtoCart" : [{"product_id" : data[8].productId, "name" : data[8].name}], //do checkout as well
    "buyout" : true,
    "logout" : true
})

userTask[4].session4.push({
    "login" : {username: userTask[4].username, password : userTask[4].password},
    //"view" : [{"product_id" : data[1].productId, "name" : data[1].name}],
    "addtoCart" : [], //do checkout as well
    "buyout" : false,
    "logout" : true
})

userTask[2].session1.push({
    "login" : {username: userTask[2].username, password : userTask[2].password},
    //"view" : [{"product_id" : data[0].productId, "name" : data[0].name}],
    "addtoCart" : [{"product_id" : data[0].productId, "name" : data[0].name}], //do checkout as well
    "buyout" : true,
    "logout" : true
})

userTask[2].session2.push({
    "login" : {username: userTask[2].username, password : userTask[2].password},
    //"view" : [{"product_id" : data[2].productId, "name" : data[2].name},{"product_id" : data[4].productId, "name" : data[4].name}, {"product_id" : data[5].productId, "name" : data[5].name}, {"product_id" : data[6].productId, "name" : data[6].name}],
    "addtoCart" : [{"product_id" : data[4].productId, "name" : data[4].name}, {"product_id" : data[2].productId, "name" : data[2].name}],
    "buyout" : true,
    "logout" : true
})
userTask[2].session3.push({
    "login" : {username: userTask[2].username, password : userTask[2].password},
    //"view" : [{"product_id" : data[2].productId, "name" : data[2].name},{"product_id" : data[0].productId, "name" : data[0].name}],
    "addtoCart" : [{"product_id" : data[0].productId, "name" : data[0].name}],
    "buyout" : true,
    "logout" : true
})
userTask[2].session4.push({
    "login" : {username: userTask[2].username, password : userTask[2].password},
    //"view" : [{"product_id" : data[11].productId, "name" : data[11].name},{"product_id" : data[8].productId, "name" : data[8].name}, {"product_id" : data[9].productId, "name" : data[9].name}, {"product_id" : data[6].productId, "name" : data[6].name},{"product_id" : data[10].productId, "name" : data[10].name}, {"product_id" : data[0].productId, "name" : data[0].name}],
    "addtoCart" : [{"product_id" : data[6].productId, "name" : data[6].name}],
    "buyout" : true,
    "logout" : true
})
///////////////////////////

userTask[3].session1.push({
    "login" : {username: userTask[2].username, password : userTask[2].password},
    //"view" : [{"product_id" : data[2].productId, "name" : data[2].name},{"product_id" : data[0].productId, "name" : data[0].name}],
    "addtoCart" : [{"product_id" : data[2].productId, "name" : data[2].name},{"product_id" : data[0].productId, "name" : data[0].name}],
    "buyout" : true,
    "logout" : true
})

userTask[3].session2.push({
    "login" : {username: userTask[2].username, password : userTask[2].password},
    //"view" : [{"product_id" : data[0].productId, "name" : data[0].name},{"product_id" : data[2].productId, "name" : data[2].name}],
    "addtoCart" : [{"product_id" : data[2].productId, "name" : data[2].name}],
    "buyout" : true,
    "logout" : true
})
userTask[3].session3.push({
    "login" : {username: userTask[2].username, password : userTask[2].password},
    //"view" : [{"product_id" : data[9].productId, "name" : data[9].name},{"product_id" : data[0].productId, "name" : data[0].name}],
    "addtoCart" : [{"product_id" : data[9].productId, "name" : data[9].name}],
    "buyout": true,
    "logout" : true
})
userTask[3].session4.push({
    "login" : {username: userTask[2].username, password : userTask[2].password},
    //"view" : [{"product_id" : data[11].productId, "name" : data[11].name},{"product_id" : data[8].productId, "name" : data[8].name}, {"product_id" : data[9].productId, "name" : data[9].name}, {"product_id" : data[6].productId, "name" : data[6].name},{"product_id" : data[10].productId, "name" : data[10].name}, {"product_id" : data[0].productId, "name" : data[0].name}],
    "addtoCart" : [{"product_id" : data[9].productId, "name" : data[9].name}],
    "buyout" : true,
    "logout" : true
})



userTask.forEach((user) => {
    async function run(){
        let browser=await puppeteer.launch({
            defaultViewport :null,//us browser k andar jo content hai vo full screen khulega
            args:[
                   "--start-maximized"//full screen browser dikhega
                 ],
            headless:false //work hote hue hume dikhega
        });
        let pages=await browser.pages();
        const  page=pages[0];
        await page.goto(url, {timeout:60000});
        await page.waitForSelector("a[href='/login']");
        setTimeout(() => {

        }, 5000);
        await page.click("a[href='/login']");
        setTimeout(() => {

        }, 5000);


        //type email
        await page.waitForSelector("input[name='email']");
        await page.type("input[name='email']", user.username,{delay:50});
        setTimeout(() => {

        }, 5000);
        //await page.waitFor(3000);

        //type Password
        await page.waitForSelector("input[name='password']");
        await page.type("input[name='password']", user.password,{delay:50});
        setTimeout(() => {

        }, 5000);
        //await page.waitFor(3000);

        //await page.waitFor(3000);
        await page.waitForSelector("button[type='submit']");
        setTimeout(() => {

        }, 5000);
        await page.click("button[type='submit']");
        setTimeout(() => {

        }, 5000);
        

        if(user.session1.length){
            if(user.session1[0].addtoCart.length){
                user.session1[0].addtoCart.forEach(async (product) =>  {
                    try{
                        await page.waitForSelector(`a[href='/products/${product.product_id}']`);
                        setTimeout(() => {

                        }, 5000);
                        await page.click(`a[href='/products/${product.product_id}']`);
                        setTimeout(() => {

                        }, 5000);
                        await page.waitForSelector("button[id='add-to-cart']");
                        setTimeout(() => {

                        }, 5000);
                        await page.click("button[id='add-to-cart']")
                        if(user.session1[0].buyout){
                            await page.waitForSelector("a[href='/cart']");
                            setTimeout(() => {

                            }, 5000);
                            await page.click("a[href='/cart']");
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("a[href='/cart/checkout']");
                            setTimeout(() => {

                            }, 5000);
                            await page.click("a[href='/cart/checkout']");
                            await page.waitForSelector("input[name='address']");
                            await page.type("input[name='address']", user.session1[0].region.address);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='country']");
                            await page.type("input[name='country']", user.session1[0].region.country);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='state']");
                            await page.type("input[name='state']", user.session1[0].region.state);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='city']");
                            await page.type("input[name='city']", user.session1[0].region.city);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[type='submit']");
                            await page.click("button[type='submit']");
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[id='Paystack']");
                            await page.click("button[id='Paystack']")
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[id='account']");
                            await page.click("button[id='account']");
                            setTimeout(() => {

                            }, 5000);
                            
                            // if(success){
                            //     await page.waitForSelector("span[class='card__number']")
                            // }


                        }
                    }
                    catch(error){
                        console.log(error);
                    }
                });
            }
            
        }
        if(user.session2.length){
            if(user.session2[0].addtoCart.length){
                user.session2[0].addtoCart.forEach(async (product) =>  {
                    try{
                        await page.waitForSelector(`a[href='/products/${product.product_id}']`);
                        setTimeout(() => {

                        }, 5000);
                        await page.click(`a[href='/products/${product.product_id}']`);
                        setTimeout(() => {

                        }, 5000);
                        await page.waitForSelector("button[id='add-to-cart']");
                        setTimeout(() => {

                        }, 5000);
                        await page.click("button[id='add-to-cart']")
                        if(user.session2[0].buyout){
                            await page.waitForSelector("a[href='/cart']");
                            setTimeout(() => {

                            }, 5000);
                            await page.click("a[href='/cart']");
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("a[href='/cart/checkout']");
                            setTimeout(() => {

                            }, 5000);
                            await page.click("a[href='/cart/checkout']");
                            await page.waitForSelector("input[name='address']");
                            await page.type("input[name='address']", user.session2[0].region.address);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='country']");
                            await page.type("input[name='country']", user.session2[0].region.country);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='state']");
                            await page.type("input[name='state']", user.session2[0].region.state);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='city']");
                            await page.type("input[name='city']", user.session2[0].region.city);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[type='submit']");
                            await page.click("button[type='submit']");
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[id='Paystack']");
                            await page.click("button[id='Paystack']")
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[id='account']");
                            await page.click("button[id='account']");
                            setTimeout(() => {

                            }, 5000);
                            
                            // if(success){
                            //     await page.waitForSelector("span[class='card__number']")
                            // }
                            

                        }
                    }
                    catch(error){
                        console.log(error);
                    }
                });
            } 

        }
        if(user.session3.length){
            if(user.session3[0].addtoCart.length){
                user.session3[0].addtoCart.forEach(async (product) =>  {
                    try{
                        await page.waitForSelector(`a[href='/products/${product.product_id}']`);
                        setTimeout(() => {

                        }, 5000);
                        await page.click(`a[href='/products/${product.product_id}']`);
                        setTimeout(() => {

                        }, 5000);
                        await page.waitForSelector("button[id='add-to-cart']");
                        setTimeout(() => {

                        }, 5000);
                        await page.click("button[id='add-to-cart']")
                        if(user.session3[0].buyout){
                            await page.waitForSelector("a[href='/cart']");
                            setTimeout(() => {

                            }, 5000);
                            await page.click("a[href='/cart']");
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("a[href='/cart/checkout']");
                            setTimeout(() => {

                            }, 5000);
                            await page.click("a[href='/cart/checkout']");
                            await page.waitForSelector("input[name='address']");
                            await page.type("input[name='address']", user.session3[0].region.address);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='country']");
                            await page.type("input[name='country']", user.session3[0].region.country);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='state']");
                            await page.type("input[name='state']", user.session3[0].region.state);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='city']");
                            await page.type("input[name='city']", user.session3[0].region.city);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[type='submit']");
                            await page.click("button[type='submit']");
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[id='Paystack']");
                            await page.click("button[id='Paystack']")
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[id='account']");
                            await page.click("button[id='account']");
                            setTimeout(() => {

                            }, 5000);
                            
                            // if(success){
                            //     await page.waitForSelector("span[class='card__number']")
                            // }
                            

                        }
                    }
                    catch(error){
                        console.log(error);
                    }
                });
            } 

        }
        if(user.session4.length){
            if(user.session4[0].addtoCart.length){
                user.session4[0].addtoCart.forEach(async (product) =>  {
                    try{
                        await page.waitForSelector(`a[href='/products/${product.product_id}']`);
                        setTimeout(() => {

                        }, 5000);
                        await page.click(`a[href='/products/${product.product_id}']`);
                        setTimeout(() => {

                        }, 5000);
                        await page.waitForSelector("button[id='add-to-cart']");
                        setTimeout(() => {

                        }, 5000);
                        await page.click("button[id='add-to-cart']")
                        if(user.session4[0].buyout){
                            await page.waitForSelector("a[href='/cart']");
                            setTimeout(() => {

                            }, 5000);
                            await page.click("a[href='/cart']");
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("a[href='/cart/checkout']");
                            setTimeout(() => {

                            }, 5000);
                            await page.click("a[href='/cart/checkout']");
                            await page.waitForSelector("input[name='address']");
                            await page.type("input[name='address']", user.session4[0].region.address);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='country']");
                            await page.type("input[name='country']", user.session4[0].region.country);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='state']");
                            await page.type("input[name='state']", user.session4[0].region.state);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("input[name='city']");
                            await page.type("input[name='city']", user.session4[0].region.city);
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[type='submit']");
                            await page.click("button[type='submit']");
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[id='Paystack']");
                            await page.click("button[id='Paystack']");
                            setTimeout(() => {

                            }, 5000);
                            await page.waitForSelector("button[id='account']");
                            await page.click("button[id='account']");
                            setTimeout(() => {

                            }, 5000);
                            
                            // if(success){
                            //     await page.waitForSelector("span[class='card__number']")
                            // }
                            

                        }
                    }
                    catch(error){
                        console.log(error);
                    }
                });
            } 
        }
        

    }
    run();
})