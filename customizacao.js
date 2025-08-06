
function applyCustomizations() {
    const bgColor = document.getElementById('bg-color').value;
    const textColor = document.getElementById('text-color').value;
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    localStorage.setItem('bgColor', bgColor);
    localStorage.setItem('textColor', textColor);
}
window.onload = function () {
    const bgColor = localStorage.getItem('bgColor');
    const textColor = localStorage.getItem('textColor');
    if (bgColor) document.body.style.backgroundColor = bgColor;
    if (textColor) document.body.style.color = textColor;
};
