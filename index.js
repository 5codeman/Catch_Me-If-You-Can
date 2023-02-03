import "./styles.css";

alert("Touch the Box and see that you are able to catch the box or not \n बॉक्स को स्पर्श करें और देखें कि आप बॉक्स को पकड़ पा रहे हैं या नहीं");
let Box = document.getElementById("Box");
let Box_height = Box.clientHeight;
let Box_width = Box.clientWidth;
Box.addEventListener("mousemove", catchme);
function catchme() {
  Box.style.top =
    Math.floor(Math.random() * (window.innerHeight - Box_height - 6)) + "px";
  Box.style.left =
    Math.floor(Math.random() * (window.innerWidth - Box_width - 6)) + "px";
}
