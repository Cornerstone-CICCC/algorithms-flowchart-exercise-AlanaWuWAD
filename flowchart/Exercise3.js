let num1 = 1
let num2 = 100
let num3 = 100

if(num1 != num2) {
    if(num3 != num1 && num3 != num2){
        if(num1 > num2){
            if(num1 > num3){
                console.log(`The largest number is ${num1}`)
            }

        }else{
            if(num2 > num3){
                console.log(`The largest number is ${num2}`)
            }else{
                console.log(`The largest number is ${num3}`)
            }

        }


    }else {
        console.log("The three numbers can't be equal to each other") 
    }

}else{
    console.log("The three numbers can't be equal to each other")

}