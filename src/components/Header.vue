<template>
    <header class="header" id="header">
        <nav class="nav container__page">
            <a href="#" class="nav__logo">ALEXA</a>

            <div :class="[
                'nav__menu',
                {'show-menu': isOpen}
            ]" id="nav-menu">
               
                <ul class="nav__list grid__page" v-click-outside="closeMenu">
                    <li class="nav__item">
                        <a href="#home" class="nav__link" @click="linkAction">
                            <unicon class="nav__icon" name="estate"></unicon> Home
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#about" class="nav__link" @click="linkAction">
                          <unicon class="nav__icon" name="user"></unicon> About
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#skills" class="nav__link" @click="linkAction">
                          <unicon class="nav__icon" name="file-alt"></unicon> Skills
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#services" class="nav__link" @click="linkAction">
                          <unicon class="nav__icon" name="briefcase"></unicon> Services
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#portfolio" class="nav__link" @click="linkAction">
                          <unicon class="nav__icon" name="scenery"></unicon> Portfolio
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#contactme" class="nav__link" @click="linkAction">
                          <unicon class="nav__icon" name="message"></unicon> Contactme
                        </a>
                    </li>
                </ul>
                <unicon name="times" class="nav__close" @click="toggleMenu" id="nav-close"></unicon>
            </div>
            <div class="nav__btns">
              <div class="nav__toggle" @click.prevent="toggleMenu" id="nav-toggle">
                <unicon name="apps"></unicon>
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