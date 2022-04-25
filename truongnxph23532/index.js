var array = document.getElementsByTagName('input');
var issues = document.getElementsByTagName('span');
var loaihang = document.getElementById('type');
var ship=document.getElementsByName('ship');
function check() {
    var check = true;

    for (let i = 0; i < issues.length; i++) {
        issues[i].innerText = "";
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].value == "") {
            check = false;
            issues[i].innerText = "Please fill this field";
            issues[i].style.color="red";
        }
    }

    if(!ship[0].checked && !ship[1].checked){
        check=false;
        issues[5].innerText = "Please choose one";
        issues[5].style.color="red";
    }

    if(array[3].value==""){
        check=false;
        issues[4].innerText="Please fill this field";
        issues[4].style.color="red";
    }

    return check;
}
function change() {
    switch (loaihang.value) {
        case "Loai 1":
            array[1].value = "500000";
            break;
        case "Loai 2":
            array[1].value = "300000";
            break;
        case "Loai 3":
            array[1].value = "100000";
            break;
    }
}
function tien(){
    array[3].value=Number(array[1].value) * Number(array[2].value);
}
