const cityList = document.getElementById("city-list");
const button = document.getElementById("bttn");

function myPromise() {
    return new Promise((res, rej) => {
        fetch("https://api.npoint.io/7bbd3a59c401f616bb89")
            .then((response) => response.json())
            .then((data) => res(data.places))
            .catch((err) => rej(console.log("Error :", err)));
    });
}
let onRes = (data) => {
    console.log(data);
    const cityCard = document.createElement("div");
    cityCard.classList.add("city-card");
    cityCard.innerHTML = `
        <h1 class="city-name">${1}) ${data[0].name}</h1>
         <p class="city-population">Population: ${data[0].info}</p>
         <img class="city-image" src="${data[0].image}" alt="image">
         
    `;
    cityList.appendChild(cityCard);

    let i = 1;
    button.addEventListener("click", () => {
        i++;
        cityList.innerHTML = "";
        if (i < data.length) {
            const cityCard = document.createElement("div");
            cityCard.classList.add("city-card");
            cityCard.innerHTML = `
        <h1 class="city-name">${i}) ${data[i].name}</h1>
         <p class="city-population">Population: ${data[i].info}</p>
         <img class="city-image" src="${data[i].image}" alt="image">
         
    `;
            cityList.appendChild(cityCard);
        } else {
            cityList.innerHTML = ` <h1 style="padding: 20px">End Of List<h1>`;
        }
    });
};

let onError = (error) => {
    console.log(`Error is : ${error}`);
};
myPromise().then(onRes).catch(onError);

// fetch("https://api.npoint.io/7bbd3a59c401f616bb89")
//     .then((response) => response.json())
//     .then((data) => {
//         // Create city cards dynamically
//         console.log(data);
//         data[0].forEach((city) => {
//             const cityCard = document.createElement("div");
//             cityCard.classList.add("city-card");
//             cityCard.innerHTML = `
//                         <div class="city-name">${city.name}</div>
//                         <div class="city-population">Population: ${city.population}</div>
//                     `;
//             cityList.appendChild(cityCard);
//         });
//     })
//     .catch((error) => {
//         console.log("Error fetching data:", error);
//         cityList.innerHTML = "Error fetching data. Please try again later.";
//     });
