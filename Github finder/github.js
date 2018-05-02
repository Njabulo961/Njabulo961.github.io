class GitHub {
  constructor() {
    this.client_id = '7469a80bae6e3873dd41';
    this.client_secret = 'b7a19f85eea9b5bd9eecbf537f377d9e5d2025f0';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile, //same as saying profile: profile
      repos
    };

  }
}
