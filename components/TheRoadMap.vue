<template>
  <div class="timeline">
    <div class="step-img">
      <div class="step left done">
        <div class="date">
          <h4>2021</h4>
          <h1>Q4</h1>
        </div>
        <ul class="events">
          <li class="done">Разработка программного кода IGUMA token</li>
          <li class="done">Разработка NFT маркетплейса в Telegram</li>
          <li class="done">Разработка фирменной символики и сайта</li>
        </ul>
      </div>
      <object data="" type="">
        <div class="img-wrap">
          <img src="img/poly-polygon.svg" alt="">
          <img src="img/poly-polygon.svg" alt="">
        </div>
      </object>
    </div>
    <div class="step right">
      <div class="date">
        <h4>2022</h4>
        <h1>Q1</h1>
      </div>
      <ul class="events">
        <li class="done">Запуск чатов Telegram</li>
        <li class="done">Запуск веб-сайта</li>
        <li>Запуск NFT маркетплейса</li>
        <li>Запуск Бота Telegram</li>
      </ul>
    </div>
    <div class="step left">
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
    <div class="step right">
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
          Выход Digital Human NFT как аналог ЭЦП (электронной цифровой подписи)
          и KYC
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DashedLine from '@/components/SVG/DashedLine'

export default {
    components: {
        DashedLine
    },
    mounted() {
        let timeline = document.querySelector('.timeline');
        let timelineWidth = timeline.clientWidth;
        let timelineGap = 48;
        let cardWidth = 500;

        let cardDistance = timelineWidth - cardWidth - cardWidth / 2;
        timeline.style.setProperty('--afterWidth', cardDistance + 'px');
    },
}
</script>

<style lang="scss" scoped>
$card-width: 500px;
$timeline-gap: 48px;

.timeline {
    --card-width: 500px;
    --timeline-gap: 48px;
    --afterWidth: calc(var(--card-width) / 2 + var(--timeline-gap));

    display: flex;
    flex-direction: column;
    gap: var(--timeline-gap);
}

.step {
  position: relative;
  width: $card-width;
  padding: 1.5rem;
  box-sizing: border-box;

  color: var(--text);
  border: 1px solid var(--lightBorder);
  border-radius: 10px;
}
@media screen and (max-width: 767.98px) {
  .step {
    width: 100%;
  }
  .step:after, .step:before {
      display: none;
  }
}

.step-img {
  display: flex;
  justify-content: space-between;
}

.step-img .step {
  flex: none;
}

.step-img object {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767.98px) {
    display: none;
  }
}

.step-img object img {
  // max-height: 75%;
}

.step-img object .img-wrap {
  position: relative;
}

.step-img img:first-child {
  position: absolute;
  animation: spinright 6s linear infinite;
}

.step-img img:last-child {
  animation: spinleft 4s linear infinite;
}

.step-img object .img-wrap:before {
  content: url('@/static/img/spheres-vr.svg');
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  // transform: translateX(-50%);
}

@keyframes spinright {
  to {
    transform: rotate(360deg);
  }
}
@keyframes spinleft {
  to {
    transform: rotate(-360deg);
  }
}

.step-img .step.left {
  margin-right: 0;
}

.step.done {
  opacity: .7;
}

.step.done:after, .step.done:before {
    opacity: .1;
}

.step.done:after {
  background: linear-gradient(to right, transparent 50%, var(--text) 50%);
  background-size: 20px 4px, 100% 4px;
}
.step.done:before {
   background: linear-gradient(to bottom, transparent 50%, var(--text) 50%);
   background-size: 4px 20px, 4px 100%;
} 

.step:after, .step:before {
    content: '';
    position: absolute;
}

.step:after {
    top: calc(150% + var(--timeline-gap));
    height: 4px;
    width: var(--afterWidth);
    background: linear-gradient(to right, transparent 50%, var(--green) 50%);
    background-size: 20px 4px, 100% 4px;
}

.step.left:after, .step.left:before {
    left: 50%;
    // right: -($card-width / 2 + $timeline-gap);
}

.step.right:after, .step.right:before {
    right: 50%;
    // left: -($card-width / 2 + $timeline-gap);
}

.step:before {
    width: 4px;
    height: calc(50% + var(--timeline-gap));
    background: linear-gradient(to bottom, var(--green) 50%, transparent 50%);
    background-size: 4px 20px, 4px 100%;
    top: 100%;
}

.step:last-child:before, .step:last-child:after {
    display: none;
}

.step.right {
    margin-left: auto;
}

.step.left {
    margin-right: auto;
}

.step h1 {
  margin: 0;
  padding: 0;
  color: var(--green);
}

.step h4 {
  margin: 0;
  color: var(--text);
}

.step li {
  margin-left: 20px;
  position: relative;
}

.step li::marker {
  color: var(--text);
}

.step li.done {
  opacity: .5;
  // text-decoration: line-through;
  text-decoration-thickness: 1px;
}

.step li.done::marker {
  content: none;
}
.step li.done::before {
  position: absolute;
  content: '✓';
  left: -20px;
  color: var(--green);
}

.events {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  padding-left: 0;
  margin: 0;
}

#dashed-line {
    display: none;
}
</style>