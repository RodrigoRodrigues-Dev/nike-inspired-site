<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__container__content">
                <span> <a href="#">Encontre Uma Loja Nike</a> </span>
                <span> <a href="#">Cadastre-se para receber novidades</a> </span>
                <span> <a href="#">Cartão Presente</a> </span>
                <span> <a href="#">Mapa do Site</a> </span>
                <span> <a href="#">Nike Journal</a> </span>
            </div>
            <div class="footer__container__content">
                <p class="footer__container__content__title">Ajuda</p>
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
            <div class="footer__container__content">
                <p class="footer__container__content__title">Sobre a Nike</p>
                <ul>
                    <li>Propósito</li>
                    <li>Sustentabilidade</li>
                    <li>Sobre a Nike, Inc.</li>
                    <li>Sobre o Grupo SBF</li>
                </ul>
            </div>
            <div class="footer__container__content">
                <p class="footer__container__content__title">Redes Sociais</p>
                <ul>
                    <li><img src="/src/assets/images/icons/Facebook.svg" alt="Ícone Facebook"></li> 
                    <li><img src="/src/assets/images/icons/Instragam.svg" alt="Ícone Instagram"></li> 
                    <li><img src="/src/assets/images/icons/YouTube.svg" alt="Ícone YouTube"></li>
                </ul>
            </div>
        </div>
        <div class="line"></div>
        <div class="footer__container">
            <p class="footer__container__content__title">&copy; 2024 Nike Inc. Todos os direitos reservados.</p>
        </div>
    </footer>
</template>

<style lang="scss">
@import '../assets/styles/variaveis.scss';

.footer {
    background-color: $colorMain;
    color: $colorSecondary;
    padding: 2.5em 0;

    &__container {
        max-width: 75em;
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;

        &__content {
            &__title {
                margin-bottom: 1.3em;
            }

            span {
                a {
                    color: $colorSecondary;
                    font-size: 1.125em;
                    margin-bottom: 0.75em;
                }
            }
            li {
                font-size: 1em;
                cursor: pointer;
                margin-bottom: 0.75em;
            }

            &:nth-child(4) ul {
                display: flex;
                justify-content: space-between;
            }
            &:nth-child(1) a {
                margin-bottom: 0.75em;
                display: block;
                cursor: pointer;
            }
        }
    }
}
</style>