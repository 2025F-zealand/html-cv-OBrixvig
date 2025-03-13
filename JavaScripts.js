
// Dark mode funktionalitet
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Tjek for gemt tema ved sideload
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Projektmodal funktionalitet
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const projectId = link.getAttribute('data-project');
    modalContent.innerHTML = `<h2>Projekt ${projectId}</h2><p>Her er en beskrivelse af projekt ${projectId}.</p>`;
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});