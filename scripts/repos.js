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
                <ul>
                  <li>${repos.description}</li>
                  <li>(<a href="${repos.html_url}">${repos.html_url}</a>)</li>
                </ul>
              `

          })
          document.getElementById('repos').innerHTML = first
        })
    }
