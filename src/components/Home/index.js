import React from 'react';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom'
import Header from './header'
import Body from './body'
import Conclusion from './conclusion'

import './style.css';

export default function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Conclusion />
    </div>
  )
}
