

async function submitted()

{

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    console.log("email:",email,"password:",password);
    let useruser;
    useruser=email;
    console.log(email,useruser);
    const data={email,password};
    const options={
        method:'Post',
        headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
};
const da=await fetch('/apibypublic',options);
console.log("testing",da);
window.location.href = "int.html?user="+useruser;

} 

async function addcart(selectedobjects){
    //let url=win = document.dow.location.href;
    let url = document.location.href;
    console.log("url",url);
    let url_val=new URL(url);
    let email=url_val.searchParams.get('user');
    console.log("adding to cart",selectedobjects,email);

    console.log("username:",email,"products:",selectedobjects);
    
    
    console.log(email,selectedobjects);
    const data={email,selectedobjects};
    const options={
        method:'Post',
        headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
};
const da=await fetch('/apibycart',options);
const res=await da.json();
}    

