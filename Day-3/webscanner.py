import requests 
from bs4 import BeautifulSoup

url = "https://ecbtechkenya.com/"
response = requests.get(url)
html = response.text
soup = BeautifulSoup(html, 'html.parser')
links = soup.find_all('a')
for link in links:
    print(link.get('href'))