// Table of Contents Generator
document.addEventListener('DOMContentLoaded', function() {
    // Only generate TOC if the page has toc: true in front matter
    const tocEnabled = document.querySelector('meta[name="toc"]');
    if (!tocEnabled) return;

    const content = document.querySelector('.post-content, .page-content, .entry-content');
    if (!content) return;

    // Find all headings
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length < 2) return; // Need at least 2 headings for a TOC

    // Create TOC container
    const tocContainer = document.createElement('div');
    tocContainer.className = 'toc';
    tocContainer.innerHTML = '<div class="toc-title">目录</div><ul class="toc-list"></ul>';

    // Insert TOC before the first heading
    const firstHeading = headings[0];
    firstHeading.parentNode.insertBefore(tocContainer, firstHeading);

    const tocList = tocContainer.querySelector('.toc-list');
    let currentLevel = 0;
    let currentUl = tocList;

    headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        const id = heading.id || `heading-${index}`;
        heading.id = id;

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        a.className = `toc-link toc-level-${level}`;
        li.appendChild(a);

        if (level > currentLevel) {
            // Create new nested ul
            const newUl = document.createElement('ul');
            newUl.className = 'toc-sublist';
            currentUl.appendChild(li);
            li.appendChild(newUl);
            currentUl = newUl;
        } else if (level < currentLevel) {
            // Go back up the hierarchy
            while (currentLevel > level) {
                currentUl = currentUl.parentNode.parentNode;
                currentLevel--;
            }
            currentUl.appendChild(li);
        } else {
            // Same level
            currentUl.appendChild(li);
        }

        currentLevel = level;
    });

    // Add smooth scrolling
    tocList.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });

    // Add active state to current section
    const observerOptions = {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            const id = entry.target.id;
            const tocLink = tocContainer.querySelector(`a[href="#${id}"]`);
            if (tocLink) {
                if (entry.isIntersecting) {
                    tocLink.classList.add('active');
                } else {
                    tocLink.classList.remove('active');
                }
            }
        });
    }, observerOptions);

    headings.forEach(heading => {
        observer.observe(heading);
    });
}); 