import { FC } from "react";
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'

const NavBar: FC = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Silly figures</a>
            </div>
            <div className="flex-none">
                <WalletMultiButton />
            </div>
        </div>
    )
}

export default NavBar