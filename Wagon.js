class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.getAvailableSeatCount()) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        return this.passengers.some(passenger => !passenger.isHealthy) 
    }

    totalFood() {
        let foodCount = 0 
        for (let index = 0; index < this.passengers.length; index++) {
            const traveler = this.passengers[index];
            foodCount += traveler.food
        }
        return foodCount
    } 
}





// class Traveler {
//     constructor(name) {
//         this.name = name 
//         this.food = 1
//         this.isHealthy = true
//     }
//    hunt() {
//        this.food += 2
//    }  

//    eat() {
//        if (this.food === 0) {
//         this.isHealthy = false
//        } else {
//            this.food -= 1
//        }
         
//    }
// }