document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const tableBody = document.querySelector('#dataTable tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const foodOptions = document.querySelectorAll('input[name="food"]:checked');
        const foods = Array.from(foodOptions).map(option => option.value);
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;
        if (foods.length < 2) {
            alert("Please select at least 2 food options.");
            return; 
        }
         
        
         
        const pincodeRegex = /^\d{6}$/;
        if (!pincodeRegex.test(pincode)) {
            alert("Pincode must contain exactly 6 numeric characters.");
            return;
        }
 
         
         const email = document.getElementById('email').value;
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(email)) {
             alert("Please enter a valid email address.");
             return;
         }

        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${foods.join(', ')}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;

        // Clear form fields
        form.reset();
    });
});
