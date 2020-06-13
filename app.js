/* creating object of Date class */
function currentTime() {
    var date = newDate(); 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSecond();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour -12): hour)
}

function updateTime(k) {
    if (k <10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

currentTime(); /* calling currentTime() function to initiate the process */

window.onload = function () {

    let title = document.querySelector("#title")
    let cards = document.querySelector("#cards")
    let div
    let post = document.querySelector("#post")
    post.addEventListener("click", function () {
        div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
    <h2>${title.value}</h2>

    <h5>Rebel without a Clue, June 1, 2020</h5>

    <div class="fakeimg" style="height:200px;">Image</div>

    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

    `
        cards.appendChild(div)
    })
}