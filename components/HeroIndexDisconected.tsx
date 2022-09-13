import { FC, MouseEventHandler, useCallback } from "react";
import {useWalletModal} from '@solana/wallet-adapter-react-ui'
import {useWallet} from '@solana/wallet-adapter-react'

const HeroIndexDisconected: FC = () => {
    const modalState = useWalletModal()
    const {wallet, connect} = useWallet()

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) => {
            if(event.defaultPrevented) return

            if(!wallet){
                modalState.setVisible(true)
            } else {
                connect().catch(() => {})
            }
        },
        [wallet, connect, modalState]
    )

    return (
        <header className="hero min-h-screen bg-base-200" style={{backgroundImage: `url(/hero_index_bg.png)`}}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Silly Figures</h1>
                <p className="py-6">Mint silly geometric figures full of color</p>
                <button 
                    className="btn btn-primary btn-wide"
                    onClick={handleClick}>
                        Connect your wallet!
                </button>
                {/* TODO: Add rendering condition when wallet connected */}
                </div>
            </div>
        </header>
    )
}

export default HeroIndexDisconected