const thumbnails = document.querySelectorAll('.image-thumbnail');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const modalDesc = document.getElementById('image-description');
const closeModal = document.getElementById('close-modal');
// Pega o botão
const scrollTopBtn = document.getElementById('scroll-top-btn');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalDesc.textContent = img.dataset.description || '';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });



// Função de rolagem para o topo
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });  // Rolagem suave para o topo
});





