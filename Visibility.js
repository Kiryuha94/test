class Visibility{
    
    show(element){
        document.body.appendChild(element)
    }
    hide(element){
        element.remove()
    }
}