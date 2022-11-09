/* Imports */
// Slice A: import getCountries from fetch-utils.js
import { getCountries, getContinents } from './fetch-utils.js';
// Slice B: import getContinents from fetch-utils.js
import { renderContinentOption, renderCountry } from './render-utils.js';

/* Get DOM Elements */
const countryList = document.getElementById('country-list');
const searchForm = document.getElementById('search-form');
const continentSelect = document.getElementById('continent-select');

/* State */
let countries = [];
let continents = [];

/* Events */
window.addEventListener('load', async () => {
    // call findCountries function with no arguments to fetch all countries (Slice A);

    findCountries();
    const continentsResponse = await getContinents();
    continents = continentsResponse.data;
    displayContinentOptions();
    // Slice B: call asynchronous getContinents fetch function and set to response variable
    // Slice B: set the continents state to the response.data
    // Slice B: call displayContinentOptions function;
});

async function findCountries(continent) {
    // Slice A: call the asynchronous fetch function to get the countries
    const response = await getCountries(continent);
    countries = response.data;
    displayCountries();
    // Slice C: add continent argument to getCountries function call
    // console log the response object to see all of the nested information returned
    // Slice A: set the countries state to the response.data
    // Slice A: call displayCountries function;
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    // Slice C: Call findCountries with continent from formData
});

/* Display Functions */
function displayCountries() {
    countryList.innerHTML = '';
    //Slice A: reset the countries List

    for (const country of countries) {
        const countryEl = renderCountry(country);
        countryList.append(countryEl);
        // Slice A: Call imported render countries function and append to list
    }
}

function displayContinentOptions() {
    for (const continent of continents) {
        const continentEl = renderContinentOption(continent);
        continentSelect.append(continentEl);
        // Slice B: Call continent render function and append to continent selector
    }
}
