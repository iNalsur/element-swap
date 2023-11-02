document.addEventListener("load", function() {
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");
    const container = document.querySelector(".container");

    let currentDiv = div1;
    let nextDiv = div2;

    currentDiv.style.display = "block";

    setInterval(function() {
        currentDiv.style.display = "none";
        nextDiv.style.display = "block";

        const tempDiv = currentDiv;
        currentDiv = nextDiv;
        nextDiv = tempDiv;
    }, 10000);
});