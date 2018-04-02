import React from 'react';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom'
import Body from './body'
import Conclusion from './conclusion'
import Header from './header'
import Intro from './intro'

import './style.css';

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Body />
      <Conclusion />
    </div>
  )
}
