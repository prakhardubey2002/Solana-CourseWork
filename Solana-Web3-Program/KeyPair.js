import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
(async () => {
    var keypair;
    // keypair =Keypair.generate();

    keypair = Keypair.fromSecretKey(
        bs58.decode(
            ""
        )
    )
    console.log(`Public Key- ${keypair.secretKey} `);
    console.log(`Public Key- ${keypair.publickey.toBase58()} `);
}
)();