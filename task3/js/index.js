let number = "123456"

function reverse()
{

    for (let i=number.length-1;i>=0;i--)
    {
            
    document.write(number[i])
                
    }

}

reverse();

document.write("<br/>")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

for(let i=0;i<=15;i++)
{
    if(i%2==0)
    {
        console.log(i)
        console.log("is even")
    }

    else
    {
        console.log(i)
        console.log("is odd")
    }


}



let numstr =prompt("enter number please")
let result = ""

for(let i=0;i<numstr.length;i++)
{
    result += numstr[i]

    if((numstr[i]%2==0) && (numstr[i+1]%2==0))
    {
        result +='-'
    }



}

document.write(result);

 document.write("<br/>")
 document.write("<br/>")
 document.write("<br/>")
 document.write("<br/>")

function Agechecker(age)
{

if(age>=18)
{
    document.write("The user is Adult")
}

else
{
document.write("The user is Minor")
}

}

Agechecker(18)
document.write("<br/>")
Agechecker(10)
