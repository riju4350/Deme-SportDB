// get data by players name
const inputFunction = () => {
  const searchInput = document.getElementById("search-input").value;
  console.log(searchInput);
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck
  https://www.thesportsdb.com/api/v1/json/{APIKEY}/searchplayers.php?t={TeamName}&p=${searchInput}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlayersDetails(data.player));
};
const showPlayersDetails = (players) => {
  const playerContainer = document.getElementById("player-container");
  for (const player of players) {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
      <div class="card border w-50">
          <div class="pro-pic">
              <img class="w-25" src="" alt="" srcset="" />
          </div>
          <h2></h2>
          <h5></h5>
          <p></p>
          <div class="allBtn">
              <button class="btn btn-danger">Delete</button>
              <button class="btn btn-success">Details</button>
          </div>
      </div>
              `;
    playerContainer.appendChild(cardDiv);
  }
};

// const showPlayersDetails = (players) => {
//   for (const player of players) {
//     console.log(player);
//   }
// };
