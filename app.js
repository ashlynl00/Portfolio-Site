$('#homepage-content').on('mouseover', ()=>{
    $('.fancy-border').css('opacity', '1');
}).mouseleave(()=>{
    $('.fancy-border').css('opacity', '0');
})

let hamburgerCount = 0;

$('#fixed-header').on('click', ()=>{
    console.log('hello?');
    hamburgerCount++;
    if (hamburgerCount % 2 == 0) {
        $('.nav-bar').css('opacity', '0.9');
        $('#fixed-header img, header').css('z-index', '5');
    } else {
        $('.nav-bar').css('opacity', '0');
        $('#fixed-header img, header').css('z-index', '5');
    }
    
 })

