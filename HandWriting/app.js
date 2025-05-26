const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.remove('light');
                body.classList.add('dark');
            } else {
                body.classList.remove('dark');
                body.classList.add('light');
            }
        });

        const textInput = document.getElementById('text-input');
        const generateBtn = document.getElementById('generate-btn');
        const previewSection = document.getElementById('preview-section');
        const previewImage = document.getElementById('preview-image');
        const downloadBtn = document.getElementById('download-btn');
        const resetBtn = document.getElementById('reset-btn');
        const fontSelect = document.getElementById('font-select');
        const sizeSelect = document.getElementById('size-select');

        const handwritingStyles = {
            casual: "font-family: 'Caveat', cursive; font-weight: 400;",
            elegant: "font-family: 'Dancing Script', cursive; font-weight: 500;",
            neat: "font-family: 'Indie Flower', cursive;",
            artistic: "font-family: 'Satisfy', cursive;",
            formal: "font-family: 'Tangerine', cursive; font-weight: 700;"
        };

        const textSizes = {
            small: "font-size: 18px; line-height: 1.5;",
            medium: "font-size: 24px; line-height: 1.5;",
            large: "font-size: 32px; line-height: 1.5;",
            xlarge: "font-size: 42px; line-height: 1.5;"
        };

        generateBtn.addEventListener('click', () => {
            const text = textInput.value.trim();

            if (!text) {
                alert('Please enter some text first.');
                return;
            }

            const style = fontSelect.value;
            const size = sizeSelect.value;

            previewSection.classList.remove('hidden');
            previewSection.classList.add('fade-in');

            const handwritingHTML = `
                <div style="${handwritingStyles[style]} ${textSizes[size]} color: #333; text-align: left; overflow-wrap: break-word;">
                    ${text.split('\n').map(line => `<p>${line || '&nbsp;'}</p>`).join('')}
                </div>
            `;

            previewImage.innerHTML = handwritingHTML;

            setTimeout(() => {
                previewSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        });

        resetBtn.addEventListener('click', () => {
            textInput.value = '';
            previewSection.classList.add('hidden');
            textInput.focus();
        });

        downloadBtn.addEventListener('click', () => {
            const originalText = downloadBtn.textContent;
            downloadBtn.textContent = 'Downloaded!';
            downloadBtn.disabled = true;

            setTimeout(() => {
                downloadBtn.textContent = originalText;
                downloadBtn.disabled = false;
            }, 2000);
        });

        document.querySelectorAll('select, button').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-2px)';
                element.style.transition = 'transform 0.3s ease';
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0)';
            });
        });