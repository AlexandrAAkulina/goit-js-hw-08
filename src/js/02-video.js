import Player from '@vimeo/player';
import { throttle } from 'lodash';


const iframe = document.querySelector('#vimeo-player');
const key = 'videoplayer-current-time';
const player = new Vimeo.Player(iframe);

    const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);
