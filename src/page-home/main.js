'use-strict'

import '../styles/style.css';
import './styles/style.css';
import Image from './images/image.jpg';

const p = document.createElement('p');
p.textContent = 'Hello from webpack!';
document.body.append(p);

const myImage = document.createElement('img');
myImage.src = Image;
document.body.append(myImage);