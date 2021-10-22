const user = {
    github: "charles-mrt",
    avatar: "assets/images/github-avatar.jpg",
    bio: "Next Level Week"
}

/**
 * get user profile from github
 * add user profile to badge;
 * **/

function getGitHubProfileInfos() {

    const url = `https://api.github.com/users/${user.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            user_name.textContent = data.name;
            user_bio.textContent = data.bio ?? user.bio;
            user_link.href = data.html_url;
            user_nickname.textContent = data.login;
            user_avatar.src = data.avatar_url ?? user.avatar;
        });


} getGitHubProfileInfos()