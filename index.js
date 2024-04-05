document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.querySelector('.modal-content');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput.value ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // Set input values to certificate content
    certificateContent.innerHTML = `
        <h1>Certificate of Achievement</h1>
        <p>This is to certify that</p>
        <h2>${studentName}</h2>
        <p>has almost completed the</p>
        <h2>${courseName} Course</h2>
        <p>${personalMessage}</p>
        <img src="logo.png" alt="Your Logo" style="max-width: 350px; height: auto;">
        <p>I am thee greatest 😻</p>
    `;

    // Display the modal
    modal.style.display = 'block';
    certificateContent.classList.add('raleway-font');
    certificateContent.classList.add('show-border');
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});
