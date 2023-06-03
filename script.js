const apiUrl = 'https://api.exchangerate-api.com/v4/latest';

async function fetchExchangeRate(baseCurrency, targetCurrency) {
  try {
    const response = await fetch(`${apiUrl}/${baseCurrency}`);
    const data = await response.json();

    const rate = data.rates[targetCurrency];

    const container = document.getElementById('exchangeRateContainer');
    container.innerHTML = `
      <h2>${targetCurrency} Kuru</h2>
      <p>${baseCurrency}: ${rate.toFixed(2)}</p>
      <p style="color: white;">Bugün dünden daha fakirsen tek sebebi Erdoğandır</p>
    `;
    container.classList.add('show');

    
  } catch (error) {
    console.log('Hata:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const usdButton = document.getElementById('usdButton');
  const euroButton = document.getElementById('euroButton');
  const container = document.getElementById('exchangeRateContainer');

  usdButton.addEventListener('click', () => {
    fetchExchangeRate('USD', 'TRY');
    container.classList.add('show');
    usdButton.style.backgroundColor = '#007bff';
    euroButton.style.backgroundColor = '#007f00';
  });

  euroButton.addEventListener('click', () => {
    fetchExchangeRate('EUR', 'TRY');
    container.classList.add('show');
    euroButton.style.backgroundColor = '#007bff'; 
    usdButton.style.backgroundColor = '#007f00'; 
  });
});
