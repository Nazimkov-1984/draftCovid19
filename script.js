fetch('https://api.covid19api.com/summary')
.then((response) => {
  return response.json();
})
.then((data) => {  
  const countries = [];
  const count = [];
  const button = document.querySelector('.button');
  const search = document.querySelector('.input');
 
 
 

  for (i = 0; i< data.Countries.length; i++ ){
    countries[i] = data.Countries[i].Country;
    count[i] = data.Countries[i].TotalConfirmed;
  }
button.addEventListener('click', () => {
  const searchCountry = search.value;
  fetch (`https://api.covid19api.com/live/country/${searchCountry}/status/confirmed/date/2020-03-21T13:13:30Z`)
  .then((response) => {
    return response.json();
  })
  .then((datas) => {
      const country = document.createElement('p');
      const confirm = document.createElement('p');
      const deaths = document.createElement('p');
      const recovered = document.createElement('p');
      const wrap = document.querySelector('.wrap');
      console.log(datas);
      country.textContent = ` Country: ${datas[0].Country}`;
      confirm.textContent = ` Confirmed: ${datas[0].Confirmed}`;
      deaths.textContent = ` Deaths: ${datas[0].Deaths}`;
      recovered.textContent = ` Recovered: ${datas[0].Recovered}`;
      wrap.append(country, confirm, deaths, recovered);
      
  });
});

  
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: countries,
        datasets: [{
            label: 'Covid 19 in world',
            backgroundColor: 'red',
            borderColor: 'red',
            data: count
        }]
    },

    // Configuration options go here
    options: {
      
      legend: {
        labels: {
         fontSize: 12,
         boxWidth: 80,
         padding: 10
        }
      }
    }
});
    
});
var mapOptions = {
  center: [17.385044, 78.486671],
  zoom: 10
}


let mymap = L.map('mapid').setView([51.505, -0.24], 13);
