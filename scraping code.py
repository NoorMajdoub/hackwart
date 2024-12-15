import requests
from bs4 import BeautifulSoup

def find_ml_events():
    #here we have our resource for scrapping evenbrite
    url = "https://www.eventbrite.com/d/online/machine-learning/"
    response = requests.get(url)
    if response.status_code == 200:
        print("Successfully fetched the webpage!")
    else:
        print(f"Failed to retrieve data. HTTP Status Code: {response.status_code}")
        return []
    
    # Parse the HTML content
    soup = BeautifulSoup(response.content, 'html.parser')
    events = []
    for event in soup.find_all("div", class_="search-event-card-wrapper"):
        try:
            title = event.find("div", class_="eds-event-card-content__primary-content").get_text(strip=True)
            link = event.find("a", class_="eds-event-card-content__action-link")["href"]
            date = event.find("div", class_="eds-event-card-content__sub-content").get_text(strip=True)
            events.append({"title": title, "link": link, "date": date})
        except AttributeError:
            continue
    if events:
        print("\nMachine Learning Events Found:\n")
        for idx, event in enumerate(events, start=1):
            print(f"{idx}. {event['title']}")
            print(f"   Date: {event['date']}")
            print(f"   Link: {event['link']}\n")
    else:
        print("No events found for Machine Learning.")
    return events
ml_events = find_ml_events()
