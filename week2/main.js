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
  console.log("Rendering repo page");

  let h4 = document.createElement('h4');
  document.body.appendChild(h4);
  h4.innerHTML = `Contributors: <a href="${linkname.contributors_url}" target="_blank">open in new tab</a>`;
  console.log(h4.innerHTML);
}
