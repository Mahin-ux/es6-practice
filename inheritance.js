class parents{
    constructor(){
        this.fatherName = "Saif"
    }
}

class child extends parents{
    constructor(name) {
        super()
        this.name = name
    }
    getfullName(){
        return this.name + " "+ this.fatherName
    }
}
const child1 = new child("Rahim")
const child2 = new child("karim")
console.log(child1.getfullName(),child2.getfullName())
