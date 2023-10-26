import network
import time

sta_if = network.WLAN(network.STA_IF)

sta_if.active(True)

sta_if.connect('Wokwi-GUEST', '')

time.sleep(5)

if sta_if.isconnected():
    print('Connected to Wi-Fi!')
else:
    print('Failed to connect to Wi-Fi.')

