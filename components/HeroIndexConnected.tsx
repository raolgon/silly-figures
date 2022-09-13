import { FC } from "react";

const HeroIndexConnected: FC = () => {

    return (
        <header className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome buildor!</h1>
                    <p className="py-6">
                        Each figure is ramdonly generated and can be stacked woth $BLD.
                        <br />
                        Use your $BLD to upgrade your figure and get perks within the community
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                        <img src="fig_1.png" alt="Figure 1" />
                        <img src="fig_2.png" alt="Figure 2" />
                        <img src="fig_3.png" alt="Figure 3" />
                        <img src="fig_4.png" alt="Figure 4" />
                        <img src="fig_5.png" alt="Figure 5" />
                    </div>
                    <button className="btn btn-primary btn-wide">
                        Mint figure!
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HeroIndexConnected