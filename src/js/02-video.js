import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import '../css/common.css';

const iframe = document.querySelector('#vimeo-player');
const key = 'videoplayer-current-time';
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(function(data) {
  localStorage.setItem(key, data.seconds);
}, 1000));

const storedTime = localStorage.getItem(key);
if (storedTime) {
  player.setCurrentTime(storedTime);
}

