let emailList = [];

function addInputValue() {
    // Get the input field value
    let inputValue = document.getElementById("userInput").value;
    //document.getElementById("output").innerText = "Entered Value: " + inputValue;

    if (inputValue !== "") {
        emailList.push(inputValue); // Add value to array
        //updateList(); // Update the displayed list
        inputValue.value = " "; // Clear input field
    }

    document.getElementById("userInput").value = "";
    console.log(emailList);
}

function showJSON() {
    let jsonString = JSON.stringify(emailList, null, 2); // Convert to JSON format
    console.log(jsonString); // Log JSON string
    alert(jsonString); // Show JSON in an alert (optional)
}




console.log(emailList);
