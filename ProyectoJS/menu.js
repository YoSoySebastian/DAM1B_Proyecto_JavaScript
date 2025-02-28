//Menú desplegable

document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").style.display =
    document.getElementById("menu").style.display === "block" ? "none" : "block";
});

//Cambiar de color

document.querySelectorAll(".color-btn").forEach(button => {
    button.addEventListener("click", function() {
        if (this.dataset.type === "bg") {
            document.body.style.backgroundColor = this.dataset.color;
        } else if (this.dataset.type === "text") {
            document.getElementById("title").style.color = this.dataset.color;
            document.getElementById("text").style.color = this.dataset.color;
        }
    });
});

//Cambiar el tamaño

document.querySelectorAll(".size-btn").forEach(button => {
    button.addEventListener("click", function() {
        const titleSize = this.dataset.titleSize; 
        const textSize = this.dataset.textSize;

        document.getElementById("title").style.fontSize = titleSize + "px";
        document.getElementById("text").style.fontSize = textSize + "px";
    });
});


//Cambiar la letra

document.querySelectorAll(".font-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("title").style.fontFamily = this.dataset.font;
        document.getElementById("text").style.fontFamily = this.dataset.font;
    });
});