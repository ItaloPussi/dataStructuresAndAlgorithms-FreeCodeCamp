//  Sets

// The values are not in any particular order
// No duplicates

function mySet() {
    let collection = []

    // Verify if a element exists in the set
    this.has = function(element){
        return (collection.indexOf(element) !== -1)
    }

    // Return all the values of the set
    this.values = function(){
        return collection
    }

    // This method will add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element)
            return true
        }
        return false
    }

    // This method will remove an element from a set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element)
            collection.splice(index,1)
            return true
        }
        return false
    }

    this.size = function(){
        return collection.length
    }

    // Return the union between two sets
    this.union = function(otherSet){
        let unionSet = new mySet()
        let firstSet = this.values()
        let secondSet = otherSet.values()

        firstSet.forEach(function(e){
            unionSet.add(e)
        })

        secondSet.forEach(function(e){
            unionSet.add(e)
        })

        return unionSet
    }

    // Return the intersection of two sets
    this.intersection = function(otherSet){
        let intersectionSet = new mySet()
        let firstSet = this.values()
        let secondSet = otherSet.values()

        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })

        return intersectionSet
    }

    // Return the difference between a and b
    this.difference = function(otherSet){
        let differenceSet = new mySet()
        let firstSet = this.values()

        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })

        return differenceSet
    }

    // Return if the set is a subset of the otherSet
    this.subset = function(otherSet){
        let firstSet = this.values()
        return firstSet.every(function(value){
            return otherSet.has(value)
        })
    }
}

let setA = new mySet()
let setB = new mySet()

setA.add('a')
setA.add('1')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')
setB.remove('c')

console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())
console.log(setB.union(setA).values())