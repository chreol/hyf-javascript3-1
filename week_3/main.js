let userUrl = 'https://api.github.com/users/';

let btn = document.getElementById('search');
btn.addEventListener('click', function() {

  console.log('Clicked');

  let input = document.getElementById('userName').value;
  console.log(input);

  if (input === '') {
    alert('Please enter user login');
  }

  fetch(`${userUrl}${input}`)
    .then(request => request.json())
    .then(userData => {

      console.log(userData);

      let userCard = document.getElementById('userCard');

      let userImg = document.createElement('img');
      userCard.appendChild(userImg);
      userImg.src = userData.avatar_url;

      let userName = document.createElement('h1');
      userCard.appendChild(userName);
      userName.innerHTML = userData.login;

      let id = document.createElement('p');
      userCard.appendChild(id);
      id.innerHTML = `ID: ${userData.id}`;
      

      fetch(userData.repos_url)
        .then(repos => repos.json())
        .then(listRepos => {

          let listOfRepos = document.createElement('h2');
          userReposList.appendChild(listOfRepos);
          listOfRepos.innerHTML = `${userData.login} repos list:`;

          listRepos.map(repo => {

            let userReposList = document.getElementById('userReposList');

            let repos = document.createElement('li');
            userReposList.appendChild(repos);
            repos.innerHTML = repo.name;
            console.log(repo.name);
          });
        })
    })
  
});