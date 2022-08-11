import {  
    Connection,
    Keypair,
    Transaction,
    SystemProgram,
    PublicKey,
    LAMPORTS_PER_SOL } from "@solana/web3.js";
import bs58 from "bs58";
const connection = new Connection("https://api.devnet.solana.com");

const alice = Keypair.fromSecretKey(
    bs58.decode(
        ""//private key account 1
    )
);
const bob = Keypair.fromSecretKey(
    bs58.decode(
        ""//private key account 2
    )
);
(async ()=>{
    let tx =new Transaction().add(
        SystemProgram.transfer({
            fromPubkey:alice.publicKey,
            toPubkey:bob.publicKey,
            lamports:1*LAMPORTS_PER_SOL
        })
    );
    tx.feePayer=alice.publicKey;
    let txhash = await connection.sendTransaction(tx,[alice,bob]);
    console.log(`${txhash}`);
})();