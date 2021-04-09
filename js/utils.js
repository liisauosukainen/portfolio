function getDate() {
    var today = new Date();
    var now = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    var infoText = "Tänään on " + now;
    alert(infoText);
    document.getElementById('date-info').innerHTML = infoText;
    console.log(infoText);
}
