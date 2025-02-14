document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".element");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close");

    elements.forEach(element => {
        element.addEventListener("click", () => {
            document.getElementById("element-name").innerText = element.dataset.name;
            document.getElementById("element-symbol").innerText = element.dataset.symbol;
            document.getElementById("element-number").innerText = element.dataset.number;
            popup.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
