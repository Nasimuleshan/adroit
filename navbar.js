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
	
	
<div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-031d597 elementor-nav-menu__align-justify elementor-nav-menu--stretch main-nav elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="031d597" data-element_type="widget" data-settings="{&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;&lt;i class=\&quot;fas fa-caret-down\&quot;&gt;&lt;\/i&gt;&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">

<div class="elementor-widget-container">
    <!-- Desktop Navigation -->
    <nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
 if (desktopNav) {
        desktopNav.innerHTML = `
            <ul id="menu-1-031d597" class="elementor-nav-menu" data-smartmenus-id="17415734225721985">
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

    </nav>
    <!-- Mobile Toggle -->
    <div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false">
        <i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close fa-solid fa-x"></i>
        <i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open fa-solid fa-bars"></i>
    </div>

    <!-- Mobile Navigation -->
    <nav class="elementor-nav-menu--dropdown elementor-nav-menu__container element-style" aria-hidden="true">


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
    </nav>
</div>

<!-- Load script with defer for optimal performance -->
<script src="navbar.js" defer></script>
</div></div>
   

});