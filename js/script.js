const overview = document.querySelector(".overview"); // div containing profile info
const username = "adam-britt"; // username

const getUserInfo = async function() {
    const userInfo = await fetch(`https://api.github.com/users/${username}`);
    const data = await userInfo.json();
    console.log(data);
    displayUserInfo(data);
};

getUserInfo();

const displayUserInfo = function(data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = 
        `<figure>
            <img alt="user avatar" src=${} />
        </figure>
        <div>
            <p><strong>Name:</strong> ${}</p>
            <p><strong>Bio:</strong> ${}</p>
            <p><strong>Location:</strong> ${}</p>
            <p><strong>Number of public repos:</strong> ${}</p>
        </div>`
};

<div></div>

