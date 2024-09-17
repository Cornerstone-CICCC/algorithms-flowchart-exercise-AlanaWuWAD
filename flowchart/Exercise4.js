let length1 = 10
let length2 = 12
let length3 = 18

if(length1 > 0 && length2 > 0 && length3 > 0){
    if(length1 < (length2 + length3)){
        if(length2 < (length1 + length3)){
            if(length3 < (length1 + length2)){
                console.log("A triangle is possible.")

            }else{
                console.log("Can't be a triagle.")
            }

        }else{
            console.log("Can't be a triagle.")
        }

    }else{
        console.log("Can't be a triagle.")
    }

}else{
    console.log("All lengths should be greater than 0")
}
