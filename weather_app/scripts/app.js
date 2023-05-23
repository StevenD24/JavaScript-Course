const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

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
        .then(data => console.log(data))
        .catch(err => console.log(err));
});
