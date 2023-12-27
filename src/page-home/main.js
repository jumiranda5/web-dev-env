'use-strict'

import '../styles/style.css';
import './styles/style.css';
import Image from '../assets/images/image.jpg';
import Image2 from '../assets/images/halie-unsplash.jpg';

const p = document.createElement('p');
p.textContent = 'Hello from webpack!';
document.body.append(p);

const myImage = document.createElement('img');
myImage.src = Image;
document.body.append(myImage);

const myImage2 = document.createElement('img');
myImage2.src = Image2;
document.body.append(myImage2);