/**
 * Created by Aaron on 10/31/2015.
 */
var ctr1 = 0;
$('.pattern-1').click(function() {
    if(ctr1 === 0){
        $('body').addClass('pat-1');
        $('.pattern-1').addClass('pattern-hightlight');
        ctr1++;
    }else {
        $('body').removeClass('pat-1');
        $('.pattern-1').removeClass('pattern-hightlight');
        ctr1--;
    }
});

var ctr2 = 0;
$('.pattern-2').click(function() {
    if(ctr2 === 0){
        $('body').addClass('pat-2');
        $('.pattern-2').addClass('pattern-hightlight');
        ctr2++;
    }else {
        $('body').removeClass('pat-2');
        $('.pattern-2').removeClass('pattern-hightlight');
        ctr2--;
    }
});

var ctr3 = 0;
$('.pattern-3').click(function() {
    if(ctr3 === 0){
        $('body').addClass('pat-3');
        $('.pattern-3').addClass('pattern-hightlight');
        ctr3++;
    }else {
        $('body').removeClass('pat-3');
        $('.pattern-3').removeClass('pattern-hightlight');
        ctr3--;
    }
});

var imgLink = 'img/profileHolder/';
var ara = ['vader-profile.jpg', 'trooper-profile.jpg', 'fet-profile.jpg'];
var randomImage = ara[Math.floor(Math.random()*ara.length)];

$('img[alt="placeholder"]').attr('src', imgLink + randomImage);

if(randomImage === 'vader-profile.jpg'){
    $('figure h2').text('Darth Vader');
    $('figure h3:nth-child(3)').text('Psychology');
    $('figure h3:nth-child(4)').text('$-100');
}else if(randomImage === 'trooper-profile.jpg'){
    $('figure h2').text('TK421');
    $('figure h3:nth-child(3)').text('Electrical Engineering');
    $('figure h3:nth-child(4)').text('$66');
}else if(randomImage === 'fet-profile.jpg'){
    $('figure h2').text('Boba Fett');
    $('figure h3:nth-child(3)').text('Outdoor Recreation');
    $('figure h3:nth-child(4)').text('$4000');
}
