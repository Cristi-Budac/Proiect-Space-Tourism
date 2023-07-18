const activeLinkPathName = window.location.pathname;

document.querySelectorAll("#right-col a").forEach((activeLinkFunc) => {
  if (activeLinkFunc.href.includes(`${activeLinkPathName}`)) {
    activeLinkFunc.classList.add("active");
  }
});

fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#titan").innerText =
      data.destinations[3].name.toUpperCase();
    document.querySelector("#moon").innerText =
      data.destinations[0].name.toUpperCase();
    document.querySelector("#mars").innerText =
      data.destinations[1].name.toUpperCase();
    document.querySelector("#europa").innerText =
      data.destinations[2].name.toUpperCase();

    let moon = document.getElementById("moon");

    moon.onclick = () => {
      document.querySelector("#title").innerText =
        data.destinations[0].name.toUpperCase();
      document.querySelector("#moon-description").innerText =
        data.destinations[0].description;
      document.querySelector("#distance").innerText =
        data.destinations[0].distance.toUpperCase();
      document.querySelector("#travel").innerText =
        data.destinations[0].travel.toUpperCase();
      document.querySelector("#destination-image").src =
        data.destinations[0].images.png;
      document.getElementById("distance-p").innerText = "AVG. DISTANCE";
      document.getElementById("travel-p").innerText = "EST. TRAVEL TIME";
    };

    let mars = document.getElementById("mars");

    mars.onclick = () => {
      document.querySelector("#title").innerText =
        data.destinations[1].name.toUpperCase();
      document.querySelector("#moon-description").innerText =
        data.destinations[1].description;
      document.querySelector("#distance").innerText =
        data.destinations[1].distance.toUpperCase();
      document.querySelector("#travel").innerText =
        data.destinations[1].travel.toUpperCase();
      document.querySelector("#destination-image").src =
        data.destinations[1].images.png;
    };

    let europa = document.getElementById("europa");

    europa.onclick = () => {
      document.querySelector("#title").innerText =
        data.destinations[2].name.toUpperCase();
      document.querySelector("#moon-description").innerText =
        data.destinations[2].description;
      document.querySelector("#distance").innerText =
        data.destinations[2].distance.toUpperCase();
      document.querySelector("#travel").innerText =
        data.destinations[2].travel.toUpperCase();
      document.querySelector("#destination-image").src =
        data.destinations[2].images.png;
    };

    let titan = document.getElementById("titan");

    titan.onclick = () => {
      document.querySelector("#title").innerText =
        data.destinations[3].name.toUpperCase();
      document.querySelector("#moon-description").innerText =
        data.destinations[3].description;
      document.querySelector("#distance").innerText =
        data.destinations[3].distance.toUpperCase();
      document.querySelector("#travel").innerText =
        data.destinations[3].travel.toUpperCase();
      document.querySelector("#destination-image").src =
        data.destinations[3].images.png;
    };
  });

let buttons = document.querySelectorAll(".destinations");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active-button"));
    this.classList.add("active-button");
  });
});

fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    let douglas = document.getElementById("douglas");

    douglas.onclick = () => {
      document.querySelector("#crew-name").innerText =
        data.crew[0].name.toUpperCase();
      document.querySelector("#crew-description").innerText = data.crew[0].bio;
      document.querySelector("#role").innerText =
        data.crew[0].role.toUpperCase();
      document.querySelector("#crew-image").src = data.crew[0].images.png;
    };

    let mark = document.getElementById("mark");

    mark.onclick = () => {
      document.querySelector("#crew-name").innerText =
        data.crew[1].name.toUpperCase();
      document.querySelector("#crew-description").innerText = data.crew[1].bio;
      document.querySelector("#role").innerText =
        data.crew[1].role.toUpperCase();
      document.querySelector("#crew-image").src = data.crew[1].images.png;
    };

    let victor = document.getElementById("victor");

    victor.onclick = () => {
      document.querySelector("#crew-name").innerText =
        data.crew[2].name.toUpperCase();
      document.querySelector("#crew-description").innerText = data.crew[2].bio;
      document.querySelector("#role").innerText =
        data.crew[2].role.toUpperCase();
      document.querySelector("#crew-image").src = data.crew[2].images.png;
    };

    let anousheh = document.getElementById("anousheh");

    anousheh.onclick = () => {
      document.querySelector("#crew-name").innerText =
        data.crew[3].name.toUpperCase();
      document.querySelector("#crew-description").innerText = data.crew[3].bio;
      document.querySelector("#role").innerText =
        data.crew[3].role.toUpperCase();
      document.querySelector("#crew-image").src = data.crew[3].images.png;
    };
  });

let crews = document.querySelectorAll(".crew-member");

crews.forEach((crew) => {
  crew.addEventListener("click", function () {
    crews.forEach((crw) => crw.classList.remove("active-member"));
    this.classList.add("active-member");
  });
});

fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    let launch = document.getElementById("launch-vehicle");

    launch.onclick = () => {
      document.querySelector("#terminology").innerText = "THE TERMINOLOGY...";
      document.querySelector("#space").innerText =
        data.technology[0].name.toUpperCase();
      document.querySelector("#rocket-description").innerText = data.technology[0].description;
      document.querySelector("#technology-image").src = data.technology[0].images.landscape;
    };

    let port = document.getElementById("space-port");

    port.onclick = () => {
      document.querySelector("#terminology").innerText = "THE TERMINOLOGY...";
      document.querySelector("#space").innerText =
        data.technology[1].name.toUpperCase();
      document.querySelector("#rocket-description").innerText = data.technology[1].description;
      document.querySelector("#technology-image").src = data.technology[1].images.landscape;
    };

    let capsule = document.getElementById("space-capsule");

    capsule.onclick = () => {
      document.querySelector("#terminology").innerText = "THE TERMINOLOGY...";
      document.querySelector("#space").innerText =
        data.technology[2].name.toUpperCase();
      document.querySelector("#rocket-description").innerText = data.technology[2].description;
      document.querySelector("#technology-image").src = data.technology[2].images.landscape;
    };
  });

  let technologys = document.querySelectorAll(".terminology");

  technologys.forEach((tech) => {
    tech.addEventListener("click", function () {
        technologys.forEach((thc) => thc.classList.remove("active-rocket"));
      this.classList.add("active-rocket");
    });
  });