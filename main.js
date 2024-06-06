function showQuote(author) {
    const quotes = {
        aitmatov: 'Той, хто в біді кидає свій народ, стає його ворогом.',
        holbach: 'Де немає свободи, там немає і вітчизни.',
        shevchenko: 'В своїй хаті своя й правда, І сила, і воля.',
        pavlychko: 'Вітчизна — ось і альфа, і омега!',
        kostenko: 'Нації вмирають не від інфаркту. Спочатку їм відбирає мову.'
    };

    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[author];
}
