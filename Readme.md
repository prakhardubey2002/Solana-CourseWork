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


 [Note:In Solana web3js add "type":"module"  