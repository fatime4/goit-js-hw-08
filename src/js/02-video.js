import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {};

player.on('play', onPlay);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
