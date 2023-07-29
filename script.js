let name = '';
let email = '';
let token = 1223; // Corrected variable name to "token"
let pass = '';
let btn = '';
let conf = '';

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Test");
    
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    pass = document.getElementById('password1').value; // Corrected ID to "password1"
    conf = document.getElementById('password2').value;
    btn = document.getElementById('btn');
    
    if(name.trim()!=='' && email.trim()!=='' && pass.trim()!=='' && conf.trim()!=='' ){
        btn.disable = false;
    }
    else{
        document.getElementById('error').innerHTML = 'Error: All fields are mandetory!';s
        btn.disable = true;
    }

    document.getElementById('main-con').style.display = 'none';

    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Pass', pass);

    token++; // Increment the token count

    inhtml = `
    <div id="info" class="signup-info">
    <h1 class="top">Signup Successful!</h1>
    <div class="details">
      <h1>Profile</h1>
      <img src="./Vector.png" alt="" ><br>
      <img class="img2" src="./Vector (1).png" alt="">
      <img src="" alt="">
      <p>Full Name: ${name}</p>
      <p>Email:  ${email}</p>
      <p>Token:  ${token}</p> <!-- Display the updated token count -->
      <p>Password:  ${pass}</p>
      <button id="logout">LOGOUT</button>
    </div>
    </div>
    `;

    document.getElementById('all-info').innerHTML = inhtml;

    // Add a click event listener for the "LOGOUT" button
    document.getElementById('logout').addEventListener('click', (e) => {
        // Implement logout functionality here
        // For example: Redirect the user to the logout page or perform other actions.
        e.preventDefault();

        localStorage.clear();
        
        document.getElementById('error').innerHTML = '';
        document.getElementById('all-info').style.display = 'none';
        document.getElementById('main-con').style.display = 'block';
    });
});
