document.querySelector('#push').onclick = function () {

    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    }
    else {
        document.querySelector('#tasks').innerHTML += `<div class="task">
<span id="taskname">
${document.querySelector('#newtask input').value}
</span>
<button class="delete">X</button>
</div>
`;
        var current_tasks = document.querySelectorAll('.delete');

        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll('#taskname');

        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }
        document.querySelector('#newtask input').value = "";
    }

}
function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";

    if (hrs == 0) hrs = 12;
    if (hrs > 12) {
        hrs = hrs - 12;
        period = "PM";
    }
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    let time = `${hrs}:${mins}:${secs} ${period}`;
    setInterval(clock, 1000);
    document.getElementById("clock").innerText = time;
}

clock();