const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
    

    const cityDetails = data.cityDetails;
    const weather = data.weather;

    // update the details template
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather[0].WeatherText}</div>
    <div class="display-4 my-4">
        <div>
            <span>${weather[0].Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
        <hr>
        <div>
            <span>${weather[0].Temperature.Imperial.Value}</span>
            <span>&deg;F</span>
        </div>
    </div>
`;

    // remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    // object shorthand notation
    return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {

    // prevent default action
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    // reset form after submitting
    cityForm.reset();

    // update the ui with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});
