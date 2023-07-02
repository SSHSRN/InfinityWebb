from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
import time

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def hello():
    return "<h1>Python Backend is working</h1>"

@app.route('/signup', methods=['POST'])
def signup():
    client = pymongo.MongoClient("mongodb://localhost:27017")
    database = client["GoogleMongo"]
    cluster = database["GoogleMongo_users"]
    data = {
        "name": request.json['name'],
        "email": request.json['email'],
        "password": request.json['password'],
        "timestamp": time.time(),
        "user_name": request.json['user_name'],
        "last_login": time.time()
    }
    # check if user already exists
    if cluster.find_one({"email": request.json['email']}):
        return jsonify({"status": "error", "message": "User already exists"}), 400
    elif cluster.find_one({"user_name": request.json['user_name']}):
        return jsonify({"status": "error", "message": "Username is already taken"}), 400
    else:
        cluster.insert_one(data)
        return jsonify({"status": "success", "message": "User created successfully"}), 201    

# Run Server on port 5000
if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
    print('Server running on port 5000')
