import "./Video.css";

function Video() {
  return (
    <video class="container-video" loop autoPlay muted>
      <source src="./VideoPaolo.mp4" type="video/mp4" class="video-principal" />
    </video>
  );
}

export default Video;
