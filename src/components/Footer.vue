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
                <p>Ajuda</p>
                <ul>
                    <li>Duvidas Gerais</li>
                    <li>Encontre seu Tamanho</li>
                    <li>Entregas</li>
                    <li>Pedidos</li>
                    <li>Trocas e Divulgações</li>
                    <li>Pagamentos</li>
                    <li>Produtos</li>
                    <li>Corporativo</li>
                    <li>Fale Conosco</li>
                </ul>
            </div>
            <div class="footer__container__content">
                <p>Sobre a Nike</p>
                <ul>
                    <li>Propósito</li>
                    <li>Sustentabilidade</li>
                    <li>Sobre a Nike, Inc.</li>
                    <li>Sobre o Grupo SBF</li>
                </ul>
            </div>
            <div class="footer__container__content">
                <p>Redes Socias</p>
                <ul>
                    <li><img src="/src/assets/images/icons/Facebook.svg" alt="icone Facebook"></li>
                    <li><img src="/src/assets/images/icons/Instragam.svg" alt="icone Instragam"></li>
                    <li><img src="/src/assets/images/icons/YouTube.svg" alt="icone YouTube"></li>
                </ul>
            </div>
        </div>
        <div class="line"></div>
        <div class="footer__container">
            <p>&copy; 2024 Nike Inc. Todos os direitos reservados.</p>
        </div>
    </footer>
</template>

<style lang="scss">
    @import '../assets/styles/variaveis.scss';

    .footer {
        background-color: $colorMain;
        color: $colorSecondary;
        padding: 40px 0px;

        &__container {
            max-width: 1200px;
            margin: auto;
            display: flex;
            justify-content: space-between;

            &__content {
                span {
                    a {
                        color: $colorSecondary;
                        font-size: 18px;
                        margin-bottom: 12px;
                    }
                }
                li {
                    font-size: 16px;
                    cursor: pointer;
                    margin-bottom: 12px;
                }

                &:nth-child(4) ul {
                    display: flex;
                    justify-content: space-between;
                }
                &:nth-child(1) a {
                    margin-bottom: 12px;
                    display: block;
                    cursor: pointer;
                }
            }
        }
    }
</style>