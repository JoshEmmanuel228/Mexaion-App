console.log('app.js loaded');

// Initialize all components
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - app.js');
    
    try {
        // Setup size buttons
        const sizeButtons = document.querySelectorAll('.size-button');
        console.log('Found size buttons:', sizeButtons.length);
        
        sizeButtons.forEach(function(button) {
            button.onclick = function(e) {
                console.log('Size button clicked:', this.dataset.size);
                e.preventDefault();
                document.querySelectorAll('.size-button').forEach(function(btn) {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                ImageGenerator.currentSize = this.dataset.size;
                if (this.dataset.size === 'custom') {
                    document.querySelector('.custom-size').style.display = 'flex';
                } else {
                    document.querySelector('.custom-size').style.display = 'none';
                }
            };
        });

        // Setup resolution buttons
        const resolutionButtons = document.querySelectorAll('.resolution-button');
        console.log('Found resolution buttons:', resolutionButtons.length);
        
        resolutionButtons.forEach(function(button) {
            button.onclick = function(e) {
                console.log('Resolution button clicked:', this.dataset.resolution);
                e.preventDefault();
                document.querySelectorAll('.resolution-button').forEach(function(btn) {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                ImageGenerator.currentResolution = this.dataset.resolution;
            };
        });

        // Setup style buttons
        const styleButtons = document.querySelectorAll('.style-button');
        console.log('Found style buttons:', styleButtons.length);
        
        styleButtons.forEach(function(button) {
            button.onclick = function(e) {
                console.log('Style button clicked:', this.dataset.style);
                e.preventDefault();
                document.querySelectorAll('.style-button').forEach(function(btn) {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                ImageGenerator.currentStyle = this.dataset.style;
            };
        });

        // Setup generate button
        const generateButton = document.getElementById('generateButton');
        console.log('Generate button found:', !!generateButton);
        
        if (generateButton) {
            generateButton.onclick = function(e) {
                console.log('Generate button clicked');
                e.preventDefault();
                ImageGenerator.generate();
            };
        } else {
            console.error('Generate button not found');
        }

        console.log('All components initialized successfully');
    } catch (error) {
        console.error('Error initializing components:', error);
    }
});