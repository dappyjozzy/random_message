// Define arrays with different pieces of data
const subjects = ['You', 'The world', 'Life', 'Dreams', 'Challenges'];
const verbs = ['will achieve', 'are capable of', 'should embrace', 'need to overcome', 'can conquer'];
const objects = ['greatness', 'success', 'happiness', 'fulfillment', 'your goals'];

// Function to generate a random message
function generateMessage() {
    // Randomly select a piece of data from each array
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];

    // Construct the message
    const message = `${subject} ${verb} ${object}.`;

    // Display the message in the HTML
    document.getElementById('message').textContent = message;
}
