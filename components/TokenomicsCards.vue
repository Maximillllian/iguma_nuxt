<template>
    <div class="cards">
        <div class="card">
            <div class="text"><b>Создан исходя из количества людей</b>, зарегистрированных на Земле - 7,9 миллиардов людей</div>
        </div>
        <div class="card">
            <div class="text"><b>Распределение от эмиссии:</b></div>
            <ul>
                <li>5%- маркетинговый кошелек</li>
                <li>1%-первичный AirDrop</li>
                <li>5%-dev кошелек</li>
                <li>1%-заблокированная ликвидность</li>
            </ul>
        </div>
        <div class="card">
            <div class="text"><b>Создан исходя из количества людей</b>, зарегистрированных на Земле - 7,9 миллиардов людей</div>
        </div>
    </div>
</template>

<style scoped>
.cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
}

.card {
    padding: 1rem;
    border: 1px solid var(--lightBorder);
    border-radius: 5px;
}

.text, ul li {
    font-size: 1.5rem;
}

ul {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    /* list-style: none; */
    /* padding: 0; */
}
</style>