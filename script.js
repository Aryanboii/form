// Show/hide conditional fields
document.getElementById('visaYes').addEventListener('change', function() {
    document.getElementById('visaDetails').style.display = 'block';
  });

  document.getElementById('visaNo').addEventListener('change', function() {
    document.getElementById('visaDetails').style.display = 'none';
  });

  document.getElementById('intlExpYes').addEventListener('change', function() {
    document.getElementById('intlExperienceDetails').style.display = 'block';
  });

  document.getElementById('intlExpNo').addEventListener('change', function() {
    document.getElementById('intlExperienceDetails').style.display = 'none';
  });

  document.getElementById('salary').addEventListener('input', function() {
    document.getElementById('salaryValue').innerText = this.value;
  });

  // Show other country input when "Other" is checked
  document.querySelector('input[name="country"][value="Other"]').addEventListener('change', function() {
    document.getElementById('otherCountry').style.display = 'block';
  });

  document.querySelectorAll('input[name="country"]').forEach(function(input) {
    if (input.value !== "Other") {
      input.addEventListener('change', function() {
        document.getElementById('otherCountry').style.display = 'none';
      });
    }
  });

  // Form submission handling
  document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
    window.scrollTo(0, 0);
  });
  