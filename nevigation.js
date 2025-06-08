class DynamicMenu {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.menuData = {
            menuId: "menu-1-031d597",
            menuClass: "elementor-nav-menu",
            smartmenusId: "17415734225721985",
            items: [
                {
                    href: "./index.html",
                    text: "Home",
                    liClasses: [
                        "menu-item",
                        "menu-item-type-post_type",
                        "menu-item-object-page",
                        "menu-item-home",
                        "current-menu-item",
                        "page_item",
                        "page-item-12",
                        "current_page_item",
                        "menu-item-39"
                    ],
                    aClasses: ["elementor-item"],
                    attributes: {
                        "aria-current": "page"
                    }
                },
                {
                    href: "./About.html",
                    text: "About",
                    liClasses: [
                        "menu-item",
                        "menu-item-type-post_type",
                        "menu-item-object-page",
                        "menu-item-has-children",
                        "menu-item-41"
                    ],
                    aClasses: ["elementor-item"]
                },
                {
                    href: "./Expertise.html",
                    text: "Expertise",
                    liClasses: [
                        "menu-item",
                        "menu-item-type-post_type",
                        "menu-item-object-page",
                        "menu-item-42"
                    ],
                    aClasses: ["elementor-item"]
                },
                {
                    href: "./Services.html",
                    text: "Services",
                    liClasses: [
                        "menu-item",
                        "menu-item-type-post_type",
                        "menu-item-object-page",
                        "menu-item-42"
                    ],
                    aClasses: ["elementor-item"]
                },
                {
                    href: "./Projects.html",
                    text: "Projects",
                    liClasses: [
                        "menu-item",
                        "menu-item-type-post_type",
                        "menu-item-object-page",
                        "menu-item-42"
                    ],
                    aClasses: ["elementor-item", "elementor-item-active"]
                },
				
				 {
                    href: "./our-team.html",
                    text: "Our Team",
                    liClasses: [
                        "menu-item",
                        "menu-item-type-post_type",
                        "menu-item-object-page",
                        "menu-item-42"
                    ],
                    aClasses: ["elementor-item", "elementor-item-active"]
                },
                {
                    // Empty menu item
                    liClasses: [
                        "menu-item",
                        "menu-item-type-post_type",
                        "menu-item-object-page",
                        "menu-item-42"
                    ]
                }
            ]
        };
    }

    createMenu() {
        if (!this.container) return false;

        const menu = document.createElement('ul');
        menu.id = this.menuData.menuId;
        menu.className = this.menuData.menuClass;
        menu.setAttribute('data-smartmenus-id', this.menuData.smartmenusId);

        this.menuData.items.forEach(item => {
            const li = document.createElement('li');
            li.className = item.liClasses.join(' ');

            if (item.text) {
                const a = document.createElement('a');
                a.href = item.href;
                a.className = item.aClasses.join(' ');
                a.textContent = item.text;

                if (item.attributes) {
                    Object.entries(item.attributes).forEach(([key, value]) => {
                        a.setAttribute(key, value);
                    });
                }

                li.appendChild(a);
            }

            menu.appendChild(li);
        });

        this.container.appendChild(menu);
        return true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menu = new DynamicMenu('nevigation');
    menu.createMenu();
});