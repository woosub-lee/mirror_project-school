import json
from flask import Flask
from collections import OrderedDict

app = Flask(__name__)
@app.route('/', methods=['POST'])
def index():
    file_data = OrderedDict()
    file_data["shot_down"] = "0"
    file_data["turn_on"] = "1"
    print(json.dumps(file_data, ensure_ascii=False, indent="\t")) 
    with open('words.json', 'w',encoding="utf-8") as make_file:
        json.dump(file_data, make_file, ensure_ascii=False, indent="\t")

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0',port=8000)