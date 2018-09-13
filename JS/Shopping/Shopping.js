function shoping(input) {
    let moneyForChocos =input[1] * 0.65
    let moneyForMilk = input[2] * 2.70
    let orangesCount = Math.floor(input[1] - input[1] * 0.35)
    let moneyForOranges = orangesCount * 0.20


    let totalSpendMoney = moneyForChocos + moneyForMilk + moneyForOranges

    if(totalSpendMoney <= input[0]){
        console.log(`You got this ${(input[0] - totalSpendMoney).toFixed(2)} money left.`)
    }else{
        console.log(`Not enough, you need ${(totalSpendMoney - input[0]).toFixed(2)} more.`)
    }
}
shoping([3, 4, 2.7]);