let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4) {
        let employees = JSON.parse(xhr.responseText);
        let statusHTML = '<ul class="bulleted">';
        for( let i = 0; i < employees.length; i++) {
            if (employees[i].inoffice) {
                statusHTML += '<li class="in">'
            } else {
                statusHTML += '<li class="out">'
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET','data/employees.json');
xhr.send();

let xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = () => {
    if(xhr2.readyState === 4) {
        let rooms = JSON.parse(xhr2.responseText);
        let roomHTML = '<ul class="rooms">';
        for( let i = 0; i < rooms.length; i++) {
            if (rooms[i].available) {
                roomHTML += '<li class="empty">'
            } else {
                roomHTML += '<li class="full">'
            }
            roomHTML += rooms[i].room;
            roomHTML += '</li>';
        }
        roomHTML += '</ul>';
        console.log(roomHTML);
        document.getElementById('roomList').innerHTML = roomHTML;
    }
};
xhr2.open('GET','data/rooms.json');
xhr2.send();