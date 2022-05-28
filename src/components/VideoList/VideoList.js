import VideoItem from "./VideoItem";
import './VideoList.scss';

const VideoList = ({ videos }) => {

  const renderVideoItems = () => {
    return videos.map(video => {
      return (
        <VideoItem
          key = {video.id}
          {...video}
        />
      )
    })
  }

  return ( 
    <section className="video-list">
      <h3 className="video-list__title">NEXT VIDEOS</h3>
      <ul className='video-list__container'>
        {renderVideoItems()}
      </ul>
    </section>
   );
}
 
export default VideoList;