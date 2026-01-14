class ImageGenerator {
    static currentSize = 'small';
    static currentResolution = '1';
    static currentStyle = 'realistic';

    static sizes = {
        small: { width: 768, height: 1344 },
        medium: { width: 1024, height: 1024 },
        large: { width: 1536, height: 640 }
    };

    static async generate() {
        console.log('Iniciando generación de imagen con el backend local...');
        const prompt = document.getElementById('prompt').value;
        const alternatives = parseInt(document.getElementById('alternatives').value);
        const preview = document.getElementById('preview');

        if (!prompt) {
            alert('Por favor, ingresa una descripción para la imagen.');
            return;
        }

        if (!alternatives || alternatives < 1 || alternatives > 6) {
            alert('Por favor, ingresa un número válido de alternativas (1-6).');
            return;
        }

        console.log('Configuración:', {
            prompt,
            alternatives,
            size: this.currentSize,
            style: this.currentStyle
        });

        // Clear previous results
        preview.innerHTML = '';

        // Show loading indicators
        for (let i = 0; i < alternatives; i++) {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';
            previewItem.innerHTML = '<div class="loading">Generando imagen...</div>';
            preview.appendChild(previewItem);
        }

        try {
            const fullPrompt = `${this.currentStyle} style: ${prompt}`;
            
            const response = await fetch('/api/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: fullPrompt,
                    numberOfImages: alternatives
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error en el servidor');
            }

            const imageItems = document.querySelectorAll('.preview-item');
            data.images.forEach((base64Image, index) => {
                if (imageItems[index]) {
                    const imageUrl = `data:image/png;base64,${base64Image}`;
                    imageItems[index].innerHTML = `
                        <img src="${imageUrl}" alt="Imagen generada: ${prompt}">
                        <div class="overlay">
                            <button onclick="ImageGenerator.downloadItem(this)">Descargar</button>
                            <button onclick="ImageGenerator.showFullImage(this)">Ampliar</button>
                        </div>
                    `;
                }
            });

        } catch (error) {
            console.error('Error general en la generación:', error);
            preview.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Error al generar la imagen.</p>
                    <p>${error.message}</p>
                </div>
            `;
        }
    }

    static downloadItem(button) {
        const item = button.closest('.preview-item').querySelector('img');
        const link = document.createElement('a');
        link.href = item.src;
        link.download = 'MEXAion_generacion_galactica.png';
        link.click();
    }

    static showFullImage(button) {
        const item = button.closest('.preview-item').querySelector('img');
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const closeBtn = document.querySelector('.close');

        modal.style.display = "block";
        modalImg.src = item.src;

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}

// Make it globally available
window.ImageGenerator = ImageGenerator;
