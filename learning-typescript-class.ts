class HumanBeing{
    name:string;
    country:string;
    color:string;
    gender: string
    height:number;
    weight:number;
    status: string;
    likeFood:[string, string, string, string]


    constructor(name:string, country:string, color:string, gender:string, height:number, weight:number, status:string, likeFood: [string, string, string, string]){
        this.name = name;
        this.country = country;
        this.color = color;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.status = status;
        this.likeFood = likeFood
    }

     details = () =>{
         return `${this.name} is someone from ${this.country} of ${this.color} colour with ${this.height}meter and  ${this.weight}kg. \n He is ${this.status} and likes the following food: ${this.likeFood}`
    }
}

const personOne = new HumanBeing("Oluwafemi", "Nigeria", "black", "Male", 1.6, 51, "Single", ["Bread and egg", "Yogut", "Porrage", "Semo"])
console.log(personOne)