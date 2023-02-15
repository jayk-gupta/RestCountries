'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// ////////////////////////////////

const img = document.querySelector('.country__img');

const country = document.querySelector('.country');
const name= document.querySelector('.country__name');
const region = document.querySelector('.country__region');
const pop= document.querySelector('.country__pop');
const lang = document.querySelector('.country__lang');
const curr = document.querySelector('.country__curr');

// ////////////////////////////////
const input = document.querySelector('.input-box');
const submitBtn = document.querySelector('.submit');
///////////////////////////////////////
let inputCountry ;

submitBtn.addEventListener('click', function () {
  inputCountry = input.value;
  getCountryData(inputCountry);

})


const getCountryData = function (country) {

  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  // ///////////////
  request.send();
  console.log(request.responseText);
  // ///////////////
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // ///////////////

    img.src = data.flags.svg;
    name.textContent = data.name.common;
    region.textContent =data.region;
     pop.textContent =data.population;
    lang.textContent =Object.keys(data.languages);
    curr.textContent = Object.keys(data.currencies);
    
    countriesContainer.classList.add('hide');
    countriesContainer.removeChild(country);
  });
};




