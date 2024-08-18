let alienColor : string = "green";

//if alien is green , print message that player earned 5 points
if(alienColor == "green"){
    console.log("the player just earned 5 points  . ")
}

//if alien is yellow, print message that player earned 10 points
else if(alienColor == "yellow"){
    console.log("the player just earned 10 points  . ")
}

//if alien is red, print message that player earned 15 points
else if(alienColor == "red"){
    console.log("the player just earned 15 points  . ")
}

else{
    console.log("please select right color")
}
//write 3 version of this program make sure that each message is print

//version 2
alienColor ="red";
if(alienColor == "green"){
    console.log("the player just earned 5 points  . ")
}
else if(alienColor == "yellow"){
    console.log("the player just earned 10 points  . ")
}
else if(alienColor == "red"){
    console.log("the player just earned 15 points  . ")
}
else{
    console.log("please select right color")
}

//version 3
alienColor = "yellow";
if(alienColor == "green"){
    console.log("the player just earned 5 points  . ")
}
else if(alienColor == "yellow"){
    console.log("the player just earned 10 points  . ")
}
else if(alienColor == "red"){
    console.log("the player just earned 15 points  . ")
}
else{
    console.log("please select right color")
}
