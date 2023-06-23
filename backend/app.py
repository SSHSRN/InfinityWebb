from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def hello():
    return "<h1>Python Backend is working</h1>"

@app.route('/signup', methods=['POST'])
def signup():
    data=request.json
    resStr = "Hello "+data['name']+" your email is "+data['email']
    return jsonify({'message': resStr})

# Run Server in port 5000
if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
    print('Server running in port 5000')