// Creare un calendario dinamico con le festività, selezionando da un menu una delle nazioni disponibili nell’API. Partiamo dal gennaio 2017 dando la possibilità di cambiare mese, gestendo il caso in cui l’API non possa ritornare festività.


// LIbreria Date: https://momentjs.com/ (js base: https://momentjs.com/downloads/moment.min.js)
// Holiday API: https://holidayapi.com/ (required params: key, country, year, month)


$(document).ready(function() {

  var date = moment('2017-01-01');
  printList(date);

  $('.successivo').click(function()
 {
    date = date.add(1,'month');
 });

});

// Creiamo la funzione printlist()

function printList(date) {

  $('.container .title').text(date.format('MMMMM YYYY'));

  var giorniMese = date.giorniMese();

  //stampiamo con il ciclo for i numeri del mese

  for (var i = 1; i <= giorniMese.length; i++)
  {
    var itemTemplate = $('.template li').clone();

    itemTemplate.text(i + ' ' + date.format('MMM'));

    $('.container ul').append(itemTemplate);
  }
}
