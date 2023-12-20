function displayInfo() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    // Display the submitted values
    const displayDiv = document.getElementById('displayInfo');
    displayDiv.innerHTML = `
      <h2>Submitted Information:</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Middle Name:</strong> ${middleName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;
  }