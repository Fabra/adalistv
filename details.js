document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serieData = urlParams.get('serie');
    if (!serieData) {
        console.error("No se encontraron datos de la serie.");
        return;
    }

    const serie = JSON.parse(decodeURIComponent(serieData));

    document.getElementById("serie-title").textContent = serie.title;
    document.getElementById("serie-image").src = serie.image;
    document.getElementById("serie-image").alt = serie.title;
    document.getElementById("serie-name").textContent = serie.title;

    const episodesList = document.getElementById("episodes-list").querySelector("ul");
    serie.episodes.forEach((episode) => {
        const episodeItem = document.createElement("li");
        episodeItem.innerHTML = `<a href="${episode.url}" target="_blank">${episode.title}</a>`;
        episodesList.appendChild(episodeItem);
    });
});
