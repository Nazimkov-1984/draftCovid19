fetch('https://api.covid19api.com/summary')
.then((response) => {
  return response.json();
})
.then((data) => {
  //console.log (data);
  const par = document.createElement('p');
  const body = document.querySelector('body');
  const ul= document.createElement('ul');
  const countries = [];
  const count = [];
  par.textContent = `Всего новых подтвежденных в мире случаев Covid19: ${data.Global.NewConfirmed}`;
  body.appendChild(par);
  for (i = 0; i< data.Countries.length; i++ ){
    const lishka= document.createElement('li');
    lishka.textContent = `${data.Countries[i].Country} - Новые подтверженные: ${data.Countries[i].NewConfirmed}чел.____Всего подтвежденных: ${data.Countries[i].TotalConfirmed}чел.____ Всего умерло: ${data.Countries[i].TotalDeaths}чел.  `
    ul.appendChild(lishka);
    countries[i] = data.Countries[i].Country;
    count[i] = data.Countries[i].TotalConfirmed;
  }
  body.appendChild(ul);
  
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