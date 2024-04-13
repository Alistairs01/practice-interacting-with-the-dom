// DOM loading 
document.addEventListener("DOMContentLoaded", () => {
// Creating my Timer 
let counter = document.querySelector("#counter");
let count = 0 ;
/* setInterval() method repeatedly calls a function or executes a code snippet
with a fixed time delay between each call 
This method returns an interval ID which uniquely identifies the interval , so you can remove it later by calling 
clearInterval()
*/
let timer = setInterval(() => {
    counter.textContent = count ;
    count++;

},1000);
// Plus button
document.querySelector("#plus").addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

// Minus button
document.querySelector("#minus").addEventListener("click", () => {
    count--;
    counter.textContent = count;
});


// Create the like button function
// first make likes an empty object
let likes = {};
document.querySelector("#heart").addEventListener("click", () => {
    // set count as an array in likes
    if (!likes[count]) {
        likes[count] = 1 ;
    } else {
        likes[count]++ ;
    }
    let likeList = document.querySelector(".likes");
    likeList.innerHTML = " ";
    for (let num in likes) {
        let li = document.createElement("li");
        li.textContent = `${num} has been liked ${likes[num]} times.`;
        likeList.appendChild(li);

    }
});

// Create the pause button function
// set a boolean for the button 
let iAmPaused = false;
let pauseButton = document.querySelector("#pause");
let disabledButtons = document.querySelectorAll("button:not(#pause)");
pauseButton.addEventListener("click", () => {
    if (!iAmPaused) {
        clearInterval(timer);
        disabledButtons.forEach((button) => {
            button.disabled = true;
        });
        pauseButton.textContent = "resume"; // Update textContent here
        iAmPaused = true;
    } else {
        timer = setInterval(() => {
            counter.textContent = count;
            count++;
        }, 1000);
        disabledButtons.forEach((button) => {
            button.disabled = false;
        });
        pauseButton.textContent = "pause"; // Update textContent here
        iAmPaused = false;
    }
});

// Create comment functionality
document.querySelector("#comment-form").addEventListener("submit", (event) => {
    event.preventDefault()
    let commentInput = document.querySelector("#comment-input");
    let comment = commentInput.value;
    let commentList = document.querySelector("#list");
    let newComments = document.createElement("p");
    newComments.textContent = comment;
    commentList.appendChild(newComments);
    commentInput.value = " ";
});

})