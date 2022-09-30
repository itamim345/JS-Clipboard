//Selectors
inputTextFiled = document.getElementById('message');
submitBtn = document.getElementById('clip-btn');

//Events Handler to copy on clipboard
submitBtn.addEventListener('click',function(){
    inputTextFiled.select()
    document.execCommand('Copy')
})