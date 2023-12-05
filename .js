 // Alert Button
 function showAlert() {
    alert('youre slaying!');
}

// Hover Button
function changeColor() {
    document.getElementById('hoverButton').style.backgroundColor = '#b505f5';
}

function resetColor() {
    document.getElementById('hoverButton').style.backgroundColor = '#ffffff';
}

// Incrementing Button
let counter = 0;

function incrementCounter() {
    counter++;
    document.getElementById('counter').innerText = counter;
}

// If-Else Button
function checkNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber > 5) {
        document.getElementById('numberOutput').innerText = `Random number ${randomNumber} is greater than 5.`;
    } else {
        document.getElementById('numberOutput').innerText = `Random number ${randomNumber} is 5 or less.`;
    }
}

// For Loop Button
function runForLoop() {
    let output = '';

    for (let i = 1; i <= 5; i++) {
        output += `Iteration ${i}<br>`;
    }

    document.getElementById('forLoopOutput').innerHTML = output;
}
// Date Footer
function updateDateFooter() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    document.getElementById('dateFooter').innerText = `© ${now.getFullYear()} | Current Date: ${formattedDate}`;
}

// Update the date on page load
updateDateFooter();

// Update the date every second (1000 milliseconds)
setInterval(updateDateFooter, 1000);