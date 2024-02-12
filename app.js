let inputTextEle = document.getElementById('inputText');
let inputFontFamilyEle = document.getElementById('inputFontFamily');
let inputFontStyleEle = document.getElementById('inputFontStyle');
let inputFontSizeEle = document.getElementById('inputFontSize');
let inputFontAllignmentEle = document.getElementById('inputFontAllignment');
let changeableTextEle = document.getElementById('changeableText');
let colorEle = document.getElementById('color');

inputTextEle.addEventListener('keyup', function() {
    changeableTextEle.textContent = event.target.value;
});

inputFontFamilyEle.addEventListener('change', function() {
    changeableTextEle.style.fontFamily = event.target.value;
});

inputFontStyleEle.addEventListener('change', function() {
    changeableTextEle.style.fontStyle = event.target.value;
});


inputFontSizeEle.addEventListener('change', function() {

    changeableTextEle.style.fontSize = parseInt(event.target.value) + 'px';
})


inputFontAllignmentEle.addEventListener('change', function() {
    changeableTextEle.style.textAlign = event.target.value;
})

colorEle.addEventListener('change', function() {
    changeableTextEle.style.color = event.target.value;
});