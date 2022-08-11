import {  Connection,Keypair,LAMPORTS_PER_SOL } from "@solana/web3.js";
import bs58 from "bs58";


const connection = new Connection("https://api.devnet.solana.com");

const keypair = Keypair.fromSecretKey(
    bs58.decode(
        ""////get it from phantom wallet export private key option
    )
);
(async ()=>{
    let airdrop = await connection.requestAirdrop(keypair.publicKey,1e9);
    console.log(`txhash ${airdrop}`);
})();