function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form element
    const formElement = event.target;

    // Validate the form using the validateForm function from validate.js
    const errors = validateForm(formElement);

    // If there are errors, display them to the user
    if (errors && errors.length > 0) {
      const errorMessage = errors.join('\n');
      alert(errorMessage);
    } else {
      // If there are no errors, submit the form
      formElement.submit();
    }
}

// Add a submit event listener to the form
const myForm = document.getElementById('myform');
myForm.addEventListener('submit', handleSubmit);