<template>
  <svg viewBox="0 0 1200 1314" xmlns="http://www.w3.org/2000/svg">
    <text class="title" x="600" y="657">
      <tspan x="600" dy="1em">Сферы</tspan>
      <tspan x="600" dy="1em">применения</tspan>
    </text>
    <g class="top">
      <path
        d="m 0,0
                                v -200
                                h -150
                                v -200"
      />
      <g class="sphere" transform="translate(-150 -400)">
        <text>
          <tspan x="0" dy="1em">Трехмерный аватар</tspan>
          <tspan x="0" dy="1em">для метавселенной</tspan>
        </text>
        <image href="img/spheres-vr.svg" />
      </g>
      <path
        d="m 50,0
                                v -150
                                h 150
                                v -100"
      />
      <g class="sphere" transform="translate(200 -250)">
        <text>
          <tspan x="0" dy="1em">Уникальный</tspan>
          <tspan x="0" dy="1em">цифровой актив</tspan>
        </text>
        <image height="140" href="img/about-token.png" />
      </g>
      <path
        d="m 100,0
                                v -100
                                h 400
                                v -100"
      />
      <g class="sphere" transform="translate(500 -200)">
        <text>
          <tspan x="0" dy="1em">Безопасность</tspan>
          <tspan x="0" dy="1em">в сети</tspan>
        </text>
        <image x="-10" height="140" href="img/about-face.png" />
      </g>
    </g>
    <g class="right">
      <path
        d="m 0 0
                                h 150
                                v 50
                                h 150"
      />
      <g class="sphere" transform="translate(375 175)">
        <text>
          <tspan x="0" dy="1em">Заменитель</tspan>
          <tspan x="0" dy="1em">ЭЦП</tspan>
        </text>
        <image x="25" href="img/spheres-eds.svg" />
      </g>
    </g>
    <g class="bottom">
      <path
        d="m 100 0
                                v 100
                                h 260
                                v 50"
      />
      <g class="sphere" transform="translate(370 375)">
        <text x="10" dy="1em">Аналог KYC</text>
        <image href="img/spheres-kyc.svg" />
      </g>
      <path
        d="m 50 0
                                v 200
                                h 100
                                v 100"
      />
      <g class="sphere" transform="translate(150 525)">
        <text y="5" x="10" dy="1em">Аналог паспорта</text>
        <image href="img/spheres-pasp.svg" />
      </g>
      <path
        d="m 0 0
                                v 150
                                h -150
                                v 100"
      />
      <g class="sphere" transform="translate(-150 475)">
        <text y="5">
          <tspan x="5" dy="1em">Образ актера</tspan>
          <tspan x="5" dy="1em">для фильмов</tspan>
        </text>
        <image href="img/spheres-movie.svg" />
      </g>
      <path
        d="m -50 0
                                v 100
                                h -350
                                v 100"
      />
      <g class="sphere" transform="translate(-410 400)">
        <text y="-20"><tspan x="5" dy="1em">Скины для игр</tspan></text>
        <image width="140" href="img/spheres-game.svg" />
      </g>
    </g>
    <g class="left">
      <path
        d="m 0 0
                                h -150
                                v -100
                                h -175
                                v -90"
      ></path>
      <g class="sphere" transform="translate(-330 -185)">
        <text>
          <tspan x="5" dy="1em">Видеоаватар</tspan>
          <tspan x="5" dy="1em">для соцсетей</tspan>
        </text>
        <image width="140" y="-25" href="img/spheres-socials.svg" />
      </g>
      <path
        d="m -60 50
                                h -235"
      />
      <g class="sphere" transform="translate(-380 175)">
        <text>
          <tspan x="5" dy="1em">Облик персонажа</tspan>
          <tspan x="5" dy="1em">для рекламы</tspan>
        </text>
        <image width="140" href="img/spheres-ad.svg" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
#sphere__section svg text {
    text-anchor: middle;
    font-size: 1.5rem;
    color: var(--lineColor);
    fill: var(--lineColor);
}
@media screen and (max-width: 575.98px) {
    #sphere__section svg text {
        font-size: 2rem;
    }
}

#sphere__section svg .title {
    font-size: 3rem;
}

#sphere__section svg path {
    fill: none;
    stroke-width: 1px;
}

#sphere__section svg .top {
    transform: translate(550px, 657px);
}

#sphere__section svg .right {
    transform: translate(700px, 690px)
}

#sphere__section svg .bottom {
    transform: translate(575px, 775px)
}

#sphere__section svg .left {
    transform: translate(500px, 690px)
}

#sphere__section .sphere text {
    transform: translate(0, -70px);
}

#sphere__section .sphere image {
    transform: translate(-60px, -210px)
}
</style>