
function time() {
    let date = new Date();
    document.getElementById("clock").innerText = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();

}
window.setInterval(time, 1000);
function myFunction() {
    alert('Hello');
}