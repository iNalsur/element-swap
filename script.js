document.addEventListener("DOMContentLoaded", function() {
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");

    let currentDiv = div1;
    let nextDiv = div2;

    currentDiv.classList.add("visible");
    nextDiv.classList.remove("visible");   
    
    setInterval(function() {
        currentDiv.classList.remove("visible");
        nextDiv.classList.add("visible");      

        const tempDiv = currentDiv;
        currentDiv = nextDiv;
        nextDiv = tempDiv;
    }, 10000);
});