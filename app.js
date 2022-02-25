$('#homepage-content').on('mouseover', ()=>{
    $('.fancy-border').css('opacity', '1');
    $('homepage-content').css('transform', 'scale(1.5)');
}).mouseleave(()=>{
    $('.fancy-border').css('opacity', '0');
})

let hamburgerCount = 0;

if ($(window).width() < 480) {
    $('#fixed-header').on('click', ()=>{
        console.log('hello?');
        console.log(hamburgerCount);
        hamburgerCount++;
        if (hamburgerCount % 2 !== 0) {
            $('#homepage-content h1').css('opacity', '0.3');
            $('.nav-bar').css('opacity', '0.9');
            $('#fixed-header img, header').css('z-index', '5');
        } else {
            $('#homepage-content h1').css('opacity', '1');
            $('.nav-bar').css('opacity', '0');
            $('#fixed-header img, header').css('z-index', '5');
        }
     })
}

console.log()

