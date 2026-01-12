// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    // 1. Selección de elementos (Requisito técnico)
    const urlInput = document.getElementById('image-url');
    const addBtn = document.getElementById('add-btn');
    const deleteBtn = document.getElementById('delete-btn');
    const gallery = document.getElementById('gallery');
    const featured = document.getElementById('featured');

    // Función para agregar imagen
    function agregarImagen() {
        const url = urlInput.value.trim();
        
        if (url !== "") {
            // 2. createElement para nuevos elementos (Requisito técnico)
            const newImg = document.createElement('img');
            newImg.src = url;
            newImg.classList.add('thumbnail');
            newImg.alt = "Miniatura de galería";

            // 3. addEventListener para seleccionar con 'click'
            newImg.addEventListener('click', function() {
                // Parámetro: Solo una seleccionada a la vez
                document.querySelectorAll('.thumbnail').forEach(img => img.classList.remove('selected'));
                this.classList.add('selected'); // Resaltar con borde
                featured.src = this.src; // Cambiar imagen principal
            });

            gallery.appendChild(newImg);
            urlInput.value = ""; // Limpiar campo
        }
    }

    // Eventos de botones
    addBtn.addEventListener('click', agregarImagen);

    // 4. Parámetro: Eliminar imagen seleccionada
    deleteBtn.addEventListener('click', () => {
        const selected = document.querySelector('.thumbnail.selected');
        if (selected) {
            selected.remove();
            featured.src = "https://picsum.photos/800/500"; // Imagen por defecto
        } else {
            alert("Por favor, selecciona una imagen primero haciendo clic en ella.");
        }
    });

    // 5. Atajos de Teclado (keydown)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            agregarImagen();
        }
        if (e.key === 'Delete' || e.key === 'Backspace') {
            deleteBtn.click();
        }
    });
});