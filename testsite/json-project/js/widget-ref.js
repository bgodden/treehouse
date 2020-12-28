// const getData = (method, url) => {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             let payloadObj = JSON.parse(xhr.responseText);
//             return payloadObj;
//         }
//     };
//     xhr.open(method, url);
//     xhr.send();
// };

const createList = (dataSet, classForUl, trueCase, ClassForTrue, ClassForFalse, itemName) => {
    console.log(`dataSet: ${dataSet}`);
    console.log(`classForUl: ${classForUl}`);
    console.log(`trueCase: ${trueCase}`);
    console.log(`ClassForTrue: ${ClassForTrue}`);
    console.log(`ClassForFalse: ${ClassForFalse}`);
    console.log(`itemName: ${itemName}`);
    let insertHTML = `<ul class=${classForUl}>`;
    for (let i = 0; i < dataSet.length; i++) {
        if (dataSet[i].trueCase) {
            insertHTML += `<li class=${ClassForTrue}>`
        } else {
            insertHTML += `<li class=${ClassForFalse}>`
        }
        insertHTML += dataSet[i].itemName;
        insertHTML += '</li>';
    }
    insertHTML += '</ul>';
    return insertHTML;
};

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        const employees = JSON.parse(xhr.responseText);
        // console.log(employees);
        const employeeHTML = createList(employees, 'bulleted', 'inoffice', 'in', 'out', 'name');
        console.log(`employeeHTML: ${employeeHTML}`);
        // document.getElementById('employeeList').innerHTML = createList(employees, 'bulleted', 'inoffice', 'in', 'out', 'name');
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();
//const employees = getData('GET', 'data/employees.json');
// const listHTML = createList(employees, 'bulleted', 'inoffice', 'in', 'out', 'name');
// document.getElementById('employeeList').innerHTML = listHTML;
// let rooms = getData('GET', 'data/rooms.json');
// console.log(rooms);
// document.getElementById('roomList').innerHTML = createList(rooms, 'rooms', 'available', 'empty', 'full', 'room');
