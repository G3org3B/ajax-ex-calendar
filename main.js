// Creare un calendario dinamico con le festività, selezionando da un menu una delle nazioni disponibili nell’API. Partiamo dal gennaio 2017 dando la possibilità di cambiare mese, gestendo il caso in cui l’API non possa ritornare festività.


// LIbreria Date: https://momentjs.com/ (js base: https://momentjs.com/downloads/moment.min.js)
// Holiday API: https://holidayapi.com/ (required params: key, country, year, month)


$(document).ready(function() {

  var date = moment('2017-11-01');
  printList(date);
  call(date);

  $('.precedente').click(function()
 {
    date = date.add(1,'months');
 });

 $('.successivo').click(function() {

   if (date.format('YYYY MMM') == '2018 Nov') {
     alert('Il mese selezionato è aldilà di quello che possiamo vedere... ');

   }
   else {
     date = date.add(1, 'months');
     printList(date);
     call(date);
   }

});

// Creiamo la funzione printlist()

function printList(date) {

  $('.title h1').text(date.format('MMMM YYYY'));
  $('ul').html('');

  var giorni = date.giorniDelMese();
   console.log(giorni);

  //stampiamo con il ciclo for i numeri del mese

  for (var i = 1; i <= giorni; i++)
  {
    var liTemplate = $('#giorniMese li').clone();

    var lidate = date.format('MMMM-YYYY');

    liTemplate.text(i + ' ' + lidate);

    $('.container ul').append(liTemplate);
  }
}
