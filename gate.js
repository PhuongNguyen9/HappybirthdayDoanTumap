/* Birthday Quest 28 — romantic interface gate.
   This is a front-end experience gate, NOT real access security.
   Change GATE_PASSWORD before publishing if you want a different passphrase.
*/
(() => {
  const GATE_PASSWORD = 'bomap'; // Default passphrase; change this value if desired.
  const STORAGE_KEY = 'birthdayQuest28GateUnlocked';
  const overlay = document.getElementById('birthdayGate');
  if (!overlay) return;

  const form = document.getElementById('birthdayGateForm');
  const input = document.getElementById('birthdayGatePassword');
  const message = document.getElementById('birthdayGateMessage');
  const button = document.getElementById('birthdayGateSubmit');
  const pageAudio = [...document.querySelectorAll('audio')];
  const wasPlaying = new Map();

  const lockAudio = () => pageAudio.forEach(audio => {
    wasPlaying.set(audio, !audio.paused);
    audio.pause();
  });

  // The password submit is a real user gesture. On mobile browsers this is
  // the first reliable moment to start audible playback after autoplay is blocked.
  const unlockAudio = () => pageAudio.forEach(audio => {
    const isMainSoundtrack = audio.id === 'soundtrack';
    const userHasNotMutedMusic = sessionStorage.getItem('birthdayMainMusicPlaying') !== 'no';
    const shouldResume = wasPlaying.get(audio) || audio.hasAttribute('autoplay') ||
      (isMainSoundtrack && userHasNotMutedMusic);

    if (!shouldResume) return;

    const playback = audio.play();
    if (isMainSoundtrack && playback && typeof playback.then === 'function') {
      playback.then(() => {
        sessionStorage.setItem('birthdayMainMusicPlaying', 'yes');
        const musicButton = document.getElementById('musicBtn');
        if (musicButton) musicButton.innerHTML = '♫ <span>Tắt nhạc</span>';
      }).catch(() => {
        const musicButton = document.getElementById('musicBtn');
        if (musicButton) musicButton.innerHTML = '♫ <span>Chạm để nghe nhạc</span>';
      });
    } else if (playback && typeof playback.catch === 'function') {
      playback.catch(() => {});
    }
  });

  const openGate = () => {
    overlay.classList.add('gate-is-opening');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('birthday-gate-locked');
    sessionStorage.setItem(STORAGE_KEY, 'yes');
    window.setTimeout(() => overlay.remove(), 750);
    unlockAudio();
  };

  if (sessionStorage.getItem(STORAGE_KEY) === 'yes') {
    overlay.remove();
    document.body.classList.remove('birthday-gate-locked');
    return;
  }

  document.body.classList.add('birthday-gate-locked');
  lockAudio();
  window.setTimeout(() => input.focus(), 120);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const attempt = input.value.trim().toLocaleLowerCase('vi');
    if (attempt === GATE_PASSWORD.toLocaleLowerCase('vi')) {
      message.textContent = 'Mật mã chính xác. Chào mừng anh trở về với thế giới nhỏ của chúng mình. ♡';
      message.classList.add('gate-success');
      button.disabled = true;
      openGate();
    } else {
      message.textContent = 'Chưa đúng rồi. Thử lại nhé, người giữ chiếc chìa khóa bí mật. ♡';
      message.classList.remove('gate-success');
      input.select();
    }
  });
  window.addEventListener('pageshow', () => {
    if (sessionStorage.getItem(STORAGE_KEY) !== 'yes') lockAudio();
  });
})();
