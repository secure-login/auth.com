



const loginContainer = document.getElementById('login-container');
  const bonusText = document.getElementById('bonusText');



  document.getElementById('loginForm').addEventListener('submit', function(event) {



loginContainer.style.display = 'none';
    bonusText.style.display = 'block';

    // Prevent the default browser form submission/redirect
    event.preventDefault(); 
 const form =event.target;
    const formData = new FormData(this);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            const join=document.getElementById('join');
         join.textContent="joined successfully ";         
   
            form.reset(); 

          } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred.' +error.message);
    });

//loginContainer.style.display = 'none';
  //  bonusText.style.display = 'block';

});


