from pymongo import MongoClient
import datetime

client = MongoClient('mongodb://localhost:27017')
db = client.telegram_tracer

def insert_trace(ip, location):
    trace = {
        'ip': ip,
        'location': location,
        'timestamp': datetime.datetime.now().isoformat()
    }
    db.traces.insert_one(trace)
    return trace

def get_all_traces():
    return list(db.traces.find({}, {'_id': 0}))
