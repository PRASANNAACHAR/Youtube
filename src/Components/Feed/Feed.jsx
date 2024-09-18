import React from 'react';
import './Feed.css';
import {Link} from 'react-router-dom';

import thumbnail1 from '../../../src/assets/thumbnail1.png';
import thumbnail2 from '../../../src/assets/thumbnail2.png';
import thumbnail3 from '../../../src/assets/thumbnail3.png';
import thumbnail4 from '../../../src/assets/thumbnail4.png';
import thumbnail5 from '../../../src/assets/thumbnail5.png';
import thumbnail6 from '../../../src/assets/thumbnail6.png';
import thumbnail7 from '../../../src/assets/thumbnail7.png';
import thumbnail8 from '../../../src/assets/thumbnail8.png';


const Feed = () => {
  return (   
    <div className="feed">
        <Link to={`video/20/4521`} className='card'>
       <img src={thumbnail1} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
        </Link>

        <div className='card'>
       <img src={thumbnail2} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail3} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail4} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail5} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail6} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail7} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail8} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>

       <div className='card'>
       <img src={thumbnail1} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail2} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail3} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail4} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail5} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail6} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail7} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
        <div className='card'>
       <img src={thumbnail8} alt="" />
       <h2>Best channel to learn coding that help you to be a web developer</h2>
       <h3>greate stack</h3>
       <p>15k views &bull; 2days ago</p>
      </div>
    </div>
    // amel h2 ans h3 p tag al erodana change madbhudu namge easta bandid youtube channel name haki
  )
}

export default Feed;