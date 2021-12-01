<template>
  <div>
    <ThePreloader />
    <main>
      <section class="fullpage" id="banner">
        <img class="union first" src="img/banner-union.png" alt="" />
        <img class="union second" src="img/banner-union.png" alt="" />
        <div class="description">
          <h1>Digital Human NFT</h1>
          <p>
            Твой личный персональный DeepFake-аватар в виде NFT для
            метавселенной и соцсетей
          </p>
          <div class="beehives">
            <div class="beehive beehive-first">
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
            </div>
            <div class="beehive beehive-second">
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
              <img src="img/polygon.png" alt="" />
            </div>
          </div>
        </div>
        <div class="hexagonBorder clip-img">
          <img class="" src="img/banner-image.png" alt="" />
        </div>
        <TelegramLink />
        <div class="words-monitor">
          <h2 class="first"></h2>
          <h2 class="second"></h2>
          <h2 class="third"></h2>
        </div>
      </section>
      <section id="about">
        <div class="container">
          <h1>О проекте</h1>
          <div class="descriptions">
            <div class="description left">
              <p>
                Digital human NFT- токены, которые являются трехмерным deep fake
                медиаконтентом, который можно использовать для различных целей.
              </p>
              <img src="img/about-token.png" alt="" />
            </div>
            <div class="description right">
              <p>
                Загрузите своё видео в наш бот — нейросеть автоматически меняет
                лицо на уникальное сгенерированное
              </p>
              <img src="img/about-face.png" alt="" />
            </div>
            <div class="description left">
              <p>
                Что это?‌ Каждый Digital human NFT хранится как токен ERC-721 в
                блокчейне Ethereum и размещается в IPFS.
              </p>
              <img src="img/about-ethereum.png" alt="" />
            </div>
            <div class="description right">
              <p>
                NFT поставляется с полными коммерческими правами, а также с
                видео-аватаром, предназначенным для интеграции с метавселенной,
                децентрализованным миром виртуальной реальности.
              </p>
              <img src="img/about-docs.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="sphere__section">
        <div class="container">
          <div class="title">
            <h1>А что с этим делать?</h1>
          </div>
          <TheSpheres />
        </div>
      </section>
      <section id="howToBuy">
        <div class="container">
          <div class="howToBuy__inner">
            <h1>Как купить?</h1>
            <p>
              Чтобы приобрести свой Digital Human NFT, Вам понадобятся IGUMA
              tokens, внутренняя криптовалюта, которую можно купить в нашем
              специализированном Telegram-боте или на бирже.
            </p>
            <p>
              Кроме того, с помощью внутренней криптовалюты IGUMA tokens можно
              заработать! Как? Смотрите в разделе Токеномика!
            </p>
            <TheBuyMap />
            <TheNewBuyMap />
            <div class="center">
              <p><b>Поздравляем! Вы стали обладателем собственного Digital Human NFT!</b></p>
              <TelegramLink />
            </div>
          </div>
        </div>
      </section>
      <section id="tokenomics" class="transparent">
        <div class="container">
          <div class="tokenomics__inner">
            <h1 class="title">Токеномика</h1>
              <div class="quote-block">
                <svg class="quote left" viewBox="0 0 60 88">
                  <path
                    d="M 30 0
                           l -30 16
                           v 56
                           l 30 16"
                  />
                  <path
                    d="M 60 0
                           l -30 16
                           v 56
                           l 30 16"
                  />
                </svg>
                <p>
                  IGUMA token - дефляционный токен платформы в сети BSC, с
                  помощью которого можно купить Digital Human NFT
                </p>
                <svg class="quote right" viewBox="0 0 60 88">
                  <path
                    d="M 30 0
                           l 30 16
                           v 56
                           l -30 16"
                  />
                  <path
                    d="M 0 0
                           l 30 16
                           v 56
                           l -30 16"
                  />
                </svg>
              </div>
              <div class="descriptions">
                <div class="description left">
                  <p>
                    Создан исходя из количества людей, зарегистрированных на
                    Земле - 7,9 миллиардов человек.
                  </p>
                  <img src="img/peoples.svg" alt="" />
                </div>
                <div class="description right">
                    <div>
                      <p>
                        Распределение от эмиссии: <br>5% - маркетинговый кошелек; <br>1% - первичный AirDrop; <br>5% - dev кошелек;<br> 1% - заблокированная ликвидность.
                      </p>
                    </div>
                  <img id="iguma-circle" src="img/iguma-circle.svg" alt="" />
                </div>
              </div>
              <TheTokenomicsChart />
              <MobileChart />
              <div class="referrals">
                <p>
                  Вы также можете заработать 5%, пригласив нового участника по
                  Вашей реферальной ссылке
                </p>
                <TelegramLink />
                <object data="" type="" class="five-percent">
                  <img src="img/tokenomics-reffs.svg" alt="" />
                </object>
              </div>
          </div>
        </div>
      </section>
      <section id="roadmap">
        <div class="container">
          <h1>Roadmap</h1>
          <TheRoadMap />
        </div>
      </section>
    </main>
    <svg id="hexagonMask">
      <defs>
        <clipPath clipPathUnits="objectBoundingBox" id="hexagon-clip">
          <polygon
            points="1 0.5, 0.75 0.9333, 0.25 0.933, 0 0.5, 0.25 0.0666, 0.75 0.0666"
            stroke="black"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
import animateMainPage from "~/static/js/main_animations.js";

// My design. Not used
import TheNewBuyMap from "@/components/myDesign/TheNewBuyMap";
import TheNewRoadMap from "@/components/myDesign/TheNewRoadMap";
import TheNewTokenomicsChart from "@/components/myDesign/TheNewTokenomicsChart";

// Main Design. Used
import ThePreloader from '@/components/ThePreloader'
import TelegramLink from "@/components/SVG/TelegramLink";
import TheSpheres from "@/components/SVG/TheSpheres";
import TheBuyMap from "@/components/SVG/TheBuyMap";
import TheTokenomicsChart from "@/components/SVG/TheTokenomicsChart";
import TheRoadMap from "@/components/TheRoadMap";
import MobileChart from '@/components/MobileChart';

export default {
  components: {
    ThePreloader,
    TheSpheres,
    TheBuyMap,
    TheNewBuyMap,
    TheNewRoadMap,
    TheTokenomicsChart,
    MobileChart,
    TheNewTokenomicsChart,
    TheRoadMap,
    TelegramLink
  },
  mounted() {
    animateMainPage();
  }
};
</script>

<style lang="scss" scoped>
#mobile-chart {
  display: none;
  width: 100%;

  @media screen and (max-width: 575.98px) {
    display: block;
  }
}
</style>