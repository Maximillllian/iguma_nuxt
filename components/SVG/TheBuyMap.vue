<template>
  <svg
    class="buy-map"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1221.17 699.04"
  >
    <g id="lines">
      <path
        d="M304.73,60c-229,29.15-243.62,131.78-243.62,131.78"
      />
      <path
        d="M57.54,294.86C57.54,345.02,104.63,403.62,104.63,403.62"
      />
      <path
        d="M139.53,497.86C142.44,536.02,145.46,575.02,159.2,611.02c6.23,16.35,15.32,31.93,30.13,41.47,15.66,10.09,33.26,10.23,51,10,21.66-.33,43.39-1,64.83-4.21"
      />
      <path
        d="M396.61,613.63a242.37,242.37,0,0,1,72.41-45c43.75-17.2,68.33-11.19,139.76-16.78,85.82-6.71,129.32-10.63,158.37-38.17,15.1-14.32,37.42-44.25,39.25-106.62"
      />
    </g>
    <g id="fifth" transform="translate(795.58 335.74)">
      <text x="70" y="1em">
        Купите нужный NFT
      </text>
     <circle
        class="sphere"
        cx="0"
        cy="25"
        r="52.4"
      />
      <text class="digit" x="0" y="42" text-anchor="middle">5</text>
    </g>
    <g id="fourth" transform="translate(349.3 611.81)">
      <text x="70" y=".75em">
        <tspan>Зайдите в раздел бота</tspan> 
        <tspan x="70" dy="1em">NFT каталог</tspan>
      </text>
     <circle
        class="sphere"
        cx="0"
        cy="25"
        r="52.4"
      />
      <text class="digit" x="0" y="42" text-anchor="middle">4</text>
    </g>
    <g id="third" transform="translate(125.68 422.79)">
      <text x="70" y=".25em">
          <tspan dy="0">Следуя инструкциям в боте,</tspan> 
          <tspan x="70" dy="1em">пополните баланс</tspan> 
          <tspan x="70" dy="1em">криптовалютой IGUMA token</tspan>
      </text>
     <circle
        class="sphere"
        cx="0"
        cy="25"
        r="52.4"
      />
      <text
        id="_3"
        data-name="3"
        class="digit"
        x="0"
        y="42"
        text-anchor="middle"
      >
        3
      </text>
    </g>
    <g id="second" transform="translate(63.47 217.69)">
      <text x="70" y=".75em">
          <tspan>Введите свой кошелек</tspan>
          <tspan x="70" dy="1em">MetaMask или TrustWallet</tspan>
      </text>
      <circle
        class="sphere"
        cx="0"
        cy="25"
        r="52.4"
      />
      <text class="digit" x="0" y="42" text-anchor="middle">2</text>
    </g>
    <g id="first" transform="translate(346.87 30.05)">
      <text x="70" y="25">
        Перейдите в телеграм-бот
      </text>
      <circle
        class="sphere"
        cx="0"
        cy="25"
        r="52.4"
      />
      <text class="digit" x="0" y="42" text-anchor="middle">1</text>
    <!-- d="M432.22,28.28a99.92,99.92,0,0,1,17.89.21c21,3.57,38.88,21.51,41.6,42.74.37,8.21,1,16.81-2,24.65a51.54,51.54,0,0,1-24.3,28.7,52.36,52.36,0,0,1-50.05.17,51.67,51.67,0,0,1-21.73-22.17,50.94,50.94,0,0,1,.41-47.49c7.51-14.28,22.11-24.8,38.17-26.81" -->
    </g>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  max-width: 100%;
  max-height: 100%;
}

@media screen and (max-width: 575.98px) {
  svg {
    display: none;
  }
}

svg text {
    font-size: 1.5rem;
    fill: var(--text)
}
@media screen and (max-width: 767px) {
    svg text {
        font-size: 2rem;
    }
} 

svg .digit {
    font-size: 3rem;
    fill: var(--lightBlack)
    /* font-weight: bold; */
}

svg #lines path {
    fill: none;
    stroke: var(--lineColor);
    stroke-width: 2px;
    stroke-dasharray: 8;
}

svg .sphere {
    fill: var(--green);
}
</style>
