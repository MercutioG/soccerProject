field.onclick = function (event) {
    //window-relative field coordinates
    let fieldCoords = this.getBoundingClientRect();

    //the ball has position: absolute, the field has position: relative
    //so ball coordinates are relative to the field inner left-upper corner
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 - 10,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2 - 10,
    }

    //prevent crossing the top field boundry
    if(ballCoords.top < 0){ballCoords.top = 0}
    //prevent crossing the left field boundry
    if(ballCoords.left < 0){ballCoords.left = 0}
    //prevent crossing the bottom field boundry
    if(ballCoords.top + ball.clientHeight > field.clientHeight){ballCoords.top = field.clientHeight - ball.clientHeight}
    //prevent crossing the right field boundry
    if(ballCoords.left + ball.clientWidth > field.clientWidth){ballCoords.left = field.clientWidth - ball.clientWidth}

    ball.style.left = ballCoords.left + "px"
    ball.style.top = ballCoords.top + "px"
}