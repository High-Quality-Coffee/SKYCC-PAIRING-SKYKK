let target=document.querySelector("#dynamic");

function randomString(){
    let stringArr=["RECYCLE", "ECO FRIENDLY","LOW-CARBON PRODUCTS",
    "ENVIRONMENT","NO PLASTIC"];
    let selectString=stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr=selectString.split("");

    return selectStringArr;
}

function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}


//한글자식 텍스트 출력함수
function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }
    else{
        setTimeout(resetTyping,3000);
    }
}

dynamic(randomString());

//커서깜박임
function blink(){
    target.classList.toggle("active");
}

setInterval(blink,500);