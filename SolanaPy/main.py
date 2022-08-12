import solana
from solana.rpc.api import Client
http_client = Client("http://localhost:8899")
from solana.keypair import Keypair
Keypair = Keypair.generate()
print(Keypair.public_key)
print(Keypair.secret_key)