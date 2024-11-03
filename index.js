// Sample user data
const users = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    age: "28 years old",
    info: "A passionate wildlife enthusiast and photographer, often found exploring nature.",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: "32 years old",
    info: "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes.",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Sarah Johnson",
    email: "sarahjohnson@example.com",
    age: "30 years old",
    info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Alex Martinez",
    email: "alexmartinez@example.com",
    age: "27 years old",
    info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country.",
    image: "https://via.placeholder.com/80",
  },
];

// Function to create and display user cards
function createUserCards() {
  const usersContainer = document.querySelector(".users-container");
  const template = document.getElementById("user-template");

  users.forEach((user) => {
    const userElement = template.content.cloneNode(true);
    const userContainer = userElement.querySelector(".user-container");

    // Set user details
    userContainer.querySelector(".user-image").src = user.image;
    userContainer.querySelector(".user-name").textContent = user.name;
    userContainer.querySelector(".user-email").textContent = user.email;
    userContainer.querySelector(".user-age").textContent = user.age;
    userContainer.querySelector(".user-info").textContent = user.info;

    // Set up close button
    const closeButton = userContainer.querySelector(".btn-close");
    closeButton.textContent = "×";

    // Close button event listener
    closeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      userContainer.classList.add("fade-out");
      setTimeout(() => {
        userContainer.remove();
      }, 300);
    });

    usersContainer.appendChild(userElement);
  });
}

// Initialize user cards on page load
document.addEventListener("DOMContentLoaded", createUserCards);
