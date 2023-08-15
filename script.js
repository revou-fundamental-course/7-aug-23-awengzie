document.getElementById("triangleForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert("Please enter valid positive numbers for all sides.");
        return;
    }

    const perimeter = sideA + sideB + sideC;
    const s = perimeter / 2;
    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    // Update the result elements with calculated values
    document.getElementById("areaResult").textContent = area.toFixed(2);
    document.getElementById("perimeterResult").textContent = perimeter.toFixed(2);

    // Display the result div
    document.getElementById("result").style.display = "block";
});
