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
  const unlockAudio = () => pageAudio.forEach(audio => {
    if (wasPlaying.get(audio) || audio.hasAttribute('autoplay')) {
      audio.play().catch(() => {});
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
