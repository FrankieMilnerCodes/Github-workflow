// Need to declare variables to set up object
const initialFreelancers = [
  // the freelancers already on the page
  {
    name: "Anthony",
    occupation: "Viscount",
    price: 30,
  },
  {
    name: "Benedict",
    occupations: "Painter",
    price: 50,
  },
  {
    name: "Colin",
    occupation: "Programmer",
    price: 70,
  },
];

const additionalFreelancers = [
  {
    name: "Daphne",
    occupation: "Teacher",
    price: 25,
  },
  {
    name: "Eloise",
    occupation: "Viscountess",
    price: 45,
  },
  {
    name: "Francesca",
    occupation: "Teacher",
    price: 65,
  },
  {
    name: "George",
    occupation: "Baker",
    price: 35,
  },
  {
    name: "Hyacinth",
    occupation: "Painter",
    price: 85,
  },
];

let freelancers = initialFreelancers.slice(); //returns a portion of an array into a new array
let currentIndex = 0;

function calculateAveragePrice() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const average = total / freelancers.length;
  return average.toString().substring(0, 2);
}

function updateAveragePrice() {
  const avgPriceElement = document.querySelector("#avg-price");
  avgPriceElement.textContent = calculateAveragePrice();
}

function renderFreelancers() {
  const freelancersList = document.querySelector("#freelancers-list");
  freelancersList.innerHTML = "";
  freelancers.forEach((freelancer) => {
    const div = document.createElement("div");
    div.className = "freelancer";
    div.innerHTML = `<strong>${freelancer.name}</strong> - ${freelancer.occupation}, starting price: $${freelancer.price}`;
    freelancersList.appendChild(div);
  });
}

function generateRandomFreelancer() {
  const randomIndex = Math.floor(Math.random() * additionalFreelancers.length);
  return additionalFreelancers[randomIndex];
}

function updateFreelancers() {
  for (let i = 0; i < freelancers.length; i++) {
    freelancers[i] = generateRandomFreelancer();
  }
  renderFreelancers();
  updateAveragePrice();
}

function init() {
  renderFreelancers();
  updateAveragePrice();
  setInterval(updateFreelancers, 3000);
}

init();
