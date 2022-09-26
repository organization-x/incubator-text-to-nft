from thirdweb import ThirdwebSDK
from thirdweb.types.nft import NFTMetadataInput
from eth_account import Account
from dotenv import load_dotenv
from web3 import Web3
import os
# variables to make implementing easier in future
PRIVATE_KEY = ""
sdk = ThirdwebSDK.from_private_key(PRIVATE_KEY, "goerli")
NFT_COLLECTION_ADDRESS = "0x78fA9B9C98240dd11F10a096846a5ba0cb51ab15"
nft_collection = sdk.get_nft_collection(NFT_COLLECTION_ADDRESS)
nft_name1 = "House1"
description1 = "A house"
image1 = "https://preview.redd.it/ye4i3o3b8sy81.jpg?width=640&crop=smart&auto=webp&s=c9d2769a47ef843efd4d54ff14f1f2aded360e8b"
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
# code to mint the NFTs
nft_collection.mint(NFTMetadataInput.from_json({ "name": nft_name1, "description": description1, "image": image1}))
nft_collection.mint(NFTMetadataInput.from_json({ "name": nft_name2, "description": description2, "image": image2}))
nft_collection.mint(NFTMetadataInput.from_json({ "name": nft_name3, "description": description3, "image": image3}))
nft_collection.mint(NFTMetadataInput.from_json({ "name": nft_name4, "description": description4, "image": image4}))
