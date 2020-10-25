

function test(){
    document.getElementsByClassName("editor").length===0?console.log('gg'):
    document.getElementsByClassName("editor")[0].onkeypress=function focusEnter(e){
        if(e.keyCode===13){
            console.log(this)
            document.execCommand("defaultParagraphSeparator", false, "p");
            // const p=Object.assign(document.createElement('p'),{
            //     innerText:this.innerText,
            //     className:'edit-p',
            //     contentEditable:!!1
            // });
            // document.body.replaceChild(p,this)
        }
        
    }
}
