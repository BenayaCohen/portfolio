//replace with your user:
const GITHUB_URL = "https://github.com/benaya1/portfolio.git";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    let image = " "
    let name = " "
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    
    profileName.textContent = name
    profileImage.textContent - image
    // update the profileImage and profileName with the information retrieved.
    
  });


  const codingLanguages = ["HTML", "CSS", "JavaScript"];
let web = document.getElementById("website");
codingLanguages.splice(2, 0, "and");

for (let i = 0; i < codingLanguages.length; i++) {
  web.textContent += "" + " " + codingLanguages[i];

}

