$(function(){
    
    /*Losowanie liczby z przedziału 1 -100 */
    
    function randNum(from, to){
        
        return Math.floor((Math.random() * (to - from +1)) + from);
        
    }
 
    /* Przeliczanie waluty */
    
 $('.button').click(function(){
     
     var euroVal = $('.euro').val(); /* pobranie liczby z inputa */

     var exchangeRate = 4.2 * (1+(randNum(0, 100) * 50)/1000); /*wygenerowanie kursu EURO */
      
     var convert = euroVal * exchangeRate /* Przeliczenie inputa * kurs    */
     
     $('.convertion').append('<p class="convert-result result-title">PLN AMOUNT</p><p class="convert-result" id="result">' + convert.toFixed(2) + '</p>'); /* Dodanie do dokumentu HTML przeliczenia */
     
     var date = new Date(); /* Pobranie daty w formacie Fri May 12 2017 15:21:57 GMT+0200 (Środkowoeuropejski czas letni)*/

     
     var month = date.getMonth()+1; /* Wyciągnięcie miesiąca ze zmiennej date +1 ponieważ styczeń to 0 */
     var day = date.getDate(); /* Wyciągnięcie dnia ze zmiennej date */
     var hour = date.getHours(); /* Wyciągnięcie godziny ze zmiennej date */
     var minutes = date.getMinutes(); /* Wyciągnięcie minut ze zmiennej date */

         
     var newDate = date.getFullYear() + '.' +
         ((''+month).length<2 ? '0' : '') + month + '.' +
         ((''+day).length<2 ? '0' : '') + day + ' ' + ((''+hour).length<2 ? '0' : '') + hour + ':' + ((''+minutes).length<2 ? '0' : '') + minutes; /* Utworzenie nowego formatu daty: rok.miesiąc.dzień (jeśli miesiąć i dzień są jednocyfrowe to dodane zostanie zero na początku) oraz godzina 00:00 (tutaj również jeśli godzina i minuty są jednocyfrowe to dodane zostanie 0 z przodu) */ 
     
     $('.convertion').append('<div class="date"><img src="images/clock.png" alt="clock">' + ' ' + '<span class="date grey-text">' + newDate + '</span></div>'); /* Dodanie daty do dokumentu HTML */
     })
    
});


