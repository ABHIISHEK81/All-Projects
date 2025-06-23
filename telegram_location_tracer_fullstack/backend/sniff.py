from scapy.all import sniff, IP
import requests

API_URL = 'http://localhost:5000/trace'

def process_packet(packet):
    if IP in packet:
        dst_ip = packet[IP].dst
        print(f'Traced IP: {dst_ip}')
        try:
            requests.post(API_URL, json={'ip': dst_ip})
        except:
            pass

def start_sniffing():
    sniff(filter="udp or tcp", prn=process_packet, store=0)

if __name__ == '__main__':
    start_sniffing()
