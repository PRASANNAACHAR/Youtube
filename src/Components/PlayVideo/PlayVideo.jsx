import React from "react";
import './PlayVideo.css';

import video1 from '../../assets/video.mp4'
import like from '../../src/assets/like.png'
import dislike from '../../src/assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.png'

const PlayVideo = () => {
    return (
        <div className='play-video'>
             <video src={video1} ></video>
              <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
        </div>
    )
}

export default PlayVideo