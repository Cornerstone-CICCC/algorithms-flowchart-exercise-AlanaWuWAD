let name = "Lily"
let score = 0.46

if(score >= 0){
    if (score > 0.8){
        console.log("Grade: A")
    }else{
        if(score < 0.4){
            console.log("No Grade")

        }else{
            if(score < 0.6){
                console.log("Grade: C")
            }else{
                console.log("Grade: B")
            }
        }
    }

}else{
    console.log("Score need to be greater than 0")
}