//Selectors
inputTextFiled = document.getElementById('message');
submitBtn = document.getElementById('clip-btn');

//Events Handler to copy on clipboard
submitBtn.addEventListener('click',function(){
    inputTextFiled.select()
    document.execCommand('Copy')
    alert("Copied!");
    inputTextFiled.value = "";

    //Alternative Way
    // navigator.clipboard.writeText(inputTextFiled.value);
    // alert("Copied!");
    // inputTextFiled.value = "";
})