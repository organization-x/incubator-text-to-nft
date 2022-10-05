import getpass, os
from thirdweb import ThirdwebSDK
from thirdweb.types.nft import NFTMetadataInput
from eth_account import Account
from dotenv import load_dotenv
from web3 import Web3
import os

os.environ['STABILITY_KEY'] = getpass.getpass('sk-xombRQXFgoYkU1l7W4h6XkMwOHm1bg5gfMZgd0Tkn4LgM6UI')

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
#used to get current date and time
from datetime import datetime

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

# variables to make implementing easier in future
PRIVATE_KEY = "2d69642fc9b97c1db045b87b4b0f865251caa1c3737b052a08b395a6f0e62ce4"
sdk = ThirdwebSDK.from_private_key(PRIVATE_KEY, "goerli")
NFT_COLLECTION_ADDRESS = "0xda8E1288395bfCb615e1a98D410d033D8AF3164D"
nft_collection = sdk.get_nft_collection(NFT_COLLECTION_ADDRESS)

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

    nft_name1 = user_input
    description1 = user_input
    # image1 = "https://storage.cloud.google.com/imagehostingtext-to-nft/img0-An%20astronaut%20riding%20a%20horse%20in%20a%20photorealistic%20style-2022-10-05%2000%3A35%3A46.062437.png"
    image1 = "img" + str(i) + "-" + user_input + "-" + str(now) + ".png"
    nft_collection.mint(NFTMetadataInput.from_json({ "name": nft_name1, "description": description1, "image": image1}))
    print("Image Minted")

'''
nft_name2 = "House2"
description2 = "A different house"
image2 = "https://i.redd.it/1ul7r0db8sy81.jpg"
nft_name3 = "House3"
description3 = "An other different house"
image3 = "https://pbs.twimg.com/media/FY2ZpDGXoAY5nuf.jpg"
nft_name4 = "House4"
description4 = "An other more different house"
image4 = "https://pbs.twimg.com/media/FY2ZpDJXEAAQo8c.jpg"
properties = {}

'''

# code to mint the NFTs



#nft_collection.mint(NFTMetadataInput.from_json({ "name": nft_name2, "description": description2, "image": image2}))
#nft_collection.mint(NFTMetadataInput.from_json({ "name": nft_name3, "description": description3, "image": image3}))
#nft_collection.mint(NFTMetadataInput.from_json({ "name": nft_name4, "description": description4, "image": image4}))