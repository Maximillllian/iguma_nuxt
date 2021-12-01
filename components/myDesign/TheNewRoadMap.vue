<template>
  <div class="roadmap__inner">
    <nav>
      <h1>Дорожная карта</h1>
      <div class="arrows">
        <svg
          @click="leftSlide"
          class="left disabled"
          width="512pt"
          height="512pt"
          viewBox="0 0 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="#000000ff">
            <path
              fill="var(--lineColor)"
              opacity="1.00"
              d=" M 120.07 131.12 C 122.89 128.39 126.98 126.86 130.89 127.74 C 136.82 128.83 141.19 135.16 139.88 141.10 C 139.15 145.50 135.46 148.42 132.55 151.47 C 101.63 182.40 70.65 213.28 39.79 244.27 C 190.86 244.36 341.94 244.29 493.01 244.31 C 497.58 244.40 502.64 243.69 506.69 246.33 C 509.83 248.29 511.49 251.86 512.00 255.43 L 512.00 256.47 C 511.52 262.98 505.55 268.03 499.07 267.58 C 345.97 267.64 192.87 267.55 39.77 267.62 C 70.79 298.80 101.92 329.86 132.99 360.98 C 136.38 364.19 140.27 367.93 140.09 373.00 C 140.28 379.67 133.75 385.46 127.14 384.40 C 123.60 384.15 120.92 381.67 118.52 379.33 C 81.71 342.53 44.89 305.73 8.08 268.92 C 4.50 265.50 0.47 261.79 0.00 256.53 L 0.00 255.47 C 0.41 252.01 2.20 248.91 4.67 246.51 C 43.15 208.05 81.60 169.58 120.07 131.12 Z"
            />
          </g>
        </svg>
        <svg
          @click="rightSlide"
          class="right"
          width="512pt"
          height="512pt"
          viewBox="0 0 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="#000000ff">
            <path
              fill="var(--lineColor)"
              opacity="1.00"
              d=" M 376.67 129.70 C 381.48 126.00 388.67 127.24 392.52 131.75 C 430.84 169.95 469.05 208.26 507.34 246.49 C 509.85 248.93 511.64 252.10 512.00 255.62 L 512.00 256.30 C 511.68 259.80 509.91 262.96 507.42 265.40 C 469.90 302.91 432.38 340.42 394.88 377.95 C 391.96 381.08 388.50 384.44 383.92 384.48 C 377.62 384.95 371.75 379.30 371.91 373.01 C 371.75 369.00 374.27 365.65 377.00 363.00 C 408.75 331.23 440.54 299.50 472.26 267.71 C 321.18 267.67 170.10 267.70 19.02 267.69 C 14.24 267.59 8.83 268.38 4.76 265.28 C 1.88 263.25 0.45 259.81 0.00 256.41 L 0.00 255.77 C 0.31 249.19 6.33 243.98 12.87 244.43 C 166.00 244.36 319.13 244.44 472.27 244.39 C 440.04 212.05 407.72 179.80 375.49 147.47 C 370.41 142.72 370.84 133.64 376.67 129.70 Z"
            />
          </g>
        </svg>
      </div>
    </nav>
    <div class="timeline-slider">
      <div class="timeline">
        <div class="step">
          <div class="date">
            <h4>2021</h4>
            <h1>Q4</h1>
          </div>
          <ul class="events">
            <li>Разработка программного кода IGUMA token</li>
            <li>Разработка NFT маркетплейса в Telegram</li>
            <li>Разработка фирменной символики и сайта</li>
          </ul>
        </div>
        <div class="step">
          <div class="date">
            <h4>2022</h4>
            <h1>Q1</h1>
          </div>
          <ul class="events">
            <li>Запуск чатов Telegram</li>
            <li>Запуск Бота Telegram</li>
            <li>Запуск NFT маркетплейса</li>
            <li>Запуск веб-сайта</li>
          </ul>
        </div>
        <div class="step">
          <div class="date">
            <h4>2022</h4>
            <h1>Q2</h1>
          </div>
          <ul class="events">
            <li>Запуск системы на основе нейросети для создания личного NFT</li>
            <li>Аудит кода</li>
            <li>Официальный мерч, мемы, PR</li>
            <li>Листинг Iguma token на COINGECKO и COINMARKETCAP</li>
            <li>Технический документ</li>
          </ul>
        </div>
        <div class="step">
          <div class="date">
            <h4>2022</h4>
            <h1>Q3</h1>
          </div>
          <ul class="events">
            <li>Совместимость с Somnium Space VRR</li>
            <li>Короткометражные фильмы с участием Digital human</li>
            <li>Интеграция Digital Human NFT в систему KYC</li>
            <li>Листинг Iguma token на COINGECKO и COINMARKETCAP</li>
            <li>
              Выход Digital Human NFT как аналог ЭЦП (электронной цифровой
              подписи) и KYC
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      roadmapTimeline: [],
      timelineSlider: [],
      leftArrow: [],
      rightArrow: [],
      roadmapWidth: 0,
      containerWidth: 0,
      maxScroll: 0,
      roadmapTimelineGap: 40,
      cardWidth: 360,
      step: 0
    };
  },
  mounted() {
    this.roadmapTimeline = document.querySelector("#roadmap .timeline");
    this.timelineSlider = document.querySelector("#roadmap .timeline-slider");
    this.leftArrow = document.querySelector("#roadmap .arrows svg.left");
    this.rightArrow = document.querySelector("#roadmap .arrows svg.right");

    // Get width of all timeline (with overflow)
    this.roadmapWidth = document.querySelector("#roadmap .timeline").scrollWidth;

    // Get width of visible container
    this.containerWidth = document.querySelector("#roadmap .roadmap__inner").clientWidth;

    // Max scroll number
    this.maxScroll = Math.floor(this.roadmapWidth / this.containerWidth);
    this.step = this.cardWidth * 2 + this.roadmapTimelineGap * 2;
  },
  computed: {
    disableArrow() {
      if (this.counter === 1) {
        this.leftArrow.classList.add("disabled");
        this.rightArrow.classList.remove("disabled");
      }
      if (this.counter > 1) {
        this.leftArrow.classList.remove("disabled");
      }
      if (this.counter > this.maxScroll) {
        this.leftArrow.classList.remove("disabled");
        this.rightArrow.classList.add("disabled");
      }
    }
  },
  methods: {
    leftSlide() {
      if (this.counter === 1) {
        return;
      }
      this.roadmapTimeline.style.transform = `translateX(0px)`;
      this.counter -= 1;
      this.disableArrow;
    },
    rightSlide() {
      if (this.counter > this.maxScroll) {
        return;
      }
      this.roadmapTimeline.style.transform = `translateX(${this.step *
        -this.counter}px)`;
      this.counter += 1;
      this.disableArrow;
    }
  }
};
</script>

