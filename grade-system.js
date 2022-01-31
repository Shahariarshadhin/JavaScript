function gradesystem(obtainNumber) {
    if (obtainNumber >= 80) {
        console.log("Your Grade is A+")
    } else if ((obtainNumber < 80) && (obtainNumber >= 75)) {
        console.log("Your Grade is A")

    } else if ((obtainNumber < 75) && (obtainNumber >= 70)) {
        console.log("Your Grade is A-")

    } else if ((obtainNumber < 70) && (obtainNumber >= 65)) {
        console.log("Your Grade is B")

    } else if ((obtainNumber < 65) && (obtainNumber >= 60)) {
        console.log("Your Grade is B-")

    } else if ((obtainNumber < 60) && (obtainNumber >= 55)) {
        console.log("Your Grade is C")
    } else if ((obtainNumber < 55) && (obtainNumber >= 50)) {
        console.log("Your Grade is C-")
    } else if ((obtainNumber < 50) && (obtainNumber >= 45)) {
        console.log("Your Grade is D")
    } else if ((obtainNumber < 45) && (obtainNumber >= 40)) {
        console.log("Your Grade is D-")

    } else {
        console.log("Your Grade is F")
    }

}
gradesystem(79);