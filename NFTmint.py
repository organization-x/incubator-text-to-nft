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
import google.cloud.storage

def uploadFileToBucket(serviceAcctFile, bucket_name, blob_name, fileToUpload):
    storage_client = google.cloud.storage.Client.from_service_account_json(serviceAcctFile)
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(blob_name)
    blob.upload_from_filename(fileToUpload)

DREAM_STUDIO_API_KEY = os.getenv("DREAM_STUDIO_API_KEY")
URL_BEGINNING = "https://storage.googleapis.com/"
ETH_WALLET_PRIVATE_KEY = os.getenv("ETH_WALLET_PRIVATE_KEY")
NFT_COLLECTION_ADDRESS = os.getenv("NFT_COLLECTION_ADDRESS")
sdk = ThirdwebSDK.from_private_key(ETH_WALLET_PRIVATE_KEY, "goerli")
nft_collection = sdk.get_nft_collection(NFT_COLLECTION_ADDRESS)
SERVICE_ACCT_JSON_FILE = os.getenv("SERVICE_ACCT_JSON_FILE")
BUCKET_NAME = os.getenv("BUCKET_NAME")

stability_api = client.StabilityInference(key = DREAM_STUDIO_API_KEY, verbose=True,)

prompt = input('What do you want Text to NFT to draw? ')
numImgs = input("How many images would you like? ")

#generate object returned is a python generator
for i in range(int(numImgs)):
    # Generate image using user prompt as argument
    answers = stability_api.generate(prompt = prompt, seed = random.randrange(0, 99999))
    prompt = prompt.replace(" ", "")
    
    for resp in answers:
            for artifact in resp.artifacts:
                #Filtering for NSFW content
                if artifact.finish_reason == generation.FILTER:
                    warnings.warn("Your request activated the API's satey filters and could not be process, change it and try again")
                    
                #if image passes filter it will display
                if artifact.type == generation.ARTIFACT_IMAGE:
                    img = Image.open(io.BytesIO(artifact.binary))
                    img.save(f"({str(i+1)}){prompt}.png")
    
    imgName = f"({str(i+1)}){prompt}.png"
    imgPath = f"({str(i+1)}){prompt}.png"
    # Uploads file to GCP storage bucket
    uploadFileToBucket(SERVICE_ACCT_JSON_FILE, BUCKET_NAME, imgName, imgPath)
    imgUrlWithoutSpaces = f"{URL_BEGINNING}{BUCKET_NAME}/{imgPath}"
    print(imgUrlWithoutSpaces)
    description = "n/a"
    
    # Mints image url to collection address
    nft_collection.mint(NFTMetadataInput.from_json({ "name": imgName, "description": description, "image": imgUrlWithoutSpaces}))