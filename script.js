console.log("email test");

function getInputValueToJson() {
    // Get the input field value
    let inputValue = document.getElementById("userInput").value;
    let jsonData = { "input": inputValue };

    // Store JSON in LocalStorage
    localStorage.setItem("userData", JSON.stringify(jsonData));

     // Display confirmation
    document.getElementById("output").innerText = "Data Saved: " + JSON.stringify(jsonData);


    // Log to console
    console.log(inputValue);
}