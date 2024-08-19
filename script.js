document.addEventListener('DOMContentLoaded', function() {
    // Função para minimizar a janela
    function minimizeWindow() {
        const cmdNav = document.querySelector('.cmd-nav');
        const cmdBody = document.querySelector('.cmd-body');
        const cmdWindow = document.querySelector('.cmd-window');

        if (cmdNav && cmdBody && cmdWindow) {
            cmdNav.style.display = 'none'; 
            cmdBody.style.display = 'none'; 
            cmdWindow.style.height = 'auto'; 
            cmdWindow.style.borderBottomLeftRadius = '0';
            cmdWindow.style.borderBottomRightRadius = '0';
        }
    }

    // Função para maximizar a janela
    function maximizeWindow() {
        const cmdNav = document.querySelector('.cmd-nav');
        const cmdBody = document.querySelector('.cmd-body');
        const cmdWindow = document.querySelector('.cmd-window');

        if (cmdNav && cmdBody && cmdWindow) {
            cmdNav.style.display = 'block'; 
            cmdBody.style.display = 'block'; 
            cmdWindow.style.height = '600px';
            cmdWindow.style.borderBottomLeftRadius = '10px';
            cmdWindow.style.borderBottomRightRadius = '10px';
        }
    }

    // Função para fechar a janela
    function closeWindow() {
        window.location.href = "about:blank";
    }

    // Função para preview de imagem
    const previewLinks = document.querySelectorAll('.preview-link');

    previewLinks.forEach(link => {
        link.addEventListener('mouseover', function(e) {
            const preview = document.getElementById('image-preview');
            const imageUrl = this.getAttribute('data-image');
            preview.querySelector('img').src = imageUrl;
            preview.classList.add('preview-show');
            preview.classList.remove('preview-hidden');
            adjustPosition(e, preview);
        });

        link.addEventListener('mousemove', function(e) {
            const preview = document.getElementById('image-preview');
            adjustPosition(e, preview);
        });

        link.addEventListener('mouseout', function() {
            const preview = document.getElementById('image-preview');
            preview.classList.remove('preview-show');
            preview.classList.add('preview-hidden');
        });
    });

    function adjustPosition(e, preview) {
        const offset = 10;
        let previewX = e.clientX + offset;
        let previewY = e.clientY + offset;

        const previewWidth = preview.offsetWidth;
        const previewHeight = preview.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (previewX + previewWidth > windowWidth) {
            previewX = windowWidth - previewWidth - offset;
        }

        if (previewY + previewHeight > windowHeight) {
            previewY = windowHeight - previewHeight - offset;
        }

        preview.style.top = previewY + 'px';
        preview.style.left = previewX + 'px';
    }

    document.querySelector('.minimize').addEventListener('click', minimizeWindow);
    document.querySelector('.maximize').addEventListener('click', maximizeWindow);
    document.querySelector('.close').addEventListener('click', closeWindow);
});
