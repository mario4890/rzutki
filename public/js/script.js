$(document).ready(function() {
    var $firstPlyerScore    = 501;
    var $secondPlyerScore   = 501;
    var player              = 1;
    var count               = 0;
    var $score;
    
    $('.js-scoreFirstPlayer').text($firstPlyerScore);
    $('.js-scoreSecondPlayer').text($secondPlyerScore);
    
    $('.js-score').click(function(e){
        e.stopPropagation();
        console.log($(this).attr('data-score'));
        if ( player === 1 ) {
            $score = $firstPlyerScore - $(this).attr('data-score');
            if ($score <= 0) {
                if ($(this).attr('data-score') == 50 || $(this).attr('data-score') == 40) {
                    alert('Wygrałeś / Wygrałaś');
                } else {
                    alert("Wynik musi być zakończony podwójnym trafieniem albo bullsaye");
                }
            } else {
                $firstPlyerScore = $score;
            }
            $('.js-scoreFirstPlayer').text($firstPlyerScore);
            count++;
            if (count === 3) {
                player++;
                count = 0;
                alert("Drugi gracz");
            }
        } else if ( player === 2 ) {
            $score = $secondPlyerScore - $(this).attr('data-score');
            if ($score <= 0) {
                if ($(this).attr('data-score') == 50 || $(this).attr('data-score') == 40) {
                    alert('Wygrałeś / Wygrałaś');
                } else {
                    alert("Wynik musi być zakończony podwójnym trafieniem albo bullsaye");
                }
            } else {
                $secondPlyerScore = $score;
            }
  
            $('.js-scoreSecondPlayer').text($secondPlyerScore);
            count++;
            if (count === 3) {
                player--;
                count = 0;
                alert("Pierwszy gracz");
            }
        }
        

    });
});


