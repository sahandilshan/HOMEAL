$(document).on('click', '.location', function () {
    let location = $(this).data('filtertext');
    console.log(location);
    let user = JSON.parse(sessionStorage.getItem('user'));
    user['location'] = location
    sessionStorage.setItem('user', JSON.stringify(user))
    window.location.href = '/HOMEAL/home/Search.html';
});

$(document).ready(function () {
    let user = JSON.parse(sessionStorage.getItem('user'));
 $('#selectLocation').text(user['location']);
});
