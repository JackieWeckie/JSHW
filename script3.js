async function fetchCities() {
        const response = await fetch('city.json');
        return await response.json();
}

function filterCities(minPopulation, maxPopulation) {
        fetchCities().then(cities => {
                const filteredCities = cities.filter(city => city.population >= minPopulation && city.population < maxPopulation);
                displayCities(filteredCities);
        });
}

function displayCities(cities) {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        if (cities.length === 0) {
                outputDiv.innerHTML = 'Нет городов в этом диапазоне.';
        } else {
                cities.forEach(city => {
                        const cityDiv = document.createElement('div');
                        cityDiv.textContent = `${city.city}: ${city.population} жителей`;
                        outputDiv.appendChild(cityDiv);
                });
        }
}