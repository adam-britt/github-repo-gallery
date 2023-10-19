const overview = document.querySelector(".overview"); // div containing profile info
const username = "adam-britt"; // username

const reposList = document.querySelector(".repo-list"); // ul containing repos

const getUserInfo = async function() {
    const userInfo = await fetch(`https://api.github.com/users/${username}`);
    const data = await userInfo.json();
    console.log(data);
    displayUserInfo(data);
};

getUserInfo();

const displayUserInfo = function(data) {
    const div = document.createElement("div");
    div.classList.add("user-info");                             // data.avatar_url
    div.innerHTML = `
        <figure>
            <img alt="user avatar" src=${data.avatarurl} />
        </figure>
        <div>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Bio:</strong> ${data.bio}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Number of Public Repos:</strong> ${data.public_repos}</p>
        </div>
    `;
    overview.append(div);
    getRepos();
};



const getRepos = async function() {
    const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const repoData = await fetchRepos.json();
    console.log(repoData);
    displayRepos(repoData);
};

const displayRepos = function(repos) {
    for(const repo of repos) {
        const repoItem = document.createElement("li");
        repoItem.classList.add("repo");
        repoItem.innerHTML = `<h3>${repo.name}</h3>`;
        reposList.append(repoItem);
    }
};