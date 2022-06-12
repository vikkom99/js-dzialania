
function calc(a, b) {
    let plus = a + b;
    if (a + b >= 0) {
        console.log("Wynik dodawania wynosi" + " " + plus)
    } else {
        console.log("Wynik jest nieprawidłowy")
    }

    let minus = a - b;
    if (a - b >= 0) {
        console.log("Wynik odejmowania wynosi" + " " + minus)
    } else {
        console.log("Wynik jest nieprawidłowy")
    }

    let multiplication = a * b;
    if (a * b >= 0) {
        console.log("Wynik mnożenia wynosi" + " " + multiplication)
    } else {
        console.log("Wynik jest nieprawidłowy")
    }
}
calc(10, 2);