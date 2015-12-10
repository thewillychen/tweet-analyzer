from twython import TwythonStreamer
import json

filename = 'tweets.txt'

class MyStreamer(TwythonStreamer):
    def on_success(self, data):
        with open(filename, "a") as myfile:
    		myfile.write(json.dumps(data) + "\n")

    def on_error(self, status_code, data):
        print status_code

APP_KEY = os.environ.get('TWITTER_CONSUMER_KEY')
APP_SECRET = os.environ.get('TWITTER_CONSUMER_SECRET')
OAUTH_TOKEN = os.environ.get('TWITTER')
OAUTH_TOKEN_SECRET = "NRfN7EKDbjHfqdFBTingYxrUWgRd8Axx3eG9WTCISGGU6"

stream = MyStreamer(APP_KEY, APP_SECRET,
                    OAUTH_TOKEN, OAUTH_TOKEN_SECRET)
stream.statuses.filter(track='today')