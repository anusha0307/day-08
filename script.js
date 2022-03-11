//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class movie{
    constructor(title,studio, rating='PG'){
        this.title=title
        this.studio=studio
        this.rating=rating  
    }
    getpg(arr){
        let result=[]
      arr.filter(movie=>{
          if (movie.rating==='PG'){
              result.push(movie)              
         }
      }
         )
         return result
}
}
const obj=new movie('casino royale','eon productions','PG13')
const obj1=new movie('robo','ammani','PG')
const obj2=new movie('balu','amr')
let arr=[obj,obj1,obj2]
console.log(obj.getpg(arr))

// output
[
    movie { title: 'robo', studio: 'ammani', rating: 'PG' },
    movie { title: 'balu', studio: 'amr', rating: 'PG' }
  ]



// 2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class circle{
constructor(radius,color){
this.radius=radius
this.color=color
}

getRadius(radius){
    return this.radius
}
 setRadius(radius){
      this.radius=radius
 }
 getColor(color){
     return this.color
 }
setColor(color){
    this.color=color
}

getArea(){
    return Math.PI*this.radius
}
 getCircumference(){
     return 2*Math.PI*this.radius
 }}


 let mycircle=new circle(1,"red")
console.log(mycircle.getRadius())
console.log(mycircle.getColor())
console.log(mycircle.getArea())
console.log(mycircle.getCircumference())

// output
1
red
3.141592653589793
6.283185307179586

//3.Write a “person” class to hold all the details

class person{
    constructor(name,age,address){
        this.name=name
        this.age=age
        this.address=address
        
    }
    getdetails(){
        return `this is ${this.name} of age  ${this.age} `
    }
    getaddress()
    {
    return `this is ${this.name}  from ${this.address}`
}
}
class person1 extends person{
    constructor(name,age){
        super(name)
        this.age=age
     }
    getdetails(){
      return  super. getdetails()
    }
}

class address extends person1{
    constructor(name,address){
     super(name)
this.address=address
    }
    getaddress(){
        return super.getaddress()
    }
}
let personobj=new person1("kavya","20")
let personobj1=new address("anu","banglore")

console.log(personobj.getdetails())
console.log(personobj1.getaddress())
// output
this is kavya of age  20 
this is anu  from banglore


//4.write a class to calculate uber price.
class uberprice{
    constructor(distance,price){
       this.distance=distance
       this.price=price
    }
   getprice(){
       return this.distance*this.price
   }
}
let uberobj=new uberprice(3,150)
console.log(uberobj.getprice())

// output
450