<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__section footer__links">
                <span><a href="#">Encontre Uma Loja Nike</a></span>
                <span><a href="#">Cadastre-se para receber novidades</a></span>
                <span><a href="#">Cartão Presente</a></span>
                <span><a href="#">Mapa do Site</a></span>
                <span><a href="#">Nike Journal</a></span>
            </div>
            <div class="footer__divider"></div>
            <div class="footer__section footer__help">
                <p class="footer__section__title">Ajuda</p>
                <ul>
                    <li>Dúvidas Gerais</li>
                    <li>Encontre seu Tamanho</li>
                    <li>Entregas</li>
                    <li>Pedidos</li>
                    <li>Trocas e Devoluções</li>
                    <li>Pagamentos</li>
                    <li>Produtos</li>
                    <li>Corporativo</li>
                    <li>Fale Conosco</li>
                </ul>
            </div>
            <div class="footer__divider"></div>
            <div class="footer__section footer__about">
                <p class="footer__section__title">Sobre a Nike</p>
                <ul>
                    <li>Propósito</li>
                    <li>Sustentabilidade</li>
                    <li>Sobre a Nike, Inc.</li>
                    <li>Sobre o Grupo SBF</li>
                </ul>
            </div>
            <div class="footer__divider"></div>
            <div class="footer__section footer__social">
                <p class="footer__section__title">Redes Sociais</p>
                <ul class="footer__social__icons">
                    <li><img class="footer__social__icon" src="/src/assets/images/icons/Facebook.svg"
                            alt="Ícone Facebook"></li>
                    <li><img class="footer__social__icon" src="/src/assets/images/icons/Instragam.svg"
                            alt="Ícone Instagram"></li>
                    <li><img class="footer__social__icon" src="/src/assets/images/icons/YouTube.svg"
                            alt="Ícone YouTube"></li>
                </ul>
            </div>
        </div>
        <div class="line"></div>
        <div class="footer__bottom">
            <p>&copy; 2024 Nike Inc. Todos os direitos reservados.</p>
        </div>
    </footer>
</template>


<style lang="scss">
@import '../assets/styles/variaveis.scss';

.footer {
    background-color: $color-primary;
    color: $color-white;
    padding: 2.5rem 0;

    &__container {
        max-width: 1200px;
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;

        /* Sections in footer */
        .footer__section {
            &__title {
                margin-bottom: 1.3rem;
            }

            span {
                a {
                    color: $color-white;
                    font-size: 1.125rem;
                    margin-bottom: 0.75rem;
                    display: block;
                    cursor: pointer;
                }
            }

            li {
                font-size: 1rem;
                cursor: pointer;
                margin-bottom: 0.75rem;
            }

            &__images {
                display: flex;
                gap: 1rem;
            }

            &__img {
                width: 1.7rem;
            }
        }
    }

    &__divider {
        margin: 1rem 0;
        height: 0.2rem;
        width: 100%;
        background-color: #333;

        @media (min-width: 1025px) {
            display: none;
        }
    }

    &__bottom {
        text-align: center;
        padding-top: 1rem;
    }

    &__social {
        &__icons {
            display: flex;
            gap: 1rem;
        }
    }

    /* Dispositivos móveis pequenos e grandes */
    @media (max-width: 1024px) {
        .footer {
            &__container {
                width: 600px;
                flex-direction: column;

                @media (max-width: 610px) {
                    width: 470px;
                }

                @media (max-width: 480px) {
                    width: 370px;
                }

                @media (max-width: 370px) {
                    width: 320px;
                }
            }

            &__section {
                ul,
                span {
                    font-size: 0.8rem;
                }

                &__title {
                    font-size: 1.3rem;
                }

                &__images {
                    gap: 1rem;
                }

                &__img {
                    width: 1.7rem;
                }
            }
        }
    }

    /* Desktops pequenos/laptops */
    @media (min-width: 1025px) and (max-width: 1280px) {
        .footer__container {
            max-width: 950px;

            .footer__section {

                ul,
                span {
                    font-size: 0.9rem;
                }

                &__title {
                    font-size: 0.9rem;
                }

                &__img {
                    width: 1.7rem;
                }
            }
        }
    }
}
</style>