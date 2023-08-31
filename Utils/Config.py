import json
import random

class Config:

    def get_api_key(self):
        with open("config.json", "r") as f:
            data = json.loads(f.read())
        # randomly generate a number 0 to 100
        return data['api_keys'][random.randint(0, len(data['api_keys']) - 1)]

