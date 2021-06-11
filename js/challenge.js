document.addEventListener("DOMContentLoaded", () => {

const counterElement = document.getElementById('counter')

let counterValue = 0

const pauseButton = document.getElementById('pause')

const resumeButton = document.getElementById('resume')

const minusButton = document.getElementById(`minus`)

const plusButton = document.getElementById('plus')

const heartButton = document.getElementById('heart')

let newComment = document.getElementById('comment-input')

const submitButton = document.getElementById(`submit`)

let likedTimes = 0

intervalId = setInterval(myCallback, 1000);

function myCallback() {
    counterValue += 1;
    counterElement.innerHTML = counterValue;
}

function resume() {
    intervalId = setInterval(myCallback, 1000);
    pauseButton.style.display = '';
    resumeButton.style.display = 'none';
}

function pause() {
    clearInterval(intervalId);
    pauseButton.style.display = 'none';
    resumeButton.style.display = '';
}

pauseButton.addEventListener("click", (e) => {
    pause()
    submitButton.disabled = true
    minusButton.disabled = true
    plusButton.disabled = true
    heartButton.disabled = true
})

resumeButton.addEventListener("click", (e) => {
    resume()
    submitButton.disabled = false
    minusButton.disabled = false
    plusButton.disabled = false
    heartButton.disabled = false
})

plusButton.addEventListener("click", (e) => {
    counterValue ++;
    counterElement.innerHTML = counterValue;
})

minusButton.addEventListener("click", (e) => {
    counterValue --;
    counterElement.innerHTML = counterValue;
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const commentList = document.createElement('li')
    newcomment.appendChild(commentList)
    commentList.innerHTML = newComment.value
})

function reset(){
likedTimes = 0
}

setInterval(reset, 1000);


const likedTimesList = document.getElementById("likedtimeslist")

heartButton.addEventListener("click", (e) => {
    likedTimes += 1;
    const likedList = document.createElement('li')
    likedList.innerHTML = `${counterValue} has been liked ${likedTimes} times`

    if(likedTimes == 1) {
        likedtimeslist.appendChild(likedList)  
    }
    else if (likedTimes > 1) { 
        const lastItem = likedTimesList.lastChild
        lastItem.innerHTML = `${counterValue} has been liked ${likedTimes} times`
    }
})

})




// document.getElementById(`minus`).disabled = true




// step 1 set the counter value = 0
// step 2 get the counter element
// step 3 create an interval with a callback
// step 4 inside of the callback increment the counter and set the inner html of the element to the counter value