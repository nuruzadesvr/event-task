//  let signInBtn=document.querySelector(".btn , .btn-warning")

// let characterspan=document.querySelector("#passwordHelpInline")

 let passwordinput=document.querySelector("#inputPassword")
let container=document.querySelector(".custom--flex")
let recognizebtn=document.querySelector("#recognize")
 


 const recognizePassword = function(){
    if(passwordinput.value.length<=7)   //ona gore 7 qoydumki reng kodunun qarsinindaki hash isaresi (#) ile birlikde 7 simvol olmalidir
    {
        container.style.backgroundColor=`${passwordinput.value}`
    }

    else{
        alert("simvol sayi 6-dan az olmalidir")
    }
  
  }


 recognizebtn.addEventListener("click",recognizePassword)