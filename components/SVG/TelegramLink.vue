<template>
  <div class="telegram">
    <svg class="relationship" viewBox="0 0 600 200">
      <image href="img/telegram-skewed.png" alt="" />
      <path d="M160 120 H400 V75 H575" fill="none" />
    </svg>
    <!-- <a href="https://t.me/DH_NFT_ru_official" class="btn"
      ><span class="text"
        >Telegram<br /><small>чат участников</small>
        <span class="under-button"
          >переходите в Telegram чат, чтобы присоединиться к нам</span
        ></span
      ></a
    > -->
    <div class="button-container">
      <svg
        @click="openTelegramLink"
        version="1.1"
        id="button"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 344.2 86.8" style="enable-background:new 0 0 344.2 86.8;"
        xml:space="preserve"
      >
        <g>
          <polygon class="st0" points="10.1,43.3 27.6,84.1 319,84.1 336.3,43.5 318.5,2.1 28.1,2.1 "/>
          <text x="50%" y="45%" alignment-baseline="center">
            <tspan x="50%" text-anchor="middle">Telegaram</tspan>
            <tspan x="50%" dy="30" text-anchor="middle" class="small">чат участников</tspan>
          </text>
        </g>
      </svg>
      <span class="under-button">переходите в Telegram чат, чтобы присоединиться к нам</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openTelegramLink() {
      let link = 'https://t.me/DH_NFT_ru_official'
      window.open(link, '_blank').focus();
    }
  }
}
</script>

<style lang="scss">
.telegram {
  position: relative;
  align-self: center;
  display: flex;
  align-items: center;
}

.telegram .relationship {
  height: 100px;

  @media screen and (max-width: 575.98px) {
    display: none;
  }

  path {
    stroke: var(--lineColor);
    stroke-width: 2px;
  }
}

.telegram .button-container {
  position: relative;
  right: 20px;
  margin-bottom: auto;
}

.telegram #button {
  width: 300.64px;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 575.98px) {
    width: 200px;
    margin-bottom: 0;
  }

  polygon {
    fill: var(--linkBackground);
    stroke: #7ccf9e;
    stroke-width: 5;
  }

  text {
    font-size: 2em;
    fill: var(--lightGreen);

    @media screen and (max-width: 575.98px) {
      font-size: 2rem;
    }

    .small {
      font-size: 70%;
    }
  }
}

.telegram #button:hover {

  polygon {
    fill: var(--green);
  }

  text {
    fill: var(--black);
  }
}

.telegram .under-button {
  position: absolute;
  text-align: center;
  font-size: 1rem;
  right: 0px;
  bottom: -65%;
  color: var(--text);
  pointer-events: none;

  @media screen and (max-width: 575.98px) {
    bottom: -60%;
    font-size: 0.75rem;
  }
}

.telegram:hover .under-button {
  color: var(--text);
}

@media screen and (max-width: 575.98px) {
  .telegram .btn,
  .telegram .dark-btn {
    margin-bottom: 0;
  }
}
</style>
