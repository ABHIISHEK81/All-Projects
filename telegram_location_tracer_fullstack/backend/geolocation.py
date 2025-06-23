import requests

def get_geolocation(ip):
    response = requests.get(f'http://ip-api.com/json/{ip}')
    data = response.json()
    return {
        'ip': ip,
        'city': data.get('city'),
        'region': data.get('regionName'),
        'country': data.get('country'),
        'lat': data.get('lat'),
        'lon': data.get('lon')
    }
