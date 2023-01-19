// Get references to elements on the page
const messageForm = document.querySelector('#message-form');
const messageText = document.querySelector('#message-text');
const messagesDiv = document.querySelector('#messages');

// Listen for form submission
messageForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  // Get the message text
  const message = messageText.value;
  
  // Make a POST request to the server to add the message to the database
  try {
    const response = await fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
    
    const data = await response.json();
    
    // Clear the form
    messageText.value = '';
    
    // Add the message to the page
    messagesDiv.innerHTML += `
      <div class="messages">
        <div class="text">${data.message}</div>
        <div class="likes">Likes: <span id="likeCount">${data.likes}</span></div>
        <div class="like-button" onclick="likeFunction(${data.id})">Like</div>
      </div>
    `;
  } catch (error) {
    console.error('Error:', error);
 

// Event listener for form submission
document.getElementById("message-form").addEventListener("submit", postMessage);

// Event listener for like button clicks
document.getElementById("messages").addEventListener("click", handleLike);

// Function to post message
function postMessage(event) {
  event.preventDefault();
  const message = document.getElementById("message-text").value;
  // Make API call to post message
  // ...
}

// Function to handle like button clicks
function handleLike(event) {
  if (event.target.classList.contains("like-btn")) {
    // Make API call to update like count
    // ...
  }
}
