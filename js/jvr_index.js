//Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function jvr_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function jvr_close() {
    mySidebar.style.display = "none";
}

// News Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var articles = document.getElementsByClassName("myArticles");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < articles.length; i++) {
articles[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block"; 
articles[slideIndex-1].style.display = "block"; 
dots[slideIndex-1].className += " active";
}

// Article Slider (나중에 기사 txt에서 바로 불러오는 기능 구현할 때 쓸 것)
function openTextFile() {
var input = document.createElement("input");

input.type = "file";
input.accept = "text/plain"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"

input.onchange = function (event) {
    processFile(event.target.files[0]);
};

input.click();
}

function processFile(file) {
    var reader = new FileReader();

    reader.onload = function () {
        output.innerText = reader.result;
    };

    reader.readAsText(file, /* optional */ "euc-kr")};


/* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );