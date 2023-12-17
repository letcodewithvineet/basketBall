$(document).ready(function () {
    const basket = $("#basket");

    $("#start-btn").click(function () {
        stackBall();
    });

    function stackBall() {
        const colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'ghiseagreen', 'deepskyblue', 'firebrick', 'crimson'];

        const ballColor = colors[Math.floor(Math.random() * colors.length)];
        const ball = $('<div class="ball"></div>').css('background-color', ballColor);

        basket.append(ball);

        if (basket.height() > basket.prop('scrollHeight')) {
            // If the basket is full, start a new row
            basket.append('<br>');
        }

        // Scroll to the end to always show the latest ball
        basket.animate({ scrollTop: basket.prop('scrollHeight') }, 500);
    }
});
