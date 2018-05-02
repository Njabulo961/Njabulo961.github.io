// Init GitHub
const github = new GitHub;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input
  const userText = e.target.value;
  if (userText !== '') {
    // Make http call
    github.getUser(userText)
    .then(data => {
      if (data.profile.message === 'Not Found') {
        // Show Alert
        ui.showAlert('User not found!', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
