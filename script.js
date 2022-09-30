//Selectors
inputTextFiled = document.getElementById('message');
submitBtn = document.getElementById('clip-btn');
//Function to copy on clipboard
submitBtn.addEventListener('click',function(){
    inputTextFiled.select()
    document.execCommand('Copy')
})