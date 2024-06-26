// Code your solution in this file!
let distless = 34
function distanceFromHqInBlocks(blocks){
    return  Math.abs(blocks-42)
    
    

   
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)





    
function distanceFromHqInFeet(blocks){
    
        
    return  Math.abs((blocks-42)*264)
}

    distanceFromHqInFeet(blocks)


function distanceTravelledInFeet(start,end){

    return Math.abs((end-start) * 264)
    

}
distanceTravelledInFeet(43,48)
distanceTravelledInFeet(34,28)



/*function calculatesFarePrice(start, destination){
    let final = (destination - start) * 264

 //   if(final<400){
        return 0
    }
    else if(final>400 && final<2000){
        return Maths.abs(final-400) * 0.02
        
}
else if(final>2000){
    return 25
}
else  {
    return 'does not allow rides over 2500 feet:'
}


}
calculatesFarePrice(43,44)
calculatesFarePrice(34,32)
calculatesFarePrice(50,58)*/

function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs((destination - start) * 264);

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
