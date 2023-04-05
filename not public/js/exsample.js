const exsample = document.getElementById('heading');
const tempBool = false;

function updateExsample(){
    if (tempBool === true){
        exsample.textContent = "Web Dev Languages";
    }
    else {
        exsample.textContent = "Web Languages";
    }
    tempBool = !tempBool;
}

setInterval(updateExsample, 5000);