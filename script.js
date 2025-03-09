console.log("email test");

function getInputValue() {
    // Get the input field value
    let inputValue = document.getElementById("userInput").value;
    // Display the value
    document.getElementById("output").innerText = "Entered Value: " + inputValue;
    // Log to console
    console.log(inputValue);
}