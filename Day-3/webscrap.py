import requests
from bs4 import BeautifulSoup

def scrap_for_news():
    url = input("Enter url/link to scrap: ")
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    headlines = soup.find_all('p', class_ = 'daraja')
    return [headline.text for headline in headlines]

#Function Call
headlines = scrap_for_news()
print("Headlines: ", headlines)
