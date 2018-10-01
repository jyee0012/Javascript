const addTwo = (x,y = 1) =>{
    return `${x} + ${y} = ${x + y}`;
}

addTwo(5, 10);