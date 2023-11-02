document.addEventListener("DOMContentLoaded", function() {
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");

    let currentDiv = div1;
    let nextDiv = div2;

    currentDiv.style.display = "block";
    nextDiv.style.display = "none";

    setInterval(function() {
        currentDiv.style.display = "none";
        nextDiv.style.display = "block";

        const tempDiv = currentDiv;
        currentDiv = nextDiv;
        nextDiv = tempDiv;
    }, 10000);
});