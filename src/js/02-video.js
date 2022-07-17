import Player from '@vimeo/player';
import _ from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storageKey = 'videoplayer-current-time';

const saveCurrentTime = function (data) {
  const timeUpdateSec = localStorage.setItem(
    storageKey,
    JSON.stringify(data.seconds)
  );
};

// player.on('timeupdate', _.throttle(saveCurrentTime, 1000));

player.on('timeupdate', saveCurrentTime);

const videoCurrentTime = localStorage.getItem(storageKey);

if (videoCurrentTime) {
  player.setCurrentTime(JSON.parse(videoCurrentTime));
}
