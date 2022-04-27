/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #392B58;
    color: #99D5C9;
    font-family: 'Oxanium', monospace;
  }

  header {
    background-color: #2d0320;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 5em;
  }

  h1 {
    bottom: 0.25em;
    font-size: 3em;
    position: relative;
  }

  nav {
    display: flex;
    flex-direction: row;
    font-size: 1.5em;
    justify-content: space-between;
    position: relative;
    margin-top: 1.5em;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  footer {
    background-color: #2d0320;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 5em;
  }

  .nav-item {
    margin: 0.5vw;
  }

  .album-art {
    border: thick solid black;
    height: 25em;
    margin: 5em;
    width: 25em;
  }

  .track-list {
    border: thick solid black;
    height: 25em;
    margin: 5em;
    width: 15em;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Kuvu</h1>
        <nav>
          <div className="nav-item">select album</div>
          <div className="nav-item">socials</div>
          <div className="nav-item">listen</div>
        </nav>
      </header>

      <main>
        <div className="album-art">
          Big Square Album Art here
        </div>

        <div className="track-list">
          Big rectangle tracklist here
        </div>
      </main>


      <footer className="music-player">
        music player
      </footer>
    </>
  );
}

export default App;
