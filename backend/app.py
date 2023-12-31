from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import pymongo
import time
import requests

load_dotenv()

mongoConnectionString = os.getenv("MONGODB_CONNECTION_URL")
# print(mongoConnectionString)

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def hello():
    return "<h1>Python Backend is working</h1>"

@app.route('/signup', methods=['POST'])
def signup():
    client = pymongo.MongoClient(mongoConnectionString)
    database = client["InfinityWebb"]
    cluster = database["InfinityWebb_users"]
    data = {
        "name": request.json['name'],
        "email": request.json['email'],
        "password": request.json['password'],
        "user_name": request.json['user_name'],
        "last_login": time.time(),
        "created_at": time.time(),
        "num_of_logins": 1,
        "game_status": []
    }
    # check if user already exists
    if cluster.find_one({"email": request.json['email']}):
        return jsonify({"status": "error", "message": "User already exists"}), 400
    elif cluster.find_one({"user_name": request.json['user_name']}):
        return jsonify({"status": "error", "message": "Username is already taken"}), 400
    # create user
    else:
        cluster.insert_one(data)
        return jsonify({"status": "success", "message": "User created successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    client = pymongo.MongoClient(mongoConnectionString)
    database = client["InfinityWebb"]
    cluster = database["InfinityWebb_users"]
    # check if user exists
    if cluster.find_one({"email": request.json['email']}):
        # check if password is correct
        if cluster.find_one({"email": request.json['email']})['password'] == request.json['password']:
            # update last login
            # $set is used to update a value
            cluster.update_one({"email": request.json['email']}, {"$set": {"last_login": time.time()}})
            # update number of logins
            # $inc is used to increment a value by a certain amount
            cluster.update_one({"email": request.json['email']}, {"$inc": {"num_of_logins": 1}})
            return jsonify({"status": "success", "message": "User logged in successfully"}), 200
        else:
            return jsonify({"status": "error", "message": "Incorrect password"}), 400
    else:
        return jsonify({"status": "error", "message": "User does not exist"}), 400

@app.route('/updateGameStatus', methods=['POST'])
def updateGameStatus():
    data = request.json['data']
    client = pymongo.MongoClient(mongoConnectionString)
    database = client["InfinityWebb"]
    cluster = database["InfinityWebb_users"]
    # keep the existing game status js
    cluster.update_one({"email": data['email']}, {"$addToSet": {"game_status": data['gameStatus']}})
    return jsonify({"status": "success", "message": "Game status updated successfully"}), 200

@app.route('/gameOver', methods=['POST'])
def gameOver():
    data = request.json['data']
    client = pymongo.MongoClient(mongoConnectionString)
    database = client["InfinityWebb"]
    cluster = database["InfinityWebb_users"]
    # Delete the game status from the database
    cluster.update_one({"email": data['email']}, {"$unset": {"game_status": ""}})
    # add an empty array to the game status
    cluster.update_one({"email": data['email']}, {"$set": {"game_status": []}})
    return jsonify({"status": "success", "message": "Game status reset successfully"}), 200

@app.route('/getGameStatus', methods=['POST'])
def getGameStatus():
    client = pymongo.MongoClient(mongoConnectionString)
    database = client["InfinityWebb"]
    cluster = database["InfinityWebb_users"]
    # Get game status from the database and return it
    # if the user does not have a game status, return an empty array
    if not cluster.find_one({"email": request.json['data']['email']})['game_status']:
        return jsonify({"status": "success", "message": "Game status retrieved successfully", "data": []}), 200
    else:
        gameStatus = cluster.find_one({"email": request.json['data']['email']})['game_status']
        return jsonify({"status": "success", "message": "Game status retrieved successfully", "data": gameStatus}), 200

@app.route('/locateISS', methods=['GET'])
def locateISS():
    issLocation = requests.get(os.getenv("ISS_LOCATION_API"))
    return jsonify({"status": "success", "message": "ISS location retrieved successfully", "data": issLocation.json()}), 200

@app.route('/getAstronauts', methods=['GET'])
def getAstronauts():
    astronauts = requests.get(os.getenv("ASTRONAUTS_API"))
    print(astronauts.json())
    return jsonify({"status": "success", "message": "Astronauts retrieved successfully", "data": astronauts.json()}), 200

@app.route('/sunriseSet', methods=['POST'])
def sunriseSet():
    data = request.json
    sunriseSet = requests.get(os.getenv("SUNRISE_SET_API")+str(data['latitude'])+"&lng="+str(data['longitude'])+"&date=today")
    return jsonify({"status": "success", "message": "Sunrise and sunset retrieved successfully", "data": sunriseSet.json()}), 200

# Run Server on port 5000
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    print('Server running on port 5000')
