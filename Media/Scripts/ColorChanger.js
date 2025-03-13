const TopColorInput = document.getElementById("TopColorInput");
const BottomColorInput = document.getElementById("BottomColorInput");
const ColorRotationInput = document.getElementById("ColorRotationInput");
const NotiText = document.getElementById("NotiText");
const PageBody = document.getElementById("MainBody");
const ColorSelector = document.getElementById("ColorSelector");
const ShowUIButton = document.getElementById("ShowUIButton");

function ChangeColor(){
    let TopColorValue = TopColorInput.value;
    let BottomColorValue = BottomColorInput.value;
    let RotationValue = ColorRotationInput.value;
    if(RotationValue < 0 || RotationValue > 360){
        RotationValue = 180;
        console.log(`Rotation had to be changed.`);
    };
    PageBody.style.background = `linear-gradient(${RotationValue}deg ,${TopColorValue}, ${BottomColorValue})`;
    NotiText.textContent = `Gradient made: ${TopColorValue}, ${BottomColorValue}!`;
    console.log(`New gradient: Top: ${TopColorValue}, Bottom: ${BottomColorValue}.`);
};

function HideUI(){
    ColorSelector.style.display = "none"
    ShowUIButton.style.display = "block"
}

function ShowUI(){
    ColorSelector.style.display = "block"
    ShowUIButton.style.display = "none"
}