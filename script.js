

document.querySelector("button").addEventListener("click",()=>{
    document.querySelector(".loader-content").classList.add("hide");
    document.querySelector(".loader").classList.remove("hide");
   
    var imageLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/46-101-0548_Lviv_Latin_Cathedral_RB_18.jpg/1000px-46-101-0548_Lviv_Latin_Cathedral_RB_18.jpg",
    downloadSize = 253374,
    time_start, time_end,
    downloadSrc = new Image();
    time_start = new Date().getTime();
    console.log(time_start)
    var cacheImg = "?nn=" + time_start;
    downloadSrc.src = imageLink + cacheImg;
    console.log(downloadSrc)
     downloadSrc.onload = function(){
        time_end = new Date().getTime();
        var timeDuration = (time_end - time_start)/1000;
        console.log(timeDuration)
       let  loadedBytes = downloadSize*8;
       totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2)
       console.log(totalSpeed)
       document.querySelector(".content").innerHTML = totalSpeed + '<small>mbps<small>'
       setTimeout(()=>{
        document.querySelector(".loader").classList.add("hide");
        document.querySelector(".loader-content").classList.remove("hide");   
       },5000)
    }
})