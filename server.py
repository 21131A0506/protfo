from flask import Flask, render_template, request, redirect
import os
import csv

app = Flask(__name__)


@app.route("/")
def my_home():
    return render_template("index.html")

@app.route("/<string:page_name>")
def html_page(page_name):
    return render_template(page_name)

#def write_to_file(data):
    file_path = os.path.join(app.root_path, 'database.txt')
    with open(file_path, mode='a') as database:
        try:
            fields = ["name", "email", "subject", "message"]
            values = [data.get(field, "NA") for field in fields]  # Fetch each value or default to "NA"
            database.write(f"\n{','.join(values)}")  # Join the values with commas
            database.flush()  # Ensures data is written to disk immediately
        except Exception as e:
            print("An error occurred:", e)

def write_to_csv(data):
    file_path = os.path.join(app.root_path, 'database.csv')
    with open(file_path, mode='a', newline='') as database2: 
        try:
            fields = ["name", "email", "subject", "message"]
            values = [data.get(field, "NA") for field in fields]  # Fetch each value or default to "NA"
            csv_writer = csv.writer(database2, delimiter=",", quoting=csv.QUOTE_MINIMAL)
            csv_writer.writerow(values)
        except Exception as e:
            print("An error occurred:", e)

@app.route('/submit_form', methods=['POST','GET'])
def submit_form():
    if request.method == 'POST':
        try:
            data = request.form.to_dict()
            # write_to_file(data)
            write_to_csv(data)
            return redirect('/contact.html')
        except:
            return 'Error saving to database'
    else:
        return 'Something went wrong. Try Again!', 400

