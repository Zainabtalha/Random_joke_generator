const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
        .then(response => response.json())
        .then(data => {
            jokeContainer.textContent = data.joke;
            jokeContainer.classList.add("fade");
        });
};

btn.addEventListener("click", getJoke);
getJoke();
