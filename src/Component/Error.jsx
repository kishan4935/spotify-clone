import { Player } from "@lottiefiles/react-lottie-player";
import errorAnimation from '../assets/error.json'

const Error = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="w-96">
          <Player src={errorAnimation} loop autoplay />
        </div>
      </div>
    );
}

export default Error;