// Stacks

// Functions: push, pop, peek, length

// -------------------------------------------------------------

// let letters = []
// let word = 'racecar'
// let rword = ""

// for(let i = 0; i < word.length; i++){
//     letters.push(word[i])
// }

// for (let i = 0; i < word.length; i++){
//     rword+= letters.pop()
// }

// if (rword === word){
//    console.log(`${word} is a palindrome.`) 
// }else{
//     console.log(`${word} isn't a palindrome.`)
// }

// -------------------------------------------------------------
// Implementing a stack from scratch

const Stack = function(){
    this.count = 0;
    this.storage = {}

    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value
        this.count++
    }

    // Removes and returns the value at the end of the stack
    this.pop = function(){
        if (this.count === 0){
            return undefined
        }

        this.count--;
        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.size = function() {
        return this.count
    }

    this.peek = function() {
        return this.storage[this.count-1]
    }
}

var myStack = new Stack()

myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
myStack.push("freeCodeCamp")
console.log(myStack.size())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
