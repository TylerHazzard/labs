 class Room {
    constructor(name, length, width, capacity) {
        this.name = name;
        this.length =length;
        this.width = width;
        this.avalible = true;
        this.capacity = 15;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimiter() {
        return 2 * this.length + 2 * this.width;
    }
 }

 const room1 = new Room("Sun", 30, 20);
 console.log(room1.name);
 console.log(room1.length);
 console.log(room1.width);
 console.log(room1.getArea());
 console.log(room1.getPerimiter());
 console.log(room1.avalible);
 console.log(room1.capacity);

 const room2 = new Room("Green", 15, 20);
 room2.avalible = false;
 room2.capacity = 18;
 console.log(room2.name);
 console.log(room2.length);
 console.log(room2.width);
 console.log(room2.getArea());
 console.log(room2.getPerimiter());
 console.log(room2.avalible);
 console.log(room2.capacity);
