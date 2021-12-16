window.addEventListener("load",init);
function init(){
    bindevents();
}
function bindevents(){
    document.getElementById('search').addEventListener('click',search);
}
function search(){
    let value = document.getElementById('searchvalue').value;
    let URL = `https://www.amazon.in/s?k=${value}&ref=nb_sb_noss_2`
    window.location.href = URL;
}