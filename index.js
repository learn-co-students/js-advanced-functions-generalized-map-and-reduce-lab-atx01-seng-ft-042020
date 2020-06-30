function map(sourceArray, block){
    const newArray = [];

    for(let i=0; i<sourceArray.length; i++){
        newArray.push(block(sourceArray[i]))
    }
    return newArray;
};



function reduce(sourceArray, block, start){
    let starter = (!!start) ? start : sourceArray[0];
    
    for( let i = (!!start) ? 0 : 1; i<sourceArray.length; i++){
        starter = block(sourceArray[i], starter);
    };

    return starter;
}
