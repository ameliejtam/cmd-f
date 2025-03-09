let emailList = [];

function addInputValue() {
    // Get the input field value
    let inputValue = document.getElementById("userInput").value;
    document.getElementById("output").innerText = "Entered Value: " + inputValue;

    if (inputValue !== "") {
        emailList.push(inputValue); // Add value to array
        //updateList(); // Update the displayed list
        inputValue.value = " "; // Clear input field
    }

    document.getElementById("userInput").value = "";
    console.log(emailList);
}


console.log(emailList);
/*
    // Send data to backend via Fetch API
     fetch('/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jsonData)
     }).then(response => response.json())
         .then(data => document.getElementById("output").innerText = data.message)
         .catch(error => console.error("Error:", error));
*/
//     // Log to console
//     console.log(inputValue);
// }