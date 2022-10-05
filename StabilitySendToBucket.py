import getpass, os

os.environ['STABILITY_KEY'] = getpass.getpass('sk-xombRQXFgoYkU1l7W4h6XkMwOHm1bg5gfMZgd0Tkn4LgM6UI')

#makes your job easier
import io
import os
import warnings
import logging
import os
import cloudstorage as gcs
import webapp2

from google.appengine.api import app_identity


#used to display the image
from IPython.display import display
#image processing
from PIL import Image
#from dreamstudio
from stability_sdk import client
import stability_sdk.interfaces.gooseai.generation.generation_pb2 as generation
#used for the seed to have different results
import random
#used to get current date and time
from datetime import datetime


def get(self):
  bucket_name = os.environ.get('imagehostingtext-to-nft',
                               app_identity.get_default_gcs_bucket_name())

  self.response.headers['Content-Type'] = 'text/plain'
  self.response.write('Demo GCS Application running from Version: '
                      + os.environ['CURRENT_VERSION_ID'] + '\n')
  self.response.write('Using bucket name: ' + bucket_name + '\n\n')
  
  
#authentication
stability_api = client.StabilityInference(
    key = os.environ['STABILITY_KEY'],
    #verbose tells when you have a error
    verbose=True,
)

user_input = input('What do you want Text to NFT to draw? ')
imgs_input = input("How many images would you like? ")
image_text_generator = user_input
now = datetime.now()



#generate object returned is a python generator
for i in range(int(imgs_input)):
    answers = stability_api.generate(
        prompt = image_text_generator,
        seed = random.randrange(0, 99999)
            )
            #interating over the genrator produces the api response
    for resp in answers:
            for artifact in resp.artifacts:
            #Filtering for NSFW content
                if artifact.finish_reason == generation.FILTER:
                    warnings.warn("Your request activated the API's satey filters and could not be process, change it and try again")
                #if image passes filter it will display
                if artifact.type == generation.ARTIFACT_IMAGE:
                    img = Image.open(io.BytesIO(artifact.binary))
                    img.save("img" + str(i) + "-" + user_input + "-" + str(now) + ".png")
