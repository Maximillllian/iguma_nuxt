<template>
    <div class="mobile-buy-map">
        <div class="punct right">
            <span class="order clip">1</span>
            <p class="instruction">Перейдите в<a href="https://t.me/DIgital_Human_NFT_bot"> Telegram-бот</a></p>
        </div>
        <div class="punct left">
            <span class="order">2</span>
            <p class="instruction">Введите свой MetaMask или TrustWallet кошелек</p>
        </div>
        <div class="punct right">
            <span class="order">3</span>
            <p class="instruction">Следуя инструкциям в боте, пополните баланс криптовалютой IGUMA token</p>
        </div>
        <div class="punct left">
            <span class="order">4</span>
            <p class="instruction">Зайдите в раздел бота NFT каталог</p>
        </div>
        <div class="punct right">
            <span class="order">5</span>
            <p class="instruction">Купите нужный NFT</p>
        </div>
    </div>
</template>

<style>
#howToBuy .mobile-buy-map {
    position: relative;
    display: none;
    flex-direction: column;
    /* align-items: center; */
    gap: 60px;
    padding: 40px 0;
}
@media screen and (max-width: 575.98px) {
    #howToBuy .mobile-buy-map {
        display: flex;
    }
}
#howToBuy .mobile-buy-map:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background: var(--text);
    /* background: linear-gradient(to bottom, transparent 50%, var(--text) 50%);
    background-size: 1px 20px; */
}

#howToBuy .punct {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    font-size: 1.5rem;
    font-weight: 400;
    color: var(--primary);
    opacity: 1;

    transition: all .15s ease-in;
}
#howToBuy .punct:hover {
    opacity: 1;
}

#howToBuy .punct.right {
    left: calc(50% - 30px);
    width: calc(50% + 30px);
    justify-content: flex-start;
}
#howToBuy .punct.left .instruction {
    text-align: left;
}

#howToBuy .punct.left {
    left: 0;
    width: calc(50% + 30px);
    justify-content: flex-end;
}
#howToBuy .punct.left .order {
    order: 1;
}
#howToBuy .punct.left .instruction {
    text-align: right;
}

#howToBuy .punct .order {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 60px;
    min-height: 60px;
    background: url('~/static/img/polygon.svg');
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: center center
    /* background-color: var(--green); */
    /* clip-path: url(#hexagon-clip); */
}

#howToBuy .instruction {
    white-space: pre-wrap;
}

#howToBuy .instruction a {
    color: var(--green);
}
#howToBuy .instruction a:hover {
    color: var(--leadText);
}

@media screen and (max-width: 575.98px) {
    #howToBuy .mobile-buy-map:before {
        left: 30px;
    }
    #howToBuy .punct.left {
        width: 100%;
        justify-content: flex-start;
    }
    #howToBuy .punct.right {
        left: 0;
        width: 100%;
        justify-content: flex-start;
    }
    #howToBuy .punct.left .instruction {
        text-align: left;
    }
    #howToBuy .punct.left .order {
        order: 0;
    }
}
</style>