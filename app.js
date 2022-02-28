$('.skill-container').on('mouseover', ()=>{
    $('.skill-container').css('transform', 'scale(1.01)');
}).mouseleave(()=>{
    $('.skill-container').css('transform', 'scale(1)');
})

let hamburgerCount = 0;

// if ($(window).width() < 480) {
//     $('#fixed-header').on('click', ()=>{
//         console.log('hello?');
//         console.log(hamburgerCount);
//         hamburgerCount++;
//         if (hamburgerCount % 2 !== 0) {
//             $('#homepage-content h1').css('opacity', '0.3');
//             $('.nav-bar').css('opacity', '0.9');
//             $('#fixed-header #hamburger, header').css('z-index', '5');
//         } else {
//             $('#homepage-content h1').css('opacity', '1');
//             $('.nav-bar').css('opacity', '0');
//             $('#fixed-header #hamburger, header').css('z-index', '5');
//         }
//      })
// }

console.log()

