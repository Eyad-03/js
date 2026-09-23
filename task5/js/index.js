let text = document.getElementById("text");
let font = document.getElementById("family");
let size = document.getElementById("size");

let italic = document.getElementById("italic");
let bold = document.getElementById("bold");
let underline = document.getElementById("underline");
function changeFamily()
{
   text.style.fontFamily=font.value
}



function changeSize()
{
    text.style.fontSize = size.value
}


function changeStyle() {

    if (italic.checked) {
        text.style.fontStyle = "italic";
    } else {
        text.style.fontStyle = "normal";
    }

    if (bold.checked) {
        text.style.fontWeight = "bold";
    } else {
        text.style.fontWeight = "normal";
    }

    if (underline.checked) {
        text.style.textDecoration = "underline";
    } else {
        text.style.textDecoration = "none";
    }
}