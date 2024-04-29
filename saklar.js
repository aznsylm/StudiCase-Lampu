function saklar() {
    // LABEL
    let togleaizan1 = document.getElementById("toglee1")
    let togleaizan2 = document.getElementById("toglee2")
    let togleaizan3 = document.getElementById("toglee3")
    
    // GAMBAR
    let lamp1 = document.getElementById("lampu1");
    let lamp2 = document.getElementById("lampu2");
    let lamp3 = document.getElementById("lampu3");

    if (togleaizan1.checked) {
        lamp1.src = "assets/images/on.gif"
    } else {
        lamp1.src = "assets/images/off.gif"
    }    

    if (togleaizan2.checked) {
        lamp2.src = "assets/images/on.gif"
    } else {
        lamp2.src = "assets/images/off.gif"
    }    

    if (togleaizan3.checked) {
        lamp3.src = "assets/images/on.gif"
    } else {
        lamp3.src = "assets/images/off.gif"
    }    
}