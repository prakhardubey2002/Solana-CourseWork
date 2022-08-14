import { Keypair, Connection } from "@solana/web3.js";
import { createMint } from "@solana/spl-token";

(async () => {
    const keypair = Keypair.fromSecretKey(
        Uint8Array.from(
            [174,48,40,217,136,176,40,203,255,143,187,220,53,78,198,230,116,200,250,84,119,161,170,216,191,239,237,225,184,208,25,210,206,67,100,216,60,129,81,189,172,254,68,7,232,190,159,141,170,47,211,224,148,110,49,89,32,82,146,18,49,93,169,89]
        )
    );
    console.log(keypair.publicKey.toBase58());
    const connection = new Connection("http://localhost:8899");//solana-test-validator to establish local connection
    // await connection.requestAirdrop(keypair.publicKey, 1e9);//(1e9= 1billion lamports/1SOL);
    const mint_address = await createMint(connection,
        keypair,
        keypair.publicKey,
        keypair.publicKey,
        2,
        Keypair.fromSecretKey(
            Uint8Array.from([218, 85, 155, 92, 218, 47, 255, 145, 233, 104, 188, 90, 96, 250, 94, 232, 131, 186, 1, 85, 116, 197, 115, 238, 41, 39, 182, 54, 164, 112, 87, 106, 142, 150, 150, 181, 1, 214, 225, 191, 5, 133, 87, 190, 83, 64, 223, 7, 112, 23, 163, 175, 221, 244, 176, 170, 167, 163, 89, 29, 72, 42, 245, 49
            ])
        )
    );
    console.log(mint_address.publicKey);
})();
        //createmint
        /**
 * Create and initialize a new mint
 *
 * param connection      Connection to use
 * param payer           Payer of the transaction and initialization fees
 * param mintAuthority   Account or multisig that will control minting
 * param freezeAuthority Optional account or multisig that can freeze token accounts
 * param decimals        Location of the decimal place
 * param keypair         Optional keypair, defaulting to a new random one
 * param confirmOptions  Options for confirming the transaction
 * param programId       SPL Token program account
 *
 * return Address of the new mint
 */