import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';

import Data from './data.xml';
  console.log(Data);

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  // var myIcon = new Image();
  // element.appendChild(myIcon);
  // myIcon.src = Icon;

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);




  return element;
}

document.body.appendChild(component());