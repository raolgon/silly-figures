import { FC, ReactNode } from "react";
import NavBar from '../components/NavBar'

const MainLayout: FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className='container mx-auto'>
            <NavBar />
            {children}

            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Made with the help of BuildSpace!</p>
                </div>
            </footer>
        </div>
    )
}

export default MainLayout