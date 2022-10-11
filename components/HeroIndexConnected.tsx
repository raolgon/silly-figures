import { FC, MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import { PublicKey} from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Metaplex, walletAdapterIdentity, CandyMachine } from "@metaplex-foundation/js";
import { useRouter } from "next/router";

const HeroIndexConnected: FC = () => {

    const {connection} = useConnection()
    const walletAdapter = useWallet()
    const [candyMachine, setCandyMachine] = useState<CandyMachine>()
    const [isMinting, setIsMinting] = useState(false)

    const metaplex = useMemo(() => {
        return Metaplex.make(connection).use(walletAdapterIdentity(walletAdapter))
    }, [connection, walletAdapter])

    useEffect(() => {
        if(!metaplex) return

        metaplex
            .candyMachines()
            .findByAddress({
                address: new PublicKey("2GzDjDfRUtajiaFvVfsx1j88aopFTge6qdc6vdWBJqFL")
            })
            .run()
            .then((candyMachine) => {
                console.log(candyMachine)
                setCandyMachine(candyMachine)
            })
            .catch((error) => {
                alert(error)
        })
    }, [metaplex])

    const router = useRouter()

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        async (event) => {
            if(event.defaultPrevented) return

            if(!walletAdapter.connected || !candyMachine){
                return
            }

            try {
                setIsMinting(true)

                const nft = await metaplex.candyMachines().mint({candyMachine}).run()

                setIsMinting(false)

                console.log(nft)
                router.push(`/newMint?mint=${nft.nft.address.toBase58()}`)
            } catch (error) {
                alert(error)
            } finally {
                setIsMinting(false)
            }
        },
        [metaplex, walletAdapter, candyMachine]
    )

    return (
        <header className="hero min-h-screen bg-base-200" style={{backgroundImage: `url(/hero_index_bg.png)`}}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome buildor!</h1>
                    <p className="py-6">
                        Each figure is ramdonly generated and can be stacked woth $SF.
                        <br />
                        Use your $SF to upgrade your figure and get perks within the community
                    </p>
                    {!isMinting
                        ? <button className="btn btn-primary btn-wide" onClick={handleClick}> Mint figure! </button>
                        : <button className="btn loading">Minting!</button>
                    }
                </div>
            </div>
        </header>
    )
}

export default HeroIndexConnected