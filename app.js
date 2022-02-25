$('#homepage-content').on('mouseover', ()=>{
    $('.fancy-border').css('opacity', '1');
}).mouseleave(()=>{
    $('.fancy-border').css('opacity', '0');
})

$('#fixed-header img').on('click', ()=>{
    $('.nav-bar').css('opacity', '1')
})

