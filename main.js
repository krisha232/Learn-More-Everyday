
txt=0

function download(){
        var txt = document.getElementById("addTxt").value;
        document.getElementById("addTxt").value = txt;
        document.forms["addTxt"].download();
    }