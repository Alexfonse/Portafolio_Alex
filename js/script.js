let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
menuToggle.onclick = function () {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
};

const list = document.querySelectorAll('li');
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));

// Animación con delay antes de redirigir
list.forEach((item) => {
    const link = item.querySelector('a');
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita navegación inmediata
        const target = link.getAttribute('href'); // Obtén el destino

        // Aplica la animación
        link.classList.add('animate-click');

        // Redirige después de x segundos (tiempo de animación)
        setTimeout(() => {
            if (target.startsWith('#')) {
                document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = target;
            }
        }, 1000);
    });
});

// Seleccionamos las imágenes 3 y 4
const foto3 = document.querySelector('.foto_3');
const foto4 = document.querySelector('.foto_4');

// Función para añadir la clase normal cuando el mouse pasa por encima
function activarNormal() {
    foto3.classList.add('normal');
    foto4.classList.add('normal');
}

// Función para eliminar la clase normal cuando el mouse ya no está
function desactivarNormal() {
    foto3.classList.remove('normal');
    foto4.classList.remove('normal');
}

// Añadimos los eventos al marco de la foto
const marcoFoto = document.querySelector('.marco_foto');

marcoFoto.addEventListener('mouseenter', activarNormal);
marcoFoto.addEventListener('mouseleave', desactivarNormal);

// Obtiene todos los elementos de imagen
const images = document.querySelectorAll('.list img');

// Obtiene elementos del modal
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Añade un evento a cada imagen para abrir el modal
images.forEach((img) => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = img.src; // Asigna la fuente de la imagen seleccionada al modal
  });
});

// Cierra el modal cuando se hace clic en la "X"
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cierra el modal al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
