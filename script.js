for(var i = 0; i < 5; i++){
  console.log(i)
}

var image = document.getElementById("changeMe");

var origHeight = image.height;
var origWidth = image.width;

image.onmouseover = function(){
  this.style.height = "500px";
  this.style.width= "450px";
};

image.onmouseout = function(){
  this.style.height = origHeight + "px";
  this.style.width = origWidth + "px";
};

var imageSrcs = ["https://data.whicdn.com/images/322176404/original.gif",
                "https://i.pinimg.com/originals/2c/f0/64/2cf064ae9e763516c4edf088dd56e4df.jpg",
                "https://i.pinimg.com/originals/c8/c5/96/c8c5962a23b80319e275abd37d83c62d.png",
                "https://i.pinimg.com/736x/b5/eb/90/b5eb908d998ce45ebc4a635c44f2949c.jpg",
                "https://i.pinimg.com/originals/c4/a5/e0/c4a5e0527092a6dbe1bbf85eb3f8b0f1.jpg",
                "https://i.pinimg.com/736x/76/cf/cb/76cfcb7ad0f2e5507511a926dce75526.jpg",
                "https://i.pinimg.com/originals/11/be/2b/11be2b5ee26289c66fb377a382220e96.jpg"];

var button = document.getElementById("slide");
var imageHolder = document.getElementById("changeMe");

var i = 0
button.onclick = function(ev){
  imageHolder.src = imageSrcs[i]
  i++
  if(i==7){
    i=0
  };
}

var text = "Improvement begins with I - Arnold H. Glasow";

var chars = text.split('');
var container = document.getElementById("typing");

var ii = 0;
setInterval(function () {
    if (ii < chars.length) {
        container.innerHTML += chars[ii++];
    } else {
        ii = 0;
        container.innerHTML = "";
    }
}, 80);
