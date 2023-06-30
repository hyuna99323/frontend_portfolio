import React from 'react';
import Navigation from './Navigation';
import '../../style/Header.scss';

export default function Header() {
  return (
    <header id="headBox">
      <div class="headinner">
        <h1>
          <button onclick="home()">hyuna<br />portfolio</button>
        </h1>
        <Navigation />
      </div>
    </header>
  )
}
