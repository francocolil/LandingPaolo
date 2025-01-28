import "./Video.css";

function Video() {
  return (
    <video className="container-video" loop autoPlay muted>
      <source
        src="./VideoPaolo.mp4"
        type="video/mp4"
        className="video-principal"
      />
    </video>
  );
}

export default Video;
