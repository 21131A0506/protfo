document.addEventListener('DOMContentLoaded', function() {
    // Highlight current reading section
    const sections = document.querySelectorAll('.content-section');
    const navHeight = document.querySelector('#navbar').offsetHeight;

    function highlightSection() {
        let scrollPosition = window.scrollY + navHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightSection);

    // Share functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            let shareUrl;

            if (btn.classList.contains('twitter')) {
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            } else if (btn.classList.contains('linkedin')) {
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            } else if (btn.classList.contains('facebook')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            }

            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });

    // Code block syntax highlighting
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const lines = block.textContent.split('\n');
        block.innerHTML = lines
            .map(line => `<span class="line">${line}</span>`)
            .join('\n');
    });
});