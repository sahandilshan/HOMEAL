$(document).on('click', '.location', function () {
    let location = $(this).data('filtertext');
    console.log(location);
    let user = JSON.parse(sessionStorage.getItem('user'));
    let users = JSON.parse(sessionStorage.getItem('users'));
    if (user) {
        user['location'] = location
        users.forEach(function (user_) {
            if (user_['user_id'] === user['user_id']) {
                user_['location'] = location;
                return false;
            }
        });
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('users', JSON.stringify(users));
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
