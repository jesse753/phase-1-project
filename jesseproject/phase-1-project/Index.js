// // Event listener to listen for form submission
document.getElementById("message-form").addEventListener("submit", postMessage);
// Function to handle form submission
function postMessage(event) {
  event.preventDefault();
  const message = document.getElementById("message-input").value;
  
  // Make an API call to post the message to the database
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify({ message }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    // Append the new tweet to the tweet container
    const tweetContainer = document.getElementById("tweet-container");

function addTweet(data) {
  const newTweet = `<div class="tweet">
                      <p>${data.message}</p>
                      <button class="like-button">Like</button>
                      <span class="like-count">${data.likes}</span>
                    </div>`;
  tweetContainer.innerHTML += newTweet;

  const likeButton = tweetContainer.querySelector(".like-button");
  likeButton.addEventListener("click", function() {
    const likeCountSpan = likeButton.parentNode.querySelector(".like-count");
    likeCountSpan.innerHTML = parseInt(likeCountSpan.innerHTML) + 1;
  });
}

// Event listener to listen for like button clicks
document.getElementById("tweet-container").addEventListener("click", handleLikeButtonClick);

// Function to handle like button clicks
function handleLikeButtonClick(event) {
  if (event.target.classList.contains("like-button")) {
    const tweetId = event.target.parentNode.dataset.tweetId;
    
    // Make an API call to update the like count for the tweet in the database
    fetch(`http://localhost:3000/api/comments/${tweetId}/like`, {
      method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
      // Update the like count displayed on the tweet
      event.target.nextSibling.innerHTML = data.likes;
    });
  }
}
//To update the like count in the database
likeButton.addEventListener("click", function() {
  const tweetId = event.target.parentNode.dataset.tweetId;
  fetch(`http://localhost:3000/posts/${tweetId}/like`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
      // Update the like count displayed on the tweet
      event.target.nextSibling.innerHTML = data.likes;
  });
});

// Make an API call to retrieve tweets from the database
fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(data => {
    // Append the tweets to the tweet container
    const tweetContainer = document.getElementById("tweet-container");
    let tweetsHTML = '';
    data.forEach(tweet => {
      tweetsHTML += `<div class="tweet" data-tweet-id="${tweet._id}"></div>`;
    });
    tweetContainer.innerHTML = tweetsHTML;
  })
  .catch(error => console.log(error));

    
  
  