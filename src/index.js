'use-strict'

import './style.css';
import Image from './assets/images/image.jpg';

const p = document.createElement('p');
p.textContent = 'Hello from webpack!';
document.body.append(p);

const myImage = document.createElement('img');
myImage.src = Image;
document.body.append(myImage);