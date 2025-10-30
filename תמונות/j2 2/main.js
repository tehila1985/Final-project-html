let people = ["Greg", "Mary", "Devon", "James"];
//1
for (let index = 0; index <people.length; index++)
     {
       console.log(people[index])
     }
//2
people.shift()
console.log(people)
//3
people.pop()
console.log(people)
//4
people.unshift("Matt")
console.log(people)
//5
people.push("Tehila")
console.log(people)
//6
for (let index = 0; index <people.length; index++)
    {
       if(people[index]==="Mary")
        {
            console.log("Mary")
            break;
        }

    }
//7

const l = people.slice(0,1)+","+people.slice(2)
console.log(l)
//8
console.log(people.indexOf("Mary"))
//9
console.log(people.indexOf("foo"))
//10
 people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth",'Artie')
console.log(people)
//11
const arr=["Bob"]
const withBob = arr.concat(people)
const withBobb =[...arr, ...people]
console.log(withBobb)
//12

const mix=(num1, num2)=>
    {
    const r=[]
        for (let index = 0; index < Math.min(num1.length, num2.length); index++)
             {
               r.push(num1[index])
               r.push(num2[index])
             }  
             return r
     }
const r1=[1,2,3]
const r2=[4,5,6]
console.log(mix(r1,r2))
//13
const splitByOddAndEven=(num2)=>
    {
        const r=[]
        const rr=[]
        for (let index = 0; index < num2.length; index++)
             {
                if(num2[index]%2===0)
                    r.push(num2[index])
                else
                    rr.push(num2[index])
             }  
          return [r,rr]
     }
     const r11=[1,2,3,4,5,6,7,8]
     console.log(splitByOddAndEven(r11))
     