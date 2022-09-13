import type { NextPage } from 'next'
import NavBar from '../components/NavBar'
import HeroIndexDisconected from '../components/HeroIndexDisconected'
import HeroIndexConnected from '../components/HeroIndexConnected'

import { useWallet } from '@solana/wallet-adapter-react'

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div className='container mx-auto'>
      <NavBar />
      {connected ? <HeroIndexConnected /> : <HeroIndexDisconected />}
    </div>
  )
}

export default Home
