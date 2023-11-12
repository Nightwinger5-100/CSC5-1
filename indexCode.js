function startMove() {
    console.log("'startMove()' started")
    //toggle the start(true) and stop(false) buttons and start
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("myMarquee").start();
}

function stopMove() {
    console.log("'stopMove()' started")
    //toggle the start(false) and stop(true) buttons and stop
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("myMarquee").stop();
}