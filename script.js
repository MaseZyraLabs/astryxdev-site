const API_KEY = "ut_BUOT0AWyYeuLmZ8syNf8cOFMAbxBl54m9MJP8h7V";

fetch("https://api.counterapi.dev/v2/masezyralabss-team-4396/first-counter-4396/up", {
    method: "POST",
    headers: {
        "Authorization": "Bearer " + API_KEY
    }
})
.then(res => res.json())
.then(() => {

    // now fetch updated value
    return fetch("https://api.counterapi.dev/v2/masezyralabss-team-4396/first-counter-4396", {
        headers: {
            "Authorization": "Bearer " + API_KEY
        }
    });

})
.then(res => res.json())
.then(data => {

    document.getElementById("visitor-count").innerHTML =
        data.value;

})
.catch(() => {
    document.getElementById("visitor-count").innerHTML = "0";
});