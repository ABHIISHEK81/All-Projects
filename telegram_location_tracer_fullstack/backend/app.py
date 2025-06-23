from flask import Flask, request, jsonify
from flask_cors import CORS
from geolocation import get_geolocation
from models import insert_trace, get_all_traces
import logging

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)

@app.route('/trace', methods=['POST'])
def trace():
    data = request.get_json(silent=True)
    if not data or 'ip' not in data:
        return jsonify({'error': 'No IP provided in request body'}), 400
    ip = data['ip']
    try:
        location = get_geolocation(ip)
        trace_data = insert_trace(ip, location)
        return jsonify(trace_data), 200
    except Exception as e:
        app.logger.error(f"Error tracing IP {ip}: {e}")
        return jsonify({'error': f'Failed to trace IP: {str(e)}'}), 500

@app.route('/locations', methods=['GET'])
def locations():
    try:
        traces = get_all_traces()
        return jsonify(traces), 200
    except Exception as e:
        app.logger.error(f"Error fetching locations: {e}")
        return jsonify({'error': f'Failed to fetch locations: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

# Install the required packages
# !pip install flask flask-cors
