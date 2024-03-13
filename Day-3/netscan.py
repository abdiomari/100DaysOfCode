from scapy.all import IP, ICMP, sr1
import socket

def ping(host):
    try:
        socket.gethostbyname(host)
    except socket.gaierror:
        return f"{host} is an invalid address"
    
    packet = IP(dst=host)/ICMP()
    response = sr1(packet, timeout=2, verbose=0)

    if response:
        return f"{host} is online"
    else:
        return f"{host} is offline"

#Example
# host_to_scan = "192.168.1.164"
host_to_scan = input("Enter hostname or IP address to ping: ")
result = ping(host_to_scan)
print(result)