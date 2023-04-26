const element = (
  // Write your code here.
  <div class="congratulations-container">
    <h1 class="congrats-heading">Congratulations</h1>
    <div class="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        class="profile-image"
      />
      <h1 class="member-name">Kiran V</h1>
      <p class="institute">
        Vishnu Institute of computer Education and Technology.
        <span class="institute-place">Bhimavaram</span>
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        class="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
