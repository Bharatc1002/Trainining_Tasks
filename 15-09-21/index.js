

var k = 0;
  document.getElementById("box").addEventListener("click", ()=>{
    var i = Math.floor(Math.random()*400+1);
    var j = Math.floor(Math.random()*400+1);
    document.querySelector(".box").style.marginLeft = i + "px";
    document.querySelector(".box").style.marginTop = j + "px";
    k++;
    
})

    setTimeout(myTimer, 30000);

    function myTimer(){
        alert(k);
    }

    
