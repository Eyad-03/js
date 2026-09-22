let number = "123456"

for (let i=number.length-1;i>=0;i--)
{

document.write(number[i])


}
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

for(let i=0;i<=15;i++)
{
    if(i%2==0)
    {
        document.write(i)
        document.write("is even")
        document.write("<br/>")
    }

    else
    {
        document.write(i)
        document.write("is odd")
        document.write("<br/>")
    }


}



let numstr = "025468"
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
