// Theme toggle (light-on-glass vs deep glass)
const themeToggle = document.getElementById('themeToggle');
let lightMode = false;
themeToggle?.addEventListener('click', () => {
  lightMode = !lightMode;
  document.documentElement.style.setProperty('--bg1', lightMode ? '#f5f7ff' : '#0d0f1a');
  document.documentElement.style.setProperty('--bg2', lightMode ? '#dfe7ff' : '#1b1f3a');
  document.body.style.background = lightMode
    ? 'radial-gradient(1200px 800px at 10% 10%, #eef2ff 0%, #f5f7ff 60%)'
    : 'radial-gradient(1200px 800px at 10% 10%, #1e243f 0%, #0d0f1a 60%)';
});

// Contact form handler (demo)
function handleSubmit(e){
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  if(msg){
    msg.textContent = 'Thanks! Your message has been captured (demo only).';
  }
  e.target.reset();
}
