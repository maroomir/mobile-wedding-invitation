import styled from "@emotion/styled";

const Video = ({ videoFile }: { videoFile: string }) => {
  return (
    <Wrapper>
      <video
        src={videoFile}
        controls
        playsInline
        autoPlay={false}
        muted={false}
      />
    </Wrapper>
  )
}

export default Video;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 20px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
