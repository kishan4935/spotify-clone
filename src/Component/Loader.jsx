import { Player } from "@lottiefiles/react-lottie-player";

import loadingAnimation from "../assets/loading.json"

const Loader = () => {
    return <div className="w-32 h-32">
        <Player src={loadingAnimation} className="player" loop autoplay />
    </div>
};

export default Loader;