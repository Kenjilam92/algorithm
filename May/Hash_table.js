function hash(key) {
    let output = 0;
    for(let i=0; i<key.length; i++) {
        output += key.charCodeAt(i);
    }
    return output;
}

class HashMap {
    constructor(cap = 10) {
        this.capacity = cap;
        this.hashmap = [];
        for(let i=0; i<this.capacity; i++) {
            this.hashmap.push([]);
        }
    }
    put(key, value) {
        let index = hash(key) % this.capacity;
        for(let i=0; i < this.hashmap[index].length; i+=2) {
            if(this.hashmap[index][i] === key) {
                this.hashmap[index][i+1] = value;
                return;
            }
        }
        this.hashmap[index].push(key);
        this.hashmap[index].push(value);
    }
    get(key) {
        let index = hash(key) % this.capacity;
        for(let i=0; i < this.hashmap[index].length; i+=2) {
            if(this.hashmap[index][i] === key) {
                return this.hashmap[index][i+1];
            }
        }
        throw new Error(`the key '${key}' was not present!`);
    }
}