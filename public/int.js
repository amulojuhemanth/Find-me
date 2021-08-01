async function getrecords(){
 //const da={'email':email,'password': password}   
const daa=await fetch('/apigetrecords');

   const datarecords=await daa.json();
    console.log(datarecords);
    alert(datarecords);
}

function clickedfunction1(){
    console.log("clicked-virtualmachines-viewall");
    let url=window.location.href;
    console.log("url",url);
    let url_val=new URL(url);
    let val=url_val.searchParams.get('user');
    window.location.href = "pehla.html?user="+val;
    
}


function clickedfunction2(){
    let url=window.location.href;
    console.log("url",url);
    console.log("clicked-databases-viewall");
    let url_val=new URL(url);
    let val=url_val.searchParams.get('user');
    window.location.href = "databasepage.html?user="+val;
}

function clickedfunction3(){
    let url=window.location.href;
    console.log("url",url);
    console.log("clicked-storages-viewall");
    let url_val=new URL(url);
    let val=url_val.searchParams.get('user');
    window.location.href = "storagepage.html?user="+val;
    
}

function clickedfunction4(){
    let url=window.location.href;
    console.log("url",url);
    console.log("clicked-virtualnetworks-viewall");
    let url_val=new URL(url);
    let val=url_val.searchParams.get('user');
    window.location.href = "networkpage.html?user="+val;
}

function clickedfunction5(){
    let url=window.location.href;
    console.log("url",url);
    console.log("clicked-security-viewall");
    let url_val=new URL(url);
    let val=url_val.searchParams.get('user');
    window.location.href = "securitypage.html?user="+val;
}

function checkoutpage(){
    let url=window.location.href;
    console.log("url",url);
    console.log("clicked-security-viewall");
    let url_val=new URL(url);
    let val=url_val.searchParams.get('user');
    window.location.href = "finalcart.html?user="+val;
}


