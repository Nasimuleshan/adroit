document.addEventListener('DOMContentLoaded', function() {
    // Function to highlight current page menu item
    function setActiveMenuItem() {
        const currentPageUrl = window.location.pathname.split('/').pop() || 'index.html';
        const menuLinks = document.querySelectorAll('.elementor-nav-menu a.elementor-item');
        
        menuLinks.forEach(link => {
            const linkUrl = link.getAttribute('href').split('/').pop();
            
            // Remove active class from all links first
            link.classList.remove('elementor-item-active');
            link.removeAttribute('aria-current');
            
            // Add active class to current link
            if (linkUrl === currentPageUrl) {
                link.classList.add('elementor-item-active');
                link.setAttribute('aria-current', 'page');
                
                // Also add to parent li if needed
                const listItem = link.closest('li');
                if (listItem) {
                    listItem.classList.add('current-menu-item');
                }
            }
        });
    }

    // Desktop Menu
    const desktopNav = document.getElementById('navbar-desktop');
    if (desktopNav) {
        desktopNav.innerHTML = `
            <ul id="menu-1-031d597" class="elementor-nav-menu" data-smartmenus-id="17415734225721985">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./index.html">
<img width="150" height="47" src="./resc_files/resc-logo.jpg" class="attachment-full size-full wp-image-7776">								</a>
                </li>
				<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./index.html" class="elementor-item">Home</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./About.html" class="elementor-item">About</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./Expertise.html" class="elementor-item">Expertise</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./Services.html" class="elementor-item">Services</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./Projects.html" class="elementor-item">Projects</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <!-- Empty item -->
                </li>
            </ul>
        `;
        
        // Set active menu item after creating the menu
        setActiveMenuItem();
    }

    // Mobile Menu (if you have one)
    const mobileNav = document.getElementById('navbar-mobile');
    if (mobileNav) {
        mobileNav.innerHTML = `
            <ul id="menu-2-031d597" class="elementor-nav-menu" data-smartmenus-id="17389523024235642">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./index.html" class="elementor-item">Home</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./About.html" class="elementor-item">About</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./Expertise.html" class="elementor-item">Expertise</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./Services.html" class="elementor-item">Services</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <a href="./Projects.html" class="elementor-item">Projects</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                    <!-- Empty item -->
                </li>
            </ul>
        `;
        
        // Set active menu item for mobile
        setActiveMenuItem();
    }
});