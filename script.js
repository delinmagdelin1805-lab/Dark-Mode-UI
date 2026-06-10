const themeBtn =
    document.getElementById("themeBtn");

const body =
    document.body;

/* Toggle Dark Mode */

themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    /* Change Icon */

    if(body.classList.contains("dark")){

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }else{

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }
});