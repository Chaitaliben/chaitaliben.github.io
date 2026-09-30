const copyButton = document.querySelector('#copy-email');
const status = document.querySelector('#copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('chaitalijani33@gmail.com');
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = 'Email: chaitalijani33@gmail.com';
  }
});

const resumeDialog = document.querySelector('#resume-dialog');
document.querySelector('#view-resume').addEventListener('click', (event) => { event.preventDefault(); resumeDialog.showModal(); });
document.querySelector('#close-resume').addEventListener('click', () => resumeDialog.close());
