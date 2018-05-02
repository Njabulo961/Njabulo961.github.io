class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}"
            target="_black" class="btn btn-primary btn-block mb-4">View Profile
            </a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repositories: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repositories</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
         <div class="col-md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
         </div>
         <div class="col-md-6">
         <span class="badge badge-primary">Stars: ${repo.stargazer_count}</span>
         <span class="badge badge-secondary">Public Gists: ${repo.watchers_count}</span>
         <span class="badge badge-success">Followers: ${repo.form_count}</span>
         </div>
        </div>
      </div>
      `;
    });

    // Output the repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show Alert Msg
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();

    // Create div
    const div = document.createElement('div');

    // Add class
    div.className = className;

    // Add Text
    div.appendChild(document.createTextNode(message));

    // Get Parent
    const container = document.querySelector('.searchContainer');

    // Get Search Box
    const search = document.querySelector('.search');

    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3s
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  };

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
