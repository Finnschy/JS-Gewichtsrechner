
function gewichtRechner() {
    event.preventDefault()
    let groesse = document.getElementById("groesse").value
    let alter = document.getElementById("alter").value
    let radio = document.getElementById("breit")
    let output = document.getElementById("output")
    let ideal
    if (radio.checked) {
        ideal = (((groesse - 100) + (alter / 10)) * 0.9 * 0.9).toFixed(0);
        output.innerHTML = `Dein Idealgewicht liegt bei ${ideal} kg.`
    
    } else {
        ideal = (((groesse - 100) + (alter / 10)) * 0.9 * 1.1).toFixed(0);
        output.innerHTML = `Dein Idealgewicht liegt bei ${ideal} kg.`
    }
}
