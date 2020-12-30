const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Make an AJAX request
function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if(xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
      callback(data);
    }
  };
  xhr.send();
}

function getProfiles(json) {
  json.people.map( person  => {
    getJSON(wikiUrl + person.name, generateHTML);
  });
}

// Generate the markup for each profile
function generateHTML(data) {
  const section = document.createElement('section');
  peopleList.appendChild(section);
  section.innerHTML += `
    <img src="${data.thumbnail.source}">
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.extract}</p>
  `;
}

btn.addEventListener('click', (event) => {
  getJSON(astrosUrl, getProfiles);
  event.target.remove();
});

// Disambiguous

// {
//   "type": "disambiguation",
//     "title": "Victor Glover",
//     "displaytitle": "Victor Glover",
//     "namespace": {
//   "id": 0,
//       "text": ""
// },
//   "wikibase_item": "Q16460610",
//     "titles": {
//   "canonical": "Victor_Glover",
//       "normalized": "Victor Glover",
//       "display": "Victor Glover"
// },
//   "pageid": 23557595,
//     "lang": "en",
//     "dir": "ltr",
//     "revision": "959443120",
//     "tid": "ce392a80-03bc-11eb-ba5f-d3801b8b9a4e",
//     "timestamp": "2020-05-28T20:16:30Z",
//     "description": "Disambiguation page providing links to topics that could be referred to by the same search term",
//     "description_source": "local",
//     "content_urls": {
//   "desktop": {
//     "page": "https://en.wikipedia.org/wiki/Victor_Glover",
//         "revisions": "https://en.wikipedia.org/wiki/Victor_Glover?action=history",
//         "edit": "https://en.wikipedia.org/wiki/Victor_Glover?action=edit",
//         "talk": "https://en.wikipedia.org/wiki/Talk:Victor_Glover"
//   },
//   "mobile": {
//     "page": "https://en.m.wikipedia.org/wiki/Victor_Glover",
//         "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Victor_Glover",
//         "edit": "https://en.m.wikipedia.org/wiki/Victor_Glover?action=edit",
//         "talk": "https://en.m.wikipedia.org/wiki/Talk:Victor_Glover"
//   }
// },
//   "extract": "Victor Glover may refer to:Horace Glover (1883–1967), also known by middle name Victor, English footballer\nVictor J. Glover, NASA astronaut\nSir Victor Glover (judge) (1932–2020), Chief Judge, Mauritius\n",
//     "extract_html": "<p><b>Victor Glover</b> may refer to:</p><ul><li>Horace Glover (1883–1967), also known by middle name Victor, English footballer</li>\n<li>Victor J. Glover, NASA astronaut</li>\n<li>Sir Victor Glover (judge) (1932–2020), Chief Judge, Mauritius</li></ul>\n"
// }

// Correct Response
// {
//   "type": "standard",
//     "title": "Sergey Kud-Sverchkov",
//     "displaytitle": "Sergey Kud-Sverchkov",
//     "namespace": {
//   "id": 0,
//       "text": ""
// },
//   "wikibase_item": "Q26776784",
//     "titles": {
//   "canonical": "Sergey_Kud-Sverchkov",
//       "normalized": "Sergey Kud-Sverchkov",
//       "display": "Sergey Kud-Sverchkov"
// },
//   "pageid": 63560152,
//     "thumbnail": {
//   "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jsc2020e032664.jpg/213px-Jsc2020e032664.jpg",
//       "width": 213,
//       "height": 320
// },
//   "originalimage": {
//   "source": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jsc2020e032664.jpg",
//       "width": 1041,
//       "height": 1562
// },
//   "lang": "en",
//     "dir": "ltr",
//     "revision": "996765190",
//     "tid": "6f1075f0-4916-11eb-ad64-d54ddd43ebbc",
//     "timestamp": "2020-12-28T14:10:20Z",
//     "description": "Russian engineer and cosmonaut",
//     "description_source": "local",
//     "content_urls": {
//   "desktop": {
//     "page": "https://en.wikipedia.org/wiki/Sergey_Kud-Sverchkov",
//         "revisions": "https://en.wikipedia.org/wiki/Sergey_Kud-Sverchkov?action=history",
//         "edit": "https://en.wikipedia.org/wiki/Sergey_Kud-Sverchkov?action=edit",
//         "talk": "https://en.wikipedia.org/wiki/Talk:Sergey_Kud-Sverchkov"
//   },
//   "mobile": {
//     "page": "https://en.m.wikipedia.org/wiki/Sergey_Kud-Sverchkov",
//         "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Sergey_Kud-Sverchkov",
//         "edit": "https://en.m.wikipedia.org/wiki/Sergey_Kud-Sverchkov?action=edit",
//         "talk": "https://en.m.wikipedia.org/wiki/Talk:Sergey_Kud-Sverchkov"
//   }
// },
//   "extract": "Sergey Vladimirovich Kud-Sverchkov was born on 23 August 1983 at the Baikonur Cosmodrome in the Kazakh Soviet Socialist Republic. Sergey Kud-Sverchkov is married and the father of one daughter and one son. Since April 2010, he has been a Russian cosmonaut with the Russian Space Agency Roscosmos. He is currently in space aboard the International Space Station as a flight engineer for ISS Expedition 63/64. This is his first spaceflight.",
//     "extract_html": "<p><b>Sergey Vladimirovich Kud-Sverchkov</b> was born on 23 August 1983 at the Baikonur Cosmodrome in the Kazakh Soviet Socialist Republic. Sergey Kud-Sverchkov is married and the father of one daughter and one son. Since April 2010, he has been a Russian cosmonaut with the Russian Space Agency Roscosmos. He is currently in space aboard the International Space Station as a flight engineer for ISS Expedition 63/64. This is his first spaceflight.</p>"
// }