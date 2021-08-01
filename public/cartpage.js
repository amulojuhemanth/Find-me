
async function checkout()

{
    let url=window.location.href;
    console.log("url",url);
    let url_val=new URL(url);
    let val=url_val.searchParams.get('user');
    const data={username:val};
    const options={
        method:'Post',
        headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
};
console.log("tetsing in client");
const da=await fetch('/apigetrecords',options);
const gotdata=await da.json();
console.log("getting data",gotdata);
}


