import sys
import tweepy
import time
from config import keys
from config import tweets

# Authenticate with your Twitter app
auth = tweepy.OAuthHandler(keys.api, keys.api_secret)
auth.set_access_token(keys.access_token, keys.access_token_secret)
api = tweepy.API(auth)
client = tweepy.Client(keys.bearer_token, keys.api, keys.api_secret, keys.access_token, keys.access_token_secret)

print("hi")

try:
    for i in tweets.list:
        client.create_tweet(text = i)
        time.sleep(100) #seconds to wait. Reduce if needed
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)