import ReactPlayer from "react-player";
import "./Video.css";

function Video() {
  return (
    <div className="container-video">
      <ReactPlayer
        url={"./VideoPaolo.mp4"}
        playing
        loop
        width="100%"
        height="50%"
        muted
        playsinline
      />
    </div>

    // <video className="container-video" loop autoPlay muted>
    //   <source
    //     src="./VideoPaolo.mp4"
    //     type="video/mp4"
    //     className="video-principal"
    //   />
    // </video>
  );
}

export default Video;
