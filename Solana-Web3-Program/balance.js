import {  Connection,Keypair,LAMPORTS_PER_SOL } from "@solana/web3.js";
import bs58 from "bs58";


const connection = new Connection("https://api.devnet.solana.com");

const feePayer = Keypair.fromSecretKey(
    bs58.decode(
        ""//get it from phantom wallet export private key option
    )
);
(async ()=>{
    let balance = await connection.getBalance(feePayer.publicKey);
    console.log(`${balance/LAMPORTS_PER_SOL} SOL`);
})();