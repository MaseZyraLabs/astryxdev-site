// REAL VISITOR COUNTER (CountAPI, no signup)

fetch("https://api.countapi.xyz/hit/astryxdev_xyz_home_mase_hits/visits")
.then(function(res) {
    return res.json();
})
.then(function(data) {

    document.getElementById("visitor-count").innerHTML =
        data.value;

})
.catch(function() {

    document.getElementById("visitor-count").innerHTML =
        "offline";

});