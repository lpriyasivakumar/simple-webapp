from wsgiref import headers
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
    
# Define the URL of the external API you want to proxy
EXTERNAL_API_BASE_URL = "https://dog.ceo/api/breeds/image/random"
   
@app.route('/', methods=['GET'])
def passthrough_api():
    
    try:
        # Forward the request based on the original HTTP method
        if request.method == 'GET':
            resp = requests.get(EXTERNAL_API_BASE_URL)
        else:
            return jsonify({"error": "Method not allowed"}), 405
    
        # Return the response from the external API to the client
        response = jsonify(resp.json())
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        return response

    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Error communicating with external API: {e}"}), 500
    
if __name__ == '__main__':
    app.run(debug=True)