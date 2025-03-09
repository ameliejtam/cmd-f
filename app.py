import json
from flask import Flask, request, render_template


app = Flask(__name__)

# Route to display the form and handle the submission
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Get input from form
        user_input = request.form.get("userInput")
        
        # Data to be written into JSON
        data = {"userInput": user_input}

        # Write data to a JSON file
        with open("data.json", "w") as json_file:
            json.dump(data, json_file, indent=4)

        return f"Input saved: {user_input}"

    return render_template("index.html")  # Show form initially

if __name__ == "__main__":
    app.run(debug=True)
