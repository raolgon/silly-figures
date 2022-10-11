import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { NextPage } from "next";
import { MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";

const NewMint: NextPage<NewMintProps> = ({mint}) => {
    const [metadata, setMetadata] = useState<any>()
    const {connection} = useConnection()
    const walletAdapter = useWallet()
    const metaplex = useMemo(() => {
        return Metaplex.make(connection).use(walletAdapterIdentity(walletAdapter))
    }, [connection, walletAdapter])

    useEffect(() => {
        metaplex
        .nfts()
        .findByMint({mintAddress: mint})
        .run()
        .then((nft) => {
            fetch(nft.uri)
                .then((res) => res.json())
                .then((metadata) => {
                    setMetadata(metadata)
                })
        })

    }, [mint, metadata, walletAdapter])

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        async (event) => {
            
        },
        []
    )

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">A new figure lover appears</h1>
                <img src={metadata?.image ?? ""} alt="Figure you just mint" />
                <p className="py-6">Congratulations, you minted a lvl 1 figure!<br/>
                    Time to stake your figure!               
                </p>
                <button 
                    className="btn btn-primary btn-wide"
                    onClick={handleClick}>
                        Stake my figure!
                </button>
                </div>
            </div>
        </div>
    )
}

interface NewMintProps {
    mint: web3.PublicKey
}

NewMint.getInitialProps = async({query}) => {
    const {mint} = query

    if(!mint) throw {error: "no mint"}

    try {
        const mintPubkey = new web3.PublicKey(mint)
        return {mint: mintPubkey}
    } catch (error) {
        throw {error: "invalid mint"}
    }
}

export default NewMint