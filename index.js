// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(param1 = "*"){
    return function (param2 = "special"){
        return `You are ${param1}${param2}${param1}!`
    };
}