import React from 'react';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom'

import './style.css';
import video from '../../video/stock_video.mp4'

export default function Header() {
  return (
      <div className="Home-header row no-gutters">
        <div className="col-sm">
          <video autoPlay loop src={video}></video>
        </div>
      </div>
  )
}
