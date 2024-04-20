function generateMealPlan() {
    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    const breakfast = document.getElementById('breakfast').value;
    const snack1 = document.getElementById('snack1').value;
    const lunch = document.getElementById('lunch').value;
    const snack2 = document.getElementById('snack2').value;
    const dinner = document.getElementById('dinner').value;

    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Generate meal plan page
    const mealPlanContent = `
        <h2>Weekly Meal Plan for ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Goal for the Week:</strong> ${goal}</p>
        <h3>Monday</h3>
        <ul>
            <li>Breakfast: ${breakfast}</li>
            <li>Snack: ${snack1}</li>
            <li>Lunch: ${lunch}</li>
            <li>Snack: ${snack2}</li>
            <li>Dinner: ${dinner}</li>
        </ul>
        <!-- Repeat for other days of the week -->
    `;

    // Open a new window with the meal plan
    const mealPlanWindow = window.open('', '_blank');
    mealPlanWindow.document.open();
    mealPlanWindow.document.write(mealPlanContent);
    mealPlanWindow.document.close();
}

function clearForm() {
    document.getElementById('mealPlanForm').reset();
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
