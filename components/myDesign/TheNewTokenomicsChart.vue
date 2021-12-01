<template>
  <div class="mobile-chart">
    <chartist
      ratio="ct-square"
      type="Pie"
      :data="chartData"
      :options="chartOptions"
      :responsiveOptions="responsiveOptions"
    >
    </chartist>
    <div class="legend">
      <div class="legend__item transactions">
        <p class="percent">94%</p>
        <p class="description">чистая сумма транзакции</p>
      </div>
      <div class="legend__item burn">
        <span class="percent">1%</span>
        <p class="description">сжигается</p>
      </div>
      <div class="legend__item holders">
        <span class="percent">2%</span>
        <p class="description">распределяется между всеми холдерами IGUMA</p>
      </div>
      <div class="legend__item fee">
        <span class="percent">3%</span>
        <p class="description">комиссия в банк ликвидности</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        labels: ["transaction", "burn", "holders", "fee"],
        series: [94, 1, 2, 3]
      },
      chartOptions: {
        // linesmooth: false,
        donut: true,
        donutWidth: 20,
        donutSolid: false,
        labels: false,
        width: "400px",
        height: "400px",
        startAngle: 40
      },
      responsiveOptions: [
        [
          "screen and (max-width: 767.98px)",
          {
            width: "350px",
            height: "350px"
          }
        ]
      ]
    };
  }
};
</script>

<style>
.mobile-chart {
  --transactionColor: var(--emerald);
  --transactionTransp: var(--transpEmerald);

  --burnColor: var(--red);
  --burnTransp: var(--transpBlue);

  --holdersColor: var(--orange);
  --holdersTransp: var(--transpYellow);

  --feeColor: var(--darkGreen);
  --feeTransp: var(--transpDarkGreen);
}
body.dark-mode .mobile-chart {
  --transactionColor: var(--blue);
  --transactionTransp: var(--transpBlue);

  --burnColor: var(--white);
  --burnTransp: var(--transpWhite);

  --holdersColor: var(--yellow);
  --holdersTransp: var(--transpYellow);

  --feeColor: var(--salatGreen);
  --feeTransp: var(--transpSalat);
}

.mobile-chart .ct-chart-donut {
  fill: transparent;
  stroke: initial;
  color: transparent;
  width: 440px;
  min-height: 440px;
}

.mobile-chart {
  display: none;
  flex-direction: row;
  gap: 100px;
  padding: 40px 0;
}
@media screen and (max-width: 991.98px) {
  .mobile-chart {
    flex-direction: column;
    gap: 20px;
  }
  .mobile-chart .ct-square {
    text-align: center;
  }
}
@media screen and (max-width: 767.98px) {
  .mobile-chart {
    padding: 20px 0;
  }
}
@media screen and (max-width: 575.98px) {
  .mobile-chart {
    display: flex;
    padding: 0;
  }
}

.mobile-chart .legend {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
}

@media screen and (max-width: 575.98px) {
    .mobile-chart .legend {
        margin-top: -3rem;
    }
}

.mobile-chart .legend__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  padding: 8px;
  width: 100%;

  border: 1px solid var(--lightBorder);
  border-radius: 13px;
  white-space: pre-wrap;

  cursor: pointer;
}

.legend__item .percent {
  font-size: 2rem;
  font-weight: bold;
  text-align: right;
  padding: 13px;
  margin: 0;
  border-radius: 13px;
  min-width: 94px;

  transition: all 0.15s ease-in-out;
}
@media screen and (max-width: 575.98px) {
  .legend__item .percent {
    font-size: 1.5rem;
  }
}

.legend__item .description {
  /* font-size: 1.5rem; */
  margin: 0;
}

.legend__item.transactions .percent {
  background-color: var(--transactionTransp);
  color: var(--transactionColor);
}
.legend__item.transactions:hover .percent {
  background-color: var(--transactionColor);
}

.legend__item.burn .percent {
  background-color: var(--burnTransp);
  color: var(--burnColor);
}
.legend__item.burn:hover .percent {
  background-color: var(--burnColor);
}

.legend__item.holders .percent {
  background-color: var(--holdersTransp);
  color: var(--holdersColor);
}
.legend__item.holders:hover .percent {
  background-color: var(--holdersColor);
}

.legend__item.fee .percent {
  background-color: var(--feeTransp);
  color: var(--feeColor);
}

.legend__item.fee:hover .percent {
  background-color: var(--feeColor);
}

.legend__item:hover .percent {
  color: var(--primary);
}

body.dark-mode .ct-chart-donut .ct-series {
  opacity: 0.3;
  transition: all 0.15s ease-in;
}
.ct-chart-donut .ct-series {
  opacity: 0.7;
  transition: all 0.15s ease-in;
}

.ct-chart-donut .ct-series-a path {
  stroke: var(--transactionColor);
}

.ct-chart-donut .ct-series-b path {
  stroke: var(--burnColor);
}

.ct-chart-donut .ct-series-c path {
  stroke: var(--holdersColor);
}

.ct-chart-donut .ct-series-d path {
  stroke: var(--feeColor);
}
</style>
