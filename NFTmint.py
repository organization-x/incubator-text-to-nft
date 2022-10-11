import getpass, os
from thirdweb import ThirdwebSDK
from thirdweb.types.nft import NFTMetadataInput
from eth_account import Account
from dotenv import load_dotenv
from web3 import Web3
import io
import warnings
from IPython.display import display
from PIL import Image
from stability_sdk import client
import stability_sdk.interfaces.gooseai.generation.generation_pb2 as generation
import random
from datetime import datetime


load_dotenv()
# sk-3Zr2n9uHFVum8GLWV1r4CXHVPMFr9GieVoDwLgd1fT1pdkPG

DREAM_STUDIO_API_KEY = os.getenv("DREAM_STUDIO_API_KEY")

# os.environ['STABILITY_KEY'] = getpass.getpass('Stability Key')


#authentication
#verbose tells when you have a error
stability_api = client.StabilityInference(key = DREAM_STUDIO_API_KEY, verbose=True,)

prompt = input('What do you want Text to NFT to draw? ')
numImgs = input("How many images would you like? ")
now = datetime.now()

# variables to make implementing easier in future
ETH_WALLET_PRIVATE_KEY = os.getenv("ETH_WALLET_PRIVATE_KEY")
NFT_COLLECTION_ADDRESS = os.getenv("NFT_COLLECTION_ADDRESS")
sdk = ThirdwebSDK.from_private_key(ETH_WALLET_PRIVATE_KEY, "goerli")
nft_collection = sdk.get_nft_collection(NFT_COLLECTION_ADDRESS)

# Dhruv's private key: 548d987e883fd3c9cb861a893e430b48145d0344c68a92c1a137420cffc1c002
# Dhruv's collection address: 0xB789Db80d12d28586564a1d2a42eE679f47b2eeB
# Adi's private key: 2d69642fc9b97c1db045b87b4b0f865251caa1c3737b052a08b395a6f0e62ce4
# Adi's collection address: 0xda8E1288395bfCb615e1a98D410d033D8AF3164D

#generate object returned is a python generator
for i in range(int(numImgs)):
    # Generate image using user prompt as argument
    answers = stability_api.generate(prompt = prompt, seed = random.randrange(0, 99999))
    
    for resp in answers:
            for artifact in resp.artifacts:
                #Filtering for NSFW content
                if artifact.finish_reason == generation.FILTER:
                    warnings.warn("Your request activated the API's satey filters and could not be process, change it and try again")
                    
                #if image passes filter it will display
                if artifact.type == generation.ARTIFACT_IMAGE:
                    img = Image.open(io.BytesIO(artifact.binary))
                    img.save(f"({str(i+1)}){prompt}.png")

    nft_name = f"({str(i+1)}){prompt}"
    description = "n/a"
    imgPath = f"({str(i+1)}){prompt}.png"
    nft_collection.mint(NFTMetadataInput.from_json({ "name": nft_name, "description": description, "image": imgPath}))

