console.log('script enable!')

const forestBtn = document.getElementById('forestBtn');
const oceanBtn = document.getElementById('oceanBtn');
const rainBtn = document.getElementById('rainBtn');
const winterBtn = document.getElementById('winterBtn');
const mountainBtn = document.getElementById('mountainBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const background = document.getElementById('background');
const audioPlayer = document.getElementById('audioPlayer');



// Объект с данными для каждого состояния
const soundAndBackground = {
  forest: {
    backgroundImage: 'url("./assets/img/forest.jpg")',
    audioSrc: './assets/sounds/forest.mp3'
  },
  ocean: {
    backgroundImage: 'url("./assets/img/ocean.jpg")',
    audioSrc: './assets/sounds/ocean.mp3'
  },
  mountain: {
    backgroundImage: 'url("./assets/img/mountain.jpg")',
    audioSrc: './assets/sounds/meadow-crickets.mp3'
  },
  rain: {
    backgroundImage: 'url("./assets/img/rain.jpg")',
    audioSrc: './assets/sounds/rain.mp3'
  },
  winter: {
    backgroundImage: 'url("./assets/img/winter_forest.jpg")',
    audioSrc: './assets/sounds/winter_forest.mp3'
  }
};

// Функция для смены фона и звука
function changeBackgroundAndSound(type) {
  const { backgroundImage, audioSrc } = soundAndBackground[type];
  background.style.backgroundImage = backgroundImage;
  audioPlayer.src = audioSrc;
  playAudio();
}

// Функция для воспроизведения аудио
function playAudio() {
  audioPlayer.play();
  playPauseBtn.textContent = 'Pause';
}

// Функция для паузы аудио
function pauseAudio() {
  audioPlayer.pause();
  playPauseBtn.textContent = 'Play';
}

// Добавляем события на кнопки для изменения фона и звука
forestBtn.addEventListener('click', () => changeBackgroundAndSound('forest'));
oceanBtn.addEventListener('click', () => changeBackgroundAndSound('ocean'));
winterBtn.addEventListener('click', () => changeBackgroundAndSound('winter'));
mountainBtn.addEventListener('click', () => changeBackgroundAndSound('mountain'));
rainBtn.addEventListener('click', () => changeBackgroundAndSound('rain'));

// Добавляем событие на кнопку Play/Pause
playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
});


const volumeControl = document.getElementById('volumeControl');

// Обрабатываем изменение громкости
volumeControl.addEventListener('input', function() {
  audioPlayer.volume = this.value;
});
