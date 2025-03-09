import json

# Read the JSON file
with open('emails.json', 'r') as f:
    data = json.load(f)
    
# Check if the 'emails' array exists
if 'emails' not in data:
    data['emails'] = []

# Add new email addresses
new_emails = ["jane.doe@example.com", "peter.pan@example.com"] 
# make this into function input 

data['emails'].extend(new_emails)

# Write the updated JSON back to the file
with open('emails.json', 'w') as f:
    json.dump(data, f, indent=4)