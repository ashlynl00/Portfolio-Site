$('.skill-container').on('mouseover', ()=>{
    $('.skill-container').css('transform', 'scale(1.01)');
}).mouseleave(()=>{
    $('.skill-container').css('transform', 'scale(1)');
})

let hamburgerCount = 0;
// allow menu to appear at 480px or less
$('body').on('click','img', ()=>{
    console.log('hello?');
    console.log(hamburgerCount);
    hamburgerCount++;
    if (hamburgerCount % 2 !== 0) {
        $('.hidden-nav-bar').css('display', 'flex');
    } else {
        $('.hidden-nav-bar').css('display', 'none');
    }
});


// get values from contact form
$('#input-submit').on('click', ()=>{
    event.preventDefault();
    console.log('clicked submit');
    let $fName = $('#input-fname').val();
    let $lName = $('#input-lname').val();
    let $email = $('#input-email').val();
    let $subject = $('#input-subject').val();
    let $message = $('#input-message').val();
    if ($fName == '' || $lName == '' || $email == '' || $subject == '' || $message == '') {
        alert("Please fill required fields");
    } else {
        console.log($fName+$lName+$email+$subject+$message);
        $('#contact-page').append('<p>Your message has been received! I will contact you soon!</p>');
        let link = "mailto:ashlyn@downing.us" + $email + encodeURIComponent($subject) + encodeURIComponent($message);
        window.location.href = link;
    }
})



