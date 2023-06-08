// Get form elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const rememberCheckbox = document.getElementById('check');
const forgottenPasswordLink = document.querySelector('.right a');

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const rememberMe = rememberCheckbox.checked;

  // Perform form validation
  if (username === '' || password === '') {
    shakeForm();
    return;
  }

  // Perform login or further processing
  loginUser(username, password, rememberMe);
});

// Handle forgotten password link click
forgottenPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();

  showForgotPasswordDialog();
});

// Function to shake the form on validation error
function shakeForm() {
  form.classList.add('error');

  // Remove the shake effect after 500ms
  setTimeout(() => {
    form.classList.remove('error');
  }, 500);
}

// Function to perform login or further processing
function loginUser(username, password, rememberMe) {
  // Simulate an asynchronous login process
  showLoadingSpinner();

  setTimeout(() => {
    hideLoadingSpinner();
    showAlert(`Logged in with username: ${username}, password: ${password}, remember me: ${rememberMe}`);
    form.reset();
  }, 1500);
}

// Function to show the forgot password dialog
function showForgotPasswordDialog() {
  Swal.fire({
    title: 'Forgotten Password',
    html: 'Please contact support for password recovery.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
}

// Function to show a loading spinner
function showLoadingSpinner() {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');

  form.appendChild(spinner);
}

// Function to hide the loading spinner
function hideLoadingSpinner() {
  const spinner = document.querySelector('.spinner');
  if (spinner) {
    spinner.remove();
  }
}

// Function to show an alert message
function showAlert(message) {
  Swal.fire({
    title: 'Login Successful',
    text: message,
    icon: 'success',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    showClass: {
      popup: 'swal2-show'
    },
    hideClass: {
      popup: 'swal2-hide'
    }
  });
}
