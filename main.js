// 1-1A = capa-bloqueFILA

function createBase() {
    // console.log("baseGenerated")
    for (var i = 1; i <= 10; i++) {
        if (i == 1) { letter = "A" }
        if (i == 2) { letter = "B" }
        if (i == 3) { letter = "C" }
        if (i == 4) { letter = "D" }
        if (i == 5) { letter = "E" }
        if (i == 6) { letter = "F" }
        if (i == 7) { letter = "G" }
        if (i == 8) { letter = "H" }
        if (i == 9) { letter = "I" }
        if (i == 10) { letter = "J" }

        for (var o = 1; o <= 10; o++) {
            var probability = $("#baseBlockProbility").val()
            var random = Math.floor(Math.random() * probability) + 1
            if (random == probability) { $("#1-" + o + letter).addClass("coloredblock").removeClass("black") }
        }
    }
}

function blockBelow(cape, block, row) {
    if ($("#" + cape + "-" + block + row).hasClass("coloredblock")) {
        return true
    } else {
        console.log("#" + cape + "-" + block + row)
        return false
    }
}

function createCape(cape) {
    var capenumber = cape
    for (var i = 1; i <= 10; i++) {
        if (i == 1) { letter = "A" }
        if (i == 2) { letter = "B" }
        if (i == 3) { letter = "C" }
        if (i == 4) { letter = "D" }
        if (i == 5) { letter = "E" }
        if (i == 6) { letter = "F" }
        if (i == 7) { letter = "G" }
        if (i == 8) { letter = "H" }
        if (i == 9) { letter = "I" }
        if (i == 10) { letter = "J" }

        for (var o = 1; o <= 10; o++) {
            var probability = $("#baseBlockProbility").val()
            var random = Math.floor(Math.random() * probability) + 1
            if (random == probability) {
                if (blockBelow(capenumber, o, letter)) {
                    $("#" + cape + "-" + o + letter).addClass("coloredblock").removeClass("black")
                }
            }
        }
    }
}

function createGeneration() {
    $(".coloredblock").removeClass("coloredblock").addClass("block")
    createBase()
    createCape(2)
    createCape(3)
    createCape(4)
    createCape(5)
    createCape(6)
    createCape(7)
    createCape(8)
    createCape(9)
    createCape(10)
}

function createMultipleGenerations() {
    var generationsPerSecond = $("#generationsPerSecond").val();
    window.setInterval(function () {
        createGeneration()
    }, 1000 / generationsPerSecond);
}