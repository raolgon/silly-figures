import { FC, ReactNode, useMemo } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets'
import {clusterApiUrl} from '@solana/web3.js'
require('@solana/wallet-adapter-react-ui/styles.css')

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const url = useMemo(() => clusterApiUrl('devnet'), [])
	const wallets = [
		new walletAdapterWallets.PhantomWalletAdapter(),
		new walletAdapterWallets.SolflareWalletAdapter()
	]

	return (
		<ConnectionProvider endpoint={url}>
			<WalletProvider wallets={wallets}>
				<WalletModalProvider>
					{children}
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	)
}

export default WalletContextProvider
