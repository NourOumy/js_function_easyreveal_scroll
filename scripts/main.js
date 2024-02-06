function easyscroll(){
    let elements = document.querySelectorAll('.fadeIn')
    elements.forEach(element => {
        if((window.scrollY + window.innerHeight) > (element.offsetTop +(element.offsetHeight/2))){
         element.classList.add("visible")
         }     
     })
}
function easyscrollRight(){
    let rightElements = document.querySelectorAll('.elementjsright')
    rightElements.forEach(rightElement => {
        if((window.scrollY + window.innerHeight) > (rightElement.offsetTop +(rightElement.offsetHeight/2))){
            rightElement.classList.add("reveal")
         }     
     })
}
function easyscrollLeft(){
    let leftElements = document.querySelectorAll('.elementjsleft')
    leftElements.forEach(leftElement => {
        if((window.scrollY + window.innerHeight) > (leftElement.offsetTop +(leftElement.offsetHeight/2))){
            leftElement.classList.add("reveal")
         }     
     })
}



easyscroll()

window.addEventListener ("scroll", function (){
    easyscroll()
    easyscrollRight()
    easyscrollLeft()
    })