async function fetchData() {
  let city = "London";
  const apiKey = "0b281bbe2168ef014463fb7082282373";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;

  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();

  displayData(data)
  console.log(data);
}

function displayData(data) {

    let container = document.getElementById("container")
    
    if (!data || !data.name) {
        container.innerHTML = "<p>Error: No data available</p>";
        return;
    }
  let content = `
        <div class="city-name">
            <h1>${data.name}</h1>
            <p>"If you are in London it's probably raining."</p>
        </div>
        <div class="weather">
        <p>${data.main.temp_min}</p>
        <div id="weather-icon">
          <img src="./images/cloud.png" alt="Cloud">
          <p>${data.weather[0].description}</p>
          <p>23</p>
        </div>
        <p>${data.main.temp_max}</p>
      </div>
      <!-- Static -->
      <div class="static">
        <div class="left">
          <div class="days-forecast">
            <div class="day">
              <h5>Tue</h5>
              <img src="./images/rainy.png" alt="Rainy" />
              <!--lowest and heigst -->
              <div class="dgress">
                <p>22</p>
                <p>10</p>
              </div>
            </div>
            <div class="day">
              <h5>Tue</h5>
              <img src="./images/rainy.png" alt="Rainy" />
              <!--lowest and heigst -->
              <div class="dgress">
                <p>22</p>
                <p>10</p>
              </div>
            </div>
            <div class="day">
              <h5>Tue</h5>
              <img src="./images/rainy.png" alt="Rainy" />
              <!--lowest and heigst -->
              <div class="dgress">
                <p>22</p>
                <p>10</p>
              </div>
            </div>
            <div class="day">
              <h5>Tue</h5>
              <img src="./images/rainy.png" alt="Rainy" />
              <!--lowest and heigst -->
              <div class="dgress">
                <p>22</p>
                <p>10</p>
              </div>
            </div>
            <div class="day">
              <h5>Tue</h5>
              <img src="./images/rainy.png" alt="Rainy" />
              <!--lowest and heigst -->
              <div class="dgress">
                <p>22</p>
                <p>10</p>
              </div>
            </div>
            <div class="day">
              <h5>Tue</h5>
              <img src="./images/rainy.png" alt="Rainy" />
              <!--lowest and heigst -->
              <div class="dgress">
                <p>22</p>
                <p>10</p>
              </div>
            </div>
            <!-- Add more days forecast here -->
          </div>
          <div class="wind-info">
            <div class="wind-per">
              <h4>Current</h4>
              <p>Humidty: 47%</p>
              <p>Visbilty: Moderats</p>
              <p>Chanse of Rain: 70%</p>
              <p>Preception: 4mm</p>
            </div>
            <div class="wind-direction">
              <img src="./images/sun.png" alt="" width="50rem" />
              <div class="text">
                <p>wind-direction: SW</p>
                <p>Wind Speead: 10</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Clock -->

        <div class="clock">
          <img src="./images/cloud.png" alt="Clock" />
        </div>
      </div>
        `;
        container.innerHTML = content
}


fetchData();
displayData()


