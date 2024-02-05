document.addEventListener('keypress', onKeyPress);

let Stream1 = [];
let Stream2 = [];
let Stream3 = [];
let Stream4 = [];

let activeStream = Stream1;

const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2'),
    'd': document.querySelector('#s3'),
    'f': document.querySelector('#s4'),
    'g': document.querySelector('#s5'),
    'h': document.querySelector('#s6'),
    'j': document.querySelector('#s7'),
    'k': document.querySelector('#s8'),
    'l': document.querySelector('#s9'),
}

function switchStream(streamNumber) {
  switch (streamNumber) {
    case 2:
      activeStream = Stream2;
      resetColors();
      document.querySelector('#k2').style.color = '#DAA520';
      break;
    case 3:
      activeStream = Stream3;
      resetColors();
      document.querySelector('#k3').style.color = '#DAA520';
      break;
    case 4:
      activeStream = Stream4;
      resetColors();
      document.querySelector('#k4').style.color = '#DAA520';
      break;
    default:
      activeStream = Stream1;
      resetColors();
      document.querySelector('#k1').style.color = '#DAA520';
      break;
  }
}

function onKeyPress(event) {
    const sound = KeyToSound[event.key]
    playSound(sound);
    addToStream(activeStream, sound);
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function addToStream(activeStream, sound) {
  activeStream.push(sound);
}

function playStream(streamNumber) {
  switch (streamNumber) {
    case 2:
      streamThis(Stream2);
      break;
    case 3:
      streamThis(Stream3);
      break;
    case 4:
      streamThis(Stream4);
      break;
    default:
      streamThis(Stream1);
      break;
  }
}
function playAll() {
  streamThis(Stream1);
  streamThis(Stream2);
  streamThis(Stream3);
  streamThis(Stream4);
}

function streamThis(stream) {
  stream.forEach((sound, space) => {
    setTimeout(() => {
      playSound(sound);
    }, space * 500);
  });
}

function cleanStream(streamNumber) {
  switch (streamNumber) {
    case 2:
      Stream2 = [];
      break;
    case 3:
      Stream3 = [];
      break;
    case 4:
      Stream4 = [];
      break;
    default:
      Stream1 = [];
      break;
  }
}

function cleanAll() {
  Stream1 = [];
  Stream2 = [];
  Stream3 = [];
  Stream4 = [];
}

function resetColors() {
  document.querySelector('#k1').style.color = 'black';
  document.querySelector('#k2').style.color = 'black';
  document.querySelector('#k3').style.color = 'black';
  document.querySelector('#k4').style.color = 'black';
}
