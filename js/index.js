document.getElementById('toggleButton').addEventListener('click', function() {


    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
});


$(window).on('load', function () {
    $('.loader').fadeOut('slow', function () {
        $('navbar-container').fadeIn('slow');
    });
});
