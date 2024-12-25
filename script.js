// Initialize Flatpickr
flatpickr("#birthdate", {
  dateFormat: "Y-m-d",
});

// Handle form submission
document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const birthdate = document.getElementById("birthdate").value;

  if (!birthdate) {
    alert("Please select a birthdate.");
    return;
  }

  const birthDateObj = luxon.DateTime.fromISO(birthdate);
  const today = luxon.DateTime.now();

  if (!birthDateObj.isValid) {
    alert("Invalid date. Please select a valid birthdate.");
    return;
  }

  const age = today.diff(birthDateObj, ["years", "months", "days"]).toObject();
  const days = Math.floor(age.days);

  document.getElementById("result").innerHTML = `
    <p>You are ${age.years} years, ${age.months} months, and ${days} days old.</p>
  `;
});
