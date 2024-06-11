document.addEventListener("DOMContentLoaded", () => {
    const seriesList = [
        {
            title: "Haikyu!!",
            image: src="images/splash-art/HaikyuSplashArt.jpe", // URL de imagen de ejemplo
            episodes: [
                { title: "Episodio 1 - El fin y el principio", url: "https://ok.ru/videoembed/8147502566124", description: "" },
                { title: "Episodio 2 - Club de Voleibol de la Preparatoria Karasuno", url: "https://ok.ru/videoembed/8147502435052", description: "" },
                {title: "Episodio 3, 4 y 5 - El mejor aliado - La vista desde la cima - El nerviosismo de un cobarde", url: "https://ok.ru/videoembed/8147502631660", description: ""},
                {title: "Episodio 6, 7 y 8 - Un equipo interesante - Contra el Gran Rey - Aquel a quien llaman 'estrella' - Un pase para la estrella", url: "https://ok.ru/videoembed/8147502500588", description: ""},
                {title: "Episodio 8, 9, 10 y 11 - Aquel a quien llaman 'estrella' - Un pase para la estrella - Anhelo - Decisión", url: "https://ok.ru/videoembed/8156558527212", description: ""},
                {title: "Episodio 12, 13 y 14 - La reunión de gatos y cuervos - Rival - Oponentes formidables", url: "https://ok.ru/videoembed/8177718332140", description: ""},
                {title: "Episodio 15, 16 y 17 - Renacimiento - Vencedores y vencidos - El Muro de Acero", url: "https://ok.ru/videoembed/8197447944940", description: ""},
                {title: "Episodio 18, 19, 20 y 21 - Cubriendo tu espalda - Directores - Toru Oikawa no es un genio - Toru Oikawa no es un genio", url: "https://ok.ru/videoembed/8217531910892", description: ""},
                {title: "Episodio 22, 23 y 24 - «Evolución» «El punto que cambia la corriente» «Retirando al rey solitario»", url: "https://ok.ru/videoembed/8237407996652", description: ""},
                {title: "Episodio 25", url: "https://ok.ru/videoembed/8254411442924", description: ""},
                {title: "Episodio 26", url: "https://ok.ru/videoembed/8254496508652", description: ""}
            ]
        },
        {
            title: "Frieren",
            image: src="images/splash-art/FrierenSplashArt.jpe", // URL de imagen de ejemplo
            episodes: [
                { title: "Episodio 1", url: "https://ok.ru/videoembed/8146988501740", description: "Descripción del episodio 1" },
                { title: "Episodio 2 y 3", url: "https://ok.ru/videoembed/8146988567276", description: "Descripción del episodio 2" },
                {title: "Episodio 4 y 5", url: "https://ok.ru/videoembed/8146988436204", description: ""},
                {title: "Episodio 6 y 7", url: "https://ok.ru/videoembed/8146988370668", description: ""},
                {title: "Episodio 8, 9 y 10", url: "https://ok.ru/videoembed/8164749544172", description: ""},
                {title: "Episodio 11, 12 y 13", url: "https://ok.ru/videoembed/8183654058732", description: ""},
                {title: "Episodio 14 y 15", url: "https://ok.ru/videoembed/8217494096620", description: ""},
                {title: "Episodio 16, 17 y 18", url: "https://ok.ru/videoembed/8219930200812", description: ""},
                {title: "Episodio 19, 20 y 21", url: "https://ok.ru/videoembed/8240564407020", description: ""},
                {title: "Episodio 22, 23 y 24", url: "https://ok.ru/videoembed/8261696162540", description: ""},
                {title: "Episodio 25 y 26", url: "https://ok.ru/videoembed/8278095563500", description: ""}
            ]
        },
        {
            title: "Si ODIAS a OBITO UCHIHA, este video es para vos",
            image: "https://i.ytimg.com/vi/89Nh-ZP279A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYvunzL2sTVzR5vx-MBt81kvuyQQ",
            episodes: [
                {title: "Video de YouTube", url: "https://youtu.be/89Nh-ZP279A?si=8kP7NUiILrwt0ak5", description: ""}
            ]
        },
        {
            title: "Naruto Shippuden: Road to ninja (pelicula)",
            image: src="images/splash-art/NarutoRoadToNinjaSplashArt.jpe",
            episodes: [
                {title: "Naruto Shippuden: Road to ninja", url: "https://ok.ru/videoembed/8168202242796", description: ""}
            ]
        },
        {
            title: "Superbad",
            image: src="images/splash-art/SuperbadSplashArt.jpg",
            episodes: [
                {title: "Superbad", url: "https://ok.ru/videoembed/8162930920172", description: ""}
            ]
        },
        {
            title: "Tate no Yuusha no Nariagari",
            image: src="images/splash-art/TateNoYuushaNoNariagariSplashArt.jpe",
            episodes: [
                {title: "Episodio 1 y 2", url: "https://ok.ru/videoembed/8047046363884", description: ""},
                {title: "Episodio 3, 4, 5 y 6", url: "https://ok.ru/videoembed/8047115963116", description: ""},
                {title: "Episodio 7, 8 y 9", url: "https://ok.ru/videoembed/8047188052716", description: ""},
                {title: "Episodio 10 y 11", url: "https://ok.ru/videoembed/8047419722476", description: ""},
                {title: "Episodio 12, 13, 14 y 15", url: "https://ok.ru/videoembed/8047452818156", description: ""},
                {title: "Episodio 16, 17 y 18", url: "https://ok.ru/videoembed/8047463697132", description: ""},
                {title: "Episodio 19 y 20", url: "https://ok.ru/videoembed/8047463762668", description: ""},
                {title: "Episodio 21 y 22", url: "https://ok.ru/videoembed/8144685632236", description: ""},
                {title: "Episodio 23, 24 y 25", url: "https://ok.ru/videoembed/8144685697772", description: ""}
            ]
        },
        {
            title: "",
            image: "https://via.placeholder.com/300x150",
            episodes: [
                {title: "", url: "", description: ""}
            ]
        },
        {
            title: "",
            image: "https://via.placeholder.com/300x150",
            episodes: [
                {title: "", url: "", description: ""}
            ]
        },
        {
            title: "",
            image: "https://via.placeholder.com/300x150",
            episodes: [
                {title: "", url: "", description: ""}
            ]
        }
    ];

    const seriesListContainer = document.getElementById("series-list");

    if (!seriesListContainer) {
        console.error("No se encontró el contenedor de la lista de series.");
        return;
    }

    seriesList.forEach((serie, index) => {
        const serieDiv = document.createElement("div");
        serieDiv.className = "serie";
        serieDiv.innerHTML = `
            <img src="${serie.image}" alt="${serie.title}">
            <h3>${serie.title}</h3>
        `;
        serieDiv.addEventListener("click", () => {
            const serieData = encodeURIComponent(JSON.stringify(serie));
            window.location.href = `serie.html?serie=${serieData}`;
        });
        seriesListContainer.appendChild(serieDiv);
    });

    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        const series = document.querySelectorAll(".serie");
        series.forEach((serie) => {
            const title = serie.querySelector("h3").textContent.toLowerCase();
            if (title.includes(filter)) {
                serie.style.display = "";
            } else {
                serie.style.display = "none";
            }
        });
    });
});

function goToSerieDetails(title, image, episodes) {
    const serieData = {
        title,
        image,
        episodes
    };
    const url = `details.html?serie=${encodeURIComponent(JSON.stringify(serieData))}`;
    window.location.href = url;
}
