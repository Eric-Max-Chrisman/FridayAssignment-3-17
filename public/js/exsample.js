console.log("Hello There!");

const exsample = document.getElementById('heading');
function updateExsample(){
    exsample.textContent = "Web Dev Languages";
}

setInterval(updateExsample, 5000);