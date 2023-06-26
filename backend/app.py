from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def hello():
    return "<h1>Python Backend is working</h1>"

@app.route('/signup', methods=['POST'])
def signup():
    client = pymongo.MongoClient("mongodb://localhost:27017")
    database = client["db"]
    cluster = database["collection"]
    data = request.json

    Query=cluster.insert_one(data)
    if Query:
        return jsonify({"message": "User created successfully"})
    

# Run Server on port 5000
if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
    print('Server running on port 5000')
