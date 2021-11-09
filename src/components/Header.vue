<template>
    <header class="header" id="header">
        <nav class="nav container__page">
            <a href="#" class="nav__logo">WELLINGTON</a>

            <div :class="[
                'nav__menu',
                {'show-menu': isOpen}
            ]" id="nav-menu">
               
                <ul class="nav__list grid__page" v-click-outside="closeMenu">
                    <li class="nav__item">
                        <a href="#home" class="nav__link active-link" @click="linkAction">
                            <i class="nav__icon uil uil-estate"></i> Home
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#about" class="nav__link" @click="linkAction">
                          <i class="nav__icon uil uil-user"></i> About
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#skills" class="nav__link" @click="linkAction">
                          <i class="nav__icon uil uil-file-alt"></i> Skills
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#services" class="nav__link" @click="linkAction">
                          <i class="nav__icon uil uil-briefcase"></i> Services
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#portfolio" class="nav__link" @click="linkAction">
                          <i class="nav__icon uil uil-scenery"></i> Portfolio
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#contactme" class="nav__link" @click="linkAction">
                          <i class="nav__icon uil uil-message"></i> Contactme
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" @click="toggleMenu" id="nav-close"></i>
            </div>
            <div class="nav__btns">
                <i class="uil uil-moon change-theme" id="theme-button"></i>

              <div class="nav__toggle" @click.prevent="toggleMenu" id="nav-toggle">
                <i class="uil uil-apps"></i>
              </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "nav-header",
        data(){
            return {
                isOpen: false
            }
        },
        methods: {
            toggleMenu(){
                this.isOpen = !this.isOpen;
            }, 
            linkAction(){
                this.isOpen = false;
            },
            closeMenu() {
                this.isOpen = false;
            }
        },
        mounted(){
            const sections = document.querySelectorAll(`section[id]`)
            function scrollActive(){
                const scrollY = window.pageYOffset
                sections.forEach(current =>{
                    const sectionHeight = current.offsetHeight
                    const sectionTop = current.offsetTop - 50;
                    
                    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                        document.querySelector('.nav__menu a[href*=' + current.getAttribute('id') + ']').classList.add('active-link')
                    }else{
                        document.querySelector('.nav__menu a[href*=' + current.getAttribute('id') + ']').classList.remove('active-link')
                    }
                })
            }
            window.addEventListener('scroll', scrollActive)


            function scrollHeader(){
                const nav = document.getElementById('header')
                // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
                if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
            }
            window.addEventListener('scroll', scrollHeader)

            const themeButton = document.getElementById('theme-button')
            const darkTheme = 'dark-theme'
            const iconTheme = 'uil-sun'

            // Previously selected topic (if user selected)
            const selectedTheme = localStorage.getItem('selected-theme')
            const selectedIcon = localStorage.getItem('selected-icon')

            // We obtain the current theme that the interface has by validating the dark-theme class
            const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
            const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

            // We validate if the user previously chose a topic
            if (selectedTheme) {
                // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
                document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
                themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
            }

            // Activate / deactivate the theme manually with the button
            themeButton.addEventListener('click', () => {
                // Add or remove the dark / icon theme
                document.body.classList.toggle(darkTheme)
                themeButton.classList.toggle(iconTheme)
                // We save the theme and the current icon that the user chose
                localStorage.setItem('selected-theme', getCurrentTheme())
                localStorage.setItem('selected-icon', getCurrentIcon())
            })

        }
    }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: var(--z-fixed);
        background-color: var(--body-color);
        
        .nav {
            max-width: 968px;
            height: var(--header-height);
            display: flex;
            align-items: center;
            justify-content: space-between;

            .nav__logo,
            .nav__btns .nav__toggle {
                color: var(--title-color);
                font-weight: var(--font-medium);
                cursor: pointer;

                &:hover {
                    color: var(--first-color);
                }
            }
            .nav__btns {
                display: flex;
                align-items: center;
                gap: 1rem;

                .change-theme{
                    font-size: 1.25rem;
                    color: var(--title-color);
                    margin-bottom: var(--mb-0-25);
                    cursor: pointer;

                    &:hover {
                        color: var(--first-color);
                    }
                }
                .nav__toglle {
                    font-size: 1.1rem;
                    cursor: pointer;
                }

            }

            .nav__menu {
                .nav__list{
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;

                    .nav__item {
                        
                        .nav__link {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            font-size: var(--small-font-size);
                            color: var(--title-color);
                            font-weight: var(--font-medium);

                            &:hover {
                                color: var(--first-color);
                            }

                            .nav__icon {
                                font-size: 1.2rem;
                            }
                        }
                        .active-link {
                            color: var(--first-color);
                        }
                    }
                }

                .nav__close {
                    position: absolute;
                    right: 1.5rem;    
                    bottom: 0.2rem;    
                    font-size: 2rem;
                    cursor: pointer;
                    color: var(--first-color);

                    &:hover {
                        color: var(--first-color-alt);
                    }
                }
            }
            .show-menu {
                bottom: 0 !important;
            }

        }
        &.scroll-header {
            box-shadow: 0 -1px 4px rgba(0, 0, 0, .15)
        }
    }
    @media screen and(max-width: 767px){
        .header{
            .nav{
                .nav__menu {
                    position: fixed;
                    bottom: -100%;
                    left: 0;
                    width: 100%;
                    background-color: var(--body-color);
                    padding: 2rem 1.5rem 4rem;
                    box-shadow: 0 2px 12px rgba(39, 39, 39, 0.30);
                    border-radius: 1.5rem 1.5rem 0 0;
                    transition:.3s;
                }   
            }
        }
    }
</style>