<style scoped>
#roadmap nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#roadmap .arrows {
  display: flex;
  gap: 160px;
}

#roadmap .arrows svg {
  max-width: 40px;
  max-height: 40px;
  cursor: pointer;
  transition: all 0.25s ease-in;
}
#roadmap .arrows svg path {
  fill: var(--lineColor);
}
#roadmap .arrows svg:hover path {
  fill: var(--green);
}
#roadmap .arrows svg.disabled path {
  fill: var(--lightGrey);
}

#roadmap .timeline-slider {
  overflow-x: visible;

  transition: all 0.4s ease-in-out;
}

#roadmap .timeline {
  display: flex;
  align-items: flex-start;
  gap: 40px;

  transition: all 0.4s ease-in-out;
}
@media screen and (max-width: 767.98px) {
  #roadmap .timeline {
    flex-direction: column;
    align-items: stretch;
  }
  #roadmap .arrows {
    display: none;
  }
}

#roadmap .step {
  min-width: 360px;
  padding: 20px;
  box-sizing: border-box;

  color: var(--text);
  border: 1px solid var(--lightBorder);
  border-radius: 10px;
}
@media screen and (max-width: 575.98px) {
  #roadmap .step {
    min-width: 100%;
  }
}

#roadmap .step h1 {
  margin: 0;
  padding: 0;
  color: var(--green);
}

#roadmap .step h4 {
  margin: 0;
  color: var(--text);
}

#roadmap .step li {
  margin-left: 20px;
}

#roadmap .events {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  padding-left: 0;
  margin: 0;
}
</style>
