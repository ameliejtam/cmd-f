let emailList = [];

function addInputValue() {
    // Get the input field value
    let inputValue = document.getElementById("userInput").value;

    if (inputValue !== "") {
        emailList.push(inputValue); // Add value to array
        inputValue.value = " "; // Clear input field
    }

    document.getElementById("userInput").value = "";
    console.log(emailList);
}

// Saving to JSON file format to parse and send emails
function saveJSON() {
    let jsonString = JSON.stringify(itemsArray, null, 2); // Convert array to JSON
    let blob = new Blob([jsonString], { type: "application/json" }); // Create a Blob
    let a = document.createElement("a"); // Create a download link
    a.href = URL.createObjectURL(blob);
    a.download = "list.json"; // Set filename
    a.click(); // Trigger download
}



console.log(emailList);
