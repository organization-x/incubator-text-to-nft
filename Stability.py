!pip install stability-sdk -q

import getpass, os

os.environ['STABILITY_KEY'] = getpass.getpass('sk-NoV3EGb9mmfF3ghsKNZahP0eULQlYS495IXmJLDI42PTrNH0')

#makes your job easier
import io
import os
import warnings

#used to display the image
from IPython.display import display
#image processing
from PIL import Image
#from dreamstudio
from stability_sdk import client
import stability_sdk.interfaces.gooseai.generation.generation_pb2 as generation
#used for the seed to have different results
import random

#authentication
stability_api = client.StabilityInference(
    key = os.environ['STABILITY_KEY'],
    #verbose tells when you have a error
    verbose=True,
)

user_input = input('What do you want Text to NFT to draw? ')
image_text_generator = user_input

#generate object returned is a python generator
for i in range(5):
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
                    display(img)
