let gitUrl = 'https://api.github.com/orgs/HackYourFuture/repos';
console.log(gitUrl);

let btn = document.getElementById('btn');
let outputData = document.getElementById('output');
let resetBtn = document.getElementById('resetBtn');


btn.addEventListener('click', testBtn);
resetBtn.addEventListener('click', resetPage);

function resetPage() {
  window.location.reload();
}

(function() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', gitUrl, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {

      let urlData = JSON.parse(xhr.responseText);
      let listRepo = urlData.map(linkName => ` ${linkName.name}`);
      console.log(listRepo);

      let outputData = document.getElementById('output');
      outputData.innerHTML = `<h3>Repo list: </h3>${listRepo}`;
    }
  }
  xhr.send();
})();

function testBtn() {
  console.log(`you clicked me`);

  typingName();
}

function typingName() {
  let userInput = document.getElementById('search').value;
  console.log(`User typed in: ${userInput}`);
  searchTerm(userInput);
}

function searchTerm(term) {
  let requstLink = `https://api.github.com/repos/HackYourFuture/${term}`;
  let outputData = document.getElementById('output');
  if (term === '') {
    alert(`Please enter repo name`);
  } else {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', requstLink, true);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {

        let urlData = JSON.parse(xhr.responseText);
        console.log(urlData);

        outputData.innerHTML = `result: <a href="${urlData.html_url}" target="_blank">${term}</a>`;
        createDOM(urlData);
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        alert(`Wrong name, enter correct repo name`);
      }
    } 
  }
}
function createDOM(linkname) {

  fetch(linkname.contributors_url)
    .then(request => request.json())
    .then(response => {

      let wrap = document.createElement('div');
      document.body.appendChild(wrap);
      wrap.style.display = 'flex';
      wrap.style.flexFlow = 'row wrap';
      
      response.map(author => {

        let div = document.createElement('div');
        let img = document.createElement('img');
        let h4 = document.createElement('h4');

        img.src = author.avatar_url;
        h4.innerHTML = `${author.login}`;
        
        wrap.appendChild(div);
      
        div.style.display = 'flex';
        div.style.flexBasis = '200px';
        
        div.appendChild(img);
        img.style.width = '75px';
        img.style.height = '75px';

        div.appendChild(h4);
        h4.style.padding = '15px';
      })
    })
}
