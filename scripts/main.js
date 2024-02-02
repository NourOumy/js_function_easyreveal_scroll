function easyscroll(){
    let elements = document.querySelectorAll('.fadeIn')
    elements.forEach(element => {
        if((window.scrollY + window.innerHeight) > (element.offsetTop +(element.offsetHeight/2))){
         element.classList.add("visible")
         }     
     })
}

easyscroll()

window.addEventListener ("scroll", function (){
    easyscroll()
    })