import React from 'react';
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import './styles.css';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Render function for Prismic headless CMS pages
function Home() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState(
    'https://www.youtube.com/watch?v=27RIBITR23A'
  );
  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.split('v=')[1].split('&')[0];
  }

  const checkElapsedTime = (e) => {
    console.log(e.target.playerInfo.playerState);
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime / duration > 0.95) {
      setModalIsOpen(true);
    }
  };

  const opts = {
    height: '900px',
    width: '2000px',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleExerciseComplete = () => console.log('Do something');

  return (
    <div>
      <div>
        <h1>Youtube Video</h1>
      </div>
      <div>
        <div>
          <YouTube
            videoId={videoCode}
            containerClassName="embed embed-youtube"
            onStateChange={(e) => checkElapsedTime(e)}
            opts={opts}
          />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Play Video"
        style={modalStyles}
      >
        <div>
          <h3>Play Video</h3>
          <button onClick={handleExerciseComplete}>Play Video</button>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
