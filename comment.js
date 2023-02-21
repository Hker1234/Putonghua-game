const names = document.getElementById("name");
const textarea = document.getElementById("comment");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const form = document.getElementById("commentform");

form.addEventListener('submit',checksubmit);

function checksubmit(event){
    let message1 = [] ;
    let message2 = [] ;
    if (names.value === '' || names.value == null){
        message1.push ('<div class="alert alert-danger" role="alert">姓名不能留空!!</div>');
    }if (textarea.value === '' || textarea.value == null){
        message2.push ('<div class="alert alert-danger" role="alert">留言不能留空!!</div>');
    }else if (textarea.value.length < 10){
        message2.push ('<div class="alert alert-danger" role="alert">留言不能小個十字!!</div>');
    }else if (textarea.value.length >= 10){
        message2 == [];
    }


    if (message1.length > 0){
        event.preventDefault();
        error1.innerHTML = message1.join(' ,');
    }else{
        error1.innerHTML = "";
    }

    if (message2.length > 0){
        event.preventDefault();
        error2.innerHTML = message2.join(' ,');     
    }else{
        error2.innerHTML = "";
    }

    if (names.value!=null && textarea.value.length > 10 ){
        alert("謝謝你的意見 !!");
    }
    
}


function Rewrite(){
    document.Comment.name.value = "";
    document.Comment.comment.value = "";
}

