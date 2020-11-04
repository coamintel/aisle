var gameData = {
    resource: 0,
    resourcePerClick: 1
}

function increaseResource() {
    gameData.resource += gameData.resourcePerClick
    document.getElementById("resourceBar").innerHTML = "You have " + gameData.resource + " placeholder resources"
}

