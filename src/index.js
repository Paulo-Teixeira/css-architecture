import _ from 'lodash';
import './style.css';
import Shuttle from './shuttle.png';

function component() {
  let element = document.createElement("div");

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Shuttle;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
