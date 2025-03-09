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

// function showJSON() {
//     let jsonString = JSON.stringify(emailList, null, 2); // Convert to JSON format
//     console.log(jsonString); // Log JSON string
//     alert(jsonString); // Show JSON in an alert (optional)
// }

function saveJSON() {
    let jsonString = JSON.stringify(itemsArray, null, 2); // Convert array to JSON
    let blob = new Blob([jsonString], { type: "application/json" }); // Create a Blob
    let a = document.createElement("a"); // Create a download link
    a.href = URL.createObjectURL(blob);
    a.download = "list.json"; // Set filename
    a.click(); // Trigger download
}



console.log(emailList);
