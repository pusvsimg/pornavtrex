document.addEventListener('DOMContentLoaded', function() {
    // Website data
    const websites = [
        {
            name: "Google",
            url: "https://www.google.com",
            icon: "fab fa-google",
            category: "tech"
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com",
            icon: "fab fa-youtube",
            category: "video"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com",
            icon: "fab fa-facebook",
            category: "social"
        },
        {
            name: "Twitter",
            url: "https://twitter.com",
            icon: "fab fa-twitter",
            category: "social"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com",
            icon: "fab fa-instagram",
            category: "social"
        },
        {
            name: "Amazon",
            url: "https://www.amazon.com",
            icon: "fab fa-amazon",
            category: "shopping"
        },
        {
            name: "Netflix",
            url: "https://www.netflix.com",
            icon: "fab fa-netflix",
            category: "video"
        },
        {
            name: "Wikipedia",
            url: "https://www.wikipedia.org",
            icon: "fab fa-wikipedia-w",
            category: "news"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com",
            icon: "fab fa-linkedin",
            category: "social"
        },
        {
            name: "Reddit",
            url: "https://www.reddit.com",
            icon: "fab fa-reddit",
            category: "social"
        },
        {
            name: "Microsoft",
            url: "https://www.microsoft.com",
            icon: "fab fa-microsoft",
            category: "tech"
        },
        {
            name: "Apple",
            url: "https://www.apple.com",
            icon: "fab fa-apple",
            category: "tech"
        },
        {
            name: "GitHub",
            url: "https://github.com",
            icon: "fab fa-github",
            category: "tech"
        },
        {
            name: "WhatsApp",
            url: "https://www.whatsapp.com",
            icon: "fab fa-whatsapp",
            category: "social"
        },
        {
            name: "Spotify",
            url: "https://www.spotify.com",
            icon: "fab fa-spotify",
            category: "video"
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com",
            icon: "fab fa-tiktok",
            category: "social"
        },
        {
            name: "Alibaba",
            url: "https://www.alibaba.com",
            icon: "fas fa-shopping-cart",
            category: "shopping"
        },
        {
            name: "CNN",
            url: "https://www.cnn.com",
            icon: "fas fa-newspaper",
            category: "news"
        },
        {
            name: "BBC",
            url: "https://www.bbc.com",
            icon: "fas fa-newspaper",
            category: "news"
        },
        {
            name: "PayPal",
            url: "https://www.paypal.com",
            icon: "fab fa-paypal",
            category: "tools"
        },
        {
            name: "Dropbox",
            url: "https://www.dropbox.com",
            icon: "fab fa-dropbox",
            category: "tools"
        },
        {
            name: "Slack",
            url: "https://slack.com",
            icon: "fab fa-slack",
            category: "tools"
        },
        {
            name: "Zoom",
            url: "https://zoom.us",
            icon: "fas fa-video",
            category: "tools"
        },
        {
            name: "The New York Times",
            url: "https://www.nytimes.com",
            icon: "fas fa-newspaper",
            category: "news"
        }
    ];

    const sitesContainer = document.getElementById('sites-container');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const tabs = document.querySelectorAll('.tab');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    // Render website cards
    function renderWebsites(sites) {
        sitesContainer.innerHTML = '';
        
        sites.forEach(site => {
            const card = document.createElement('div');
            card.className = 'site-card';
            card.setAttribute('data-url', site.url);
            
            card.innerHTML = `
                <div class="site-icon">
                    <i class="${site.icon}"></i>
                </div>
                <div class="site-info">
                    <h3>${site.name}</h3>
                </div>
            `;
            
            // Make the entire card clickable
            card.addEventListener('click', function() {
                window.open(this.getAttribute('data-url'), '_blank');
            });
            
            sitesContainer.appendChild(card);
        });
    }

    // Initial render of all websites
    renderWebsites(websites);

    // Search functionality
    function searchWebsites() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredSites = websites.filter(site => 
            site.name.toLowerCase().includes(searchTerm)
        );
        renderWebsites(filteredSites);
        
        // Reset category tab states when searching
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
    }

    searchBtn.addEventListener('click', searchWebsites);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchWebsites();
        }
    });

    // Category switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update tab states
            if (this.classList.contains('active')) {
                // If the tab is already active, deactivate it and show all websites
                this.classList.remove('active');
                renderWebsites(websites);
            } else {
                // Deactivate all tabs first
                tabs.forEach(t => t.classList.remove('active'));
                // Activate this tab
                this.classList.add('active');
                // Filter websites
                const filteredSites = websites.filter(site => site.category === category);
                renderWebsites(filteredSites);
            }
            
            // Clear search box
            searchInput.value = '';
        });
    });

    // Theme toggle functionality
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Change icon
        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Save theme preference in local storage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggleBtn.addEventListener('click', function() {
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Initialize card effects
    function addCardHoverEffects() {
        const cards = document.querySelectorAll('.site-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Animation handled by CSS transitions
            });
            card.addEventListener('mouseleave', function() {
                // Animation handled by CSS transitions
            });
        });
    }

    // Initialize card effects
    addCardHoverEffects();

    // Re-add card effects when DOM changes
    const observer = new MutationObserver(function() {
        addCardHoverEffects();
    });
    
    observer.observe(sitesContainer, { childList: true });
});