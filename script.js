
fetch('https://api.covid19api.com/summary')
.then((response) => {
  return response.json();
})
.then((data) => {
  //console.log (data);
  const par = document.createElement('p');
  const body = document.querySelector('body');
  const ul= document.createElement('ul');

  par.textContent = `Всего новых подтвежденных в мире случаев Covid19: ${data.Global.NewConfirmed}`;
  body.appendChild(par);
  for (i = 0; i< data.Countries.length; i++ ){
    const lishka= document.createElement('li');
    lishka.textContent = `${data.Countries[i].Country} - Новые подтверженные: ${data.Countries[i].NewConfirmed}чел.____Всего подтвежденных: ${data.Countries[i].TotalConfirmed}чел.____ Всего умерло: ${data.Countries[i].TotalDeaths}чел.  `
    ul.appendChild(lishka);
  }
  body.appendChild(ul);
  console.log(data.Countries.length);
  
    
});