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

    var giorni = date.daysInMonth();
     console.log(giorni);

    //stampiamo con il ciclo for i numeri del mese

    for (var i = 1; i <= giorni; i++)
    {
      var liTemplate = $('#giorniMese li').clone();

      var lidate = date.format('MMM YYYY');

      liTemplate.text(i + ' ' + lidate);

      $('.container ul').append(liTemplate);
    }
  }

});

function call(date)
{
  $.ajax({
    url: 'https://holidayapi.com/v1/holidays',
    method: 'GET',
    data: {
      key: '6d29431d-847d-477b-b426-99c0f38d7a43',
      country: 'IT',
      month: date.format('MM'),
      year: date.format('YYYY')
    },
    success: function(data)
    {
      var holidays = data.holidays;
      $('li').each(function() {
        var text = $(this).text();

        var newDate = moment(text, 'D MMMM-YYYY');

        for (var i = 0; i < holidays.length; i++) {

          var holidayDate = holidays[i].date;

          console.log('datali:' + newDate.format('YYYY-MM-DD'));
          console.log('dataholiday:' + holidayDate);

          if (newDate.format('YYYY-MM-DD') == holidayDate) {
            $(this).addClass('active');
            $(this).append('-' + holidays[i].name);
          }

        }
      });
    },
    error: function()
    {
      alert('errore');
    }

  });
}
