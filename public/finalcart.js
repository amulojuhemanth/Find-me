async function testing(){
let url=window.location.href;
    console.log("url",url);
    let url_val=new URL(url);
    let username=url_val.searchParams.get('user');
const data={username};
    const options={
        method:'Post',
        headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
};
const da=await fetch('/apigetrecords',options);
const res=await da.json();

console.log("data in cart page",res);

let para = document.createElement("p");
    // para.style.height="20%"
    // para.style.width="20%"
    // para.style.background="green"
    para.innerHTML="USER : "+res[0].email;
    document.getElementById("headd").appendChild(para);

//let element = document.getElementById("div1");
// for (let i=0;i<length.res;i++){
    for(let i in res){
    let para = document.createElement("p");
    
    if(res[i].selectedobjects == undefined){
        continue;
    }
    para.innerHTML=res[i].selectedobjects;
    //para.style.width="30%"
    para.style.color="red"
    console.log("pppp");
// const node = document.createTextNode(res[i].email);
// para.appendChild(node);
// element.appendChild(para);
document.getElementById("div1").appendChild(para);
}
    
}
testing()
