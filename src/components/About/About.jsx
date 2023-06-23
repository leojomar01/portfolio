import React from 'react';
import './about.scss'

function About() {
  return (
    <div>
      <div id="scene">
<div class="background layer" data-depth="0.20">
  <img src="http://sun-surfer.com/photos/2013/03/Cobblestone-Street-Alsace-France.jpg"/>
</div>
<div class="links layer" data-depth="0.80">
  <ul>
    <li class="hexagon" id="home">
      <a href="#">
        <svg version="1.1" viewBox="0 0 600 516.8">
          <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
        </svg>
        <span>Home</span>
      </a>
    </li>
    <li class="hexagon dropdown" id="about">
      <a href="#">
        <svg version="1.1" viewBox="0 0 600 516.8">
          <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
        </svg>
        <span>About</span>
      </a>
      <ul class="sub-nav">
          <li>
            <a href="#">The Artist</a>
          </li>
          <li>
            <a href="#">The Work</a>
          </li>
        </ul>
    </li>
    <li class="hexagon dropdown" id="contact">
      <a href="#">
        <svg version="1.1" viewBox="0 0 600 516.8">
          <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
        </svg>
        <span>Contact</span>
      </a>
      <ul class="sub-nav">
        <li>
          <a href="#">E-mail</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Dribbble</a>
        </li>
        <li>
          <a href="#">Codepen</a>
        </li>
      </ul>
    </li>
    <li class="hexagon dropdown" id="work">
      <a href="#">
        <svg version="1.1" viewBox="0 0 600 516.8">
          <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
        </svg>

        <span>Work</span>
      </a>
      <ul class="sub-nav">
        <li>
          <a href="#">Print</a>
        </li>
        <li>
          <a href="#">Design</a>
        </li>
        <li>
          <a href="#">Code</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
</div>
    </div>
  )
}

export default About