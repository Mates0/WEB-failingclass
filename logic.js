let count = 0
document.getElementById("addbox").onclick = function () {
    counting()
}

document.getElementById("calculatebox").onclick = function () {
    calculate()
}

function addbox() {
    let writeidbox = document.getElementById("idboxes")
    let gradecount = "<input type='number' id='grade'>\n" +
        "<input type='number' id='weight'>\n" + "<br>"
    writeidbox.innerHTML += gradecount
    let grade = document.getElementById("grade")
    let weight = document.getElementById("weight")
    grade.id = grade.id + count
    weight.id = weight.id + count
}

function counting() {
    count++
    addbox()
}

function calculate() {
    let average
    let sumgrade = 0
    let sumweight = 0
    for (let i = 1; i <= count; i++) {
        let znamka = document.getElementById("grade" + i)
        let vaha = document.getElementById("weight" + i)
        let grade = parseInt(znamka.value)
        let weight = parseInt(vaha.value)
        sumgrade += (grade * weight)
        sumweight += weight
    }
    average = sumgrade / sumweight
    if (average > 40) {
        let output = document.getElementById("averageprint")
        let output2 = "<h2>Průměr:</h2>" + parseInt(average) + " %" + "<h2>Am I failing my class?</h2>" + "<p>no</p>"
        output.innerHTML += output2
    } else {
        let output = document.getElementById("averageprint")
        let output2 = "<h2>Průměr:</h2>" + parseInt(average) + " %" + "<h2>Am I failing my class?</h2>" + "<p>yes</p>"
        output.innerHTML += output2
    }
}
