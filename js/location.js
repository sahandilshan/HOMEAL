$(document).on('click', '.location', function () {
    let location = $(this).data('filtertext');
    console.log(location);
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
        user['location'] = location
        sessionStorage.setItem('user', JSON.stringify(user))
    } else {
        sessionStorage.setItem('location', location);
    }
    window.location.href = '/HOMEAL/home/Search.html';
});

$(document).ready(function () {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
        $('#selectLocation').text(user['location']);
    } else {
        $('#selectLocation').text(sessionStorage.getItem('location'));
    }
});
