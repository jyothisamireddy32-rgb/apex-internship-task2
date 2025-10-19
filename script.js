document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullname = document.querySelector('input[name="fullname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    const age = parseInt(document.querySelector('input[name="age"]').value.trim(), 10);
    const gender = document.querySelectorAll('input[name="gender"]');
    const skills = document.querySelectorAll('input[name="skills"]');
    const photo = document.querySelector('input[name="profile_photo"]');

    if(fullname === '') { alert('Please enter your full name'); return; }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)) { alert('Please enter a valid email address'); return; }


    if(password.length < 6) { alert('Password must be at least 6 characters'); return; }


    if(age < 18) { alert('You must be at least 18 years old'); return; }

  
    let genderSelected = false;
    gender.forEach(g => { if(g.checked) genderSelected = true; });
    if(!genderSelected) { alert('Please select your gender'); return; }


    let skillSelected = false;
    skills.forEach(s => { if(s.checked) skillSelected = true; });
    if(!skillSelected) { alert('Please select at least one skill'); return; }


    if(photo.files.length === 0) { alert('Please upload a profile photo'); return; }

  
    alert('Form submitted successfully!');
});
