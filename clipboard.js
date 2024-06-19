function copy_clipboard(ID){
    let clipboard = document.getElementById(ID)
    navigator.clipboard.writeText(clipboard.innerText)
}