

let value = 200;

function mention(value){
    if (value>=90 && value<=100){
        console.log("Menção: A")
    }
    else if (value>=80 && value<=89){
        console.log("Menção: B")
    }
    else if (value>=70 && value<=79){
        console.log("Menção: C" )
    }
    else if (value>=60 && value<=69){
        console.log("Menção: D")
    }
    else if (value<60 && value>=0){
        console.log("Menção: F")
    }
    else{
        console.log("Nota Inválida!")
    }
}

console.log(mention(value))
