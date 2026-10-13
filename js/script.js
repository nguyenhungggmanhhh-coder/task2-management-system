// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  const emailInput = document.getElementById('email');
  const passInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passError = document.getElementById('passwordError');
  const toggleBtn = document.getElementById('toggleBtn');

  // Toggle password
  if (toggleBtn && passInput) {
    toggleBtn.addEventListener('click', function () {
      const isHidden = passInput.type === 'password';
      passInput.type = isHidden ? 'text' : 'password';
      toggleBtn.textContent = isHidden ? 'Hide' : 'Show';
    });
  }

  function setError(input, box, message) {
    if (box) {
      box.textContent = message;
    }
    if (input) {
      input.classList.toggle('invalid', message !== '');
    }
  }

  // Validation
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput ? emailInput.value.trim() : '';
    const password = passInput ? passInput.value : '';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    if (email === '') {
      setError(emailInput, emailError, 'Please enter your email address.');
      valid = false;
    } else if (!emailPattern.test(email)) {
      setError(emailInput, emailError, 'Please enter a valid email address.');
      valid = false;
    } else {
      setError(emailInput, emailError, '');
    }

    if (password === '') {
      setError(passInput, passError, 'Please enter your password.');
      valid = false;
    } else if (password.length < 6) {
      setError(passInput, passError, 'Password must be at least 6 characters.');
      valid = false;
    } else {
      setError(passInput, passError, '');
    }

    if (valid) {
      alert('Login successful!');
      window.location.href = 'home.html';
    }
  });
}

// Home
const courseButtons = document.querySelectorAll('[data-course]');
if (courseButtons.length > 0) {
  const courses = {
    html: {
      title: 'HTML',
      desc: 'HTML stands for HyperText Markup Language. It creates the structure of a web page using headings, paragraphs, images, and links.'
    },
    css: {
      title: 'CSS',
      desc: 'CSS stands for Cascading Style Sheets. It controls the appearance of a web page using colors, fonts, spacing, and layouts.'
    },
    bootstrap: {
      title: 'Bootstrap',
      desc: 'Bootstrap is a popular CSS framework. It helps you build responsive websites quickly using a grid system and ready-made components.'
    },
    javascript: {
      title: 'JavaScript',
      desc: 'JavaScript is a programming language for the web. It makes pages interactive with button clicks, form validation, and dynamic content.'
    }
  };

  courseButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const course = courses[btn.dataset.course];
      if (course) {
        const titleEl = document.getElementById('modalCourseTitle');
        const descEl = document.getElementById('modalCourseDesc');
        if (titleEl) {
          titleEl.textContent = course.title;
        }
        if (descEl) {
          descEl.textContent = course.desc;
        }
      }
    });
  });
}
