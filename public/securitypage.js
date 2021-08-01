function clickedfunction(){
    let url=window.location.href;
    console.log("url",url);
    let url_val=new URL(url);
    let val=url_val.searchParams.get('user');
    window.location.href = "securitypage.html?user="+val;
}