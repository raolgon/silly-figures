import type { NextPage } from 'next'
import HeroIndexDisconected from '../components/HeroIndexDisconected'
import HeroIndexConnected from '../components/HeroIndexConnected'
import MainLayout from '../components/MainLayout'

import { useWallet } from '@solana/wallet-adapter-react'

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div className='container mx-auto'>
      <MainLayout>
        {connected ? <HeroIndexConnected /> : <HeroIndexDisconected />}
      </MainLayout>
      
    </div>
  )
}

export default Home
