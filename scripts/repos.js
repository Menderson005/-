//document.getElementById('getthedata').addEventListener('click',getData);
window.addEventListener("load", getData)

  datafile = 'https://api.github.com/users/mla121/repos';

    function getData(){
      fetch(datafile)
        .then(function(response){
          return(response.json())
        })
        .then(function(data){
          console.log(data);
          let first = ` `;

          data.map(function(repos){
              first += `
                <hr>
                <div class="card border-dark mb-3" style="max-width: 35rem; z-index:-10000;">
                  <div class="card-header">${repos.description}</div>
                  <div class="card-body text-dark">
                  <!--  <h5 class="card-title">Dark card title</h5> -->
                    <p class="card-text"><a href=${repos.html_url}>${repos.html_url}</a></p>
                  </div>
                </div>

              `

          })
          document.getElementById('repos').innerHTML = first
        })
    }

    // <ul>
    //   <li>${repos.description}</li>
    //   <li>(<a href="${repos.html_url}">${repos.html_url}</a>)</li>
    // </ul>
