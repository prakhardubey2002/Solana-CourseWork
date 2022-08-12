# Solana
Solana is fast(tps  ~65000) scalable chain with low fees solana ($SOL) is native currency of solana chain  and is made 1 billion (10^9)lamport(Lamport is named after lesslie lamport who recieved Turing award for work in 2013 for his work on distributed system )
#### Proof of Work 
If work is submitted then transaction to blockchain it has to be propagated  to majority of nodes to come to consesus and processed to be added to blockchain ,its  a consesus mechanism  and primary reason ETH and BTC are slow because propagation  stuff in decentralised nodes is not easy 

#### Proof of History

Proof of History (PoH) is a method of incorporating time itself into the blockchain, attempting to reduce the load on network nodes while processing blocks. also Proof of history is not a consesus mechanism it just allow timestamp everything that happen in blockchain,Every transaction when seen in solana explorer will have timestamp attribute for it

#### Practical Byzantine fault Tolerance
Solana implements a derivation of PBFT, but with one fundamental difference. Proof of History (PoH) provides a global source of time before consensus. Our implementation of PBFT uses the PoH as the network clock of time, and the exponentially-increasing time-outs that replicas use in PBFT can be computed and enforced in the PoH itself.PoH is a Verifiable Delay Function implemented as a sequential hash function. We use a loose definition of a VDF, since verification requires (compute time)/(number of cores)

## Installation
Solana Development is based on Linux! mac is fine but for window one has to use wsl
```bash
wsl --install
```
after this choose distro of your liking
```bash
wsl.exe --install -d <Distribution Name>
```
For window subsytem linux
###### Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustc --version
cargo --version
```
###### Solana
```bash
sh -c "$(curl -sSfL https://release.solana.com/v1.10.32/install)"
solana --version
```

#### Accounts
In Solana,codeand data are seperated,program (Smart contract) are stateless,
and thier state/data is stored on seprate account more simply they can be called account
These account/buffer need to pay rent to exist on blockchain if an account has 2 year worth of rent in it, It will be rent exempt.
#### Owner 
It's also called "Assigned Program Id"
 Every account has ownner program that contain underlying executable code that was used to create and can be called to modify the respective account.
 The default account owner is System Program
 The default token owner is Token Program
 (Address -TokenKeq RTyuFgwicTYMNtFwsmdHHh... on devent/mainnet/testnet )ets
 Data Structure of Account Info
 ```Rust
 pub struct AccountInfo<'a> {
    pub key: &'a Pubkey,
    pub is_signer: bool,
    pub is_writable: bool,
    pub lamports: Rc<RefCell<&'a mut u64>>,
    pub data: Rc<RefCell<&'a mut [u8]>>,
    pub owner: &'a Pubkey,
    pub executable: bool,
    pub rent_epoch: Epoch,
}
 ```
 #### Types of account 
 1.Data Account: Stores normal data,that can be serialised using borsh 
 2.Program Account: Stores executable data/code
### SolanaPy
python library to play with solana,installation:
```bash
pip3 install solana
```
pip3 is for wsl/linux distribution
 [Note:In Solana web3js add "type":"module"  to avoid error]
 if using local rpc for solana py program launch validator by
 ```bash
 solana-test-validator
 ```
 this validator open on localhost:8899

 Simple solanPy grogram for keypay generation
 ```python
 import solana
from solana.rpc.api import Client
http_client = Client("http://localhost:8899")
from solana.keypair import Keypair
Keypair = Keypair.generate()
print(Keypair.public_key)
print(Keypair.secret_key)
```
```bash
python3 main.py
```
Output:
```bash
E6BX7o3HLRzSs3pXYrAg5B2DoM2YSTWmJCjss4tZRkiE
b']\x8b\xa8\x0b7e+]\xcb,\xdfp\xf3\x82\t\xf7\x07a\x9a\xc7\x9c\x1b\xe4Cl\x02!H~_\x99\x01\xc2{\xban\xde=GU\x91,\x95\x03t\xfc\x1f\x1c\xd7\xc6\x06\xbep\xe7R\x82\xe11\xcfB2{\xcc\xc3'
```


## Solana CLI
For list of command
```bash
solana --help
``` 
For listing available data of wallet using public key
```bash
solana account <Public key>
``` 

```bash
Public Key: <Public key>
Balance: 4.12567404 SOL
Owner: 11111111111111111111111111111111
Executable: false
Rent Epoch: 357
```
Command to List RPC to which wallet point
```bash
solana config get
```
output
```bash
Config File: /home/------/li/config.yml
RPC URL: https://api.devnet.solana.com
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: /home/--------/devnettest.json
Commitment: confirmed
```
Command to switch between mainnet,devnet,tex=stnet
```bash
solana config --url set <url>/https://api.devnet.solana.com/https://api.testnet.solana.com
```
Airdrop command(Only work in devnet and testnet)
```bash
solana balance
solana airdrop 1
solana balance
```
TO see all avialbe system and gossip and rpc
```bash
solana gossip
```
To see solana transaction logs
```bash
solana logs
```
Solana deploy and show programs command
```bash
solana program
```
```bash
solana program shoW <ADDRESS>
```
SOL transfer command
```bash
solana transfer <public address> <amount>
solana transfer 7vNuzfsocjijdiojvndovidhvhdihvd 1
```