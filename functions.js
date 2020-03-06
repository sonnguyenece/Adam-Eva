function Human(name, gender, weight) {
    this.weight = weight;
    this.name = name;
    this.gender = gender;
    this.say = '';
    this.getSay = function () {
        return this.say
    };
    this.getName = function () {
        return this.name;
    };
    this.getGender = function (gender) {
        if (gender = "Male") {
            this.gender = "Male";
            return "Male"
        } else {
            this.gender = "Female";
            return "Female"
        }
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.checkApple = function (fruit) {
        if (fruit.isEmpty()) {
            this.checkApple = false;
        } else {
            this.checkApple = true;
        }
    };
    this.eatApple = function (food) {
        food.appleWeight = food.appleWeight - 1;
        this.weight++;
    };
}

let dv = 10;
function Apple() {
    this.weight = dv;
    this.isEmpty = function () {
        if (this.weight === 0) this.isEmpty = true;
        else this.isEmpty = false;
    };

    this.getAppleWeight = function () {
        return this.weight;
    };
    this.eaten = function () {
        this.weight--;
        if (this.weight < 0) {
            this.weight = 0;
            return;
        }
    }
}

let adam = new Human("adam", true, 60);
let eva = new Human("eva", false, 40);
apple = new Apple();

function adamStats() {
    document.getElementById("adamStt").innerHTML = adam.getName() + " " +
        adam.getWeight() + "kg  " + adam.getGender();
    adam.say="Hello!I'm the first man in the world";
    console.log(adam.getSay());
    document.getElementById("adamSay").innerHTML = adam.getSay();
}

function adamEat() {
    if (apple.weight !== 0) {
        adam.say = "I have something to eat";
        console.log(adam.getSay());
        adam.eatApple(apple);
        apple.eaten();
    } else {
        adam.say = "Shit!!!";
        console.log(adam.getSay());
    }
    console.log(apple.weight);
    document.getElementById("appStt").innerHTML = "So tao con lai = " + apple.weight + "kg";
}

function evaStats() {
    document.getElementById("evaStt").innerHTML = eva.getName() + " " +
        eva.getWeight() + "kg  " + eva.getGender();
    eva.say("Hi!I'm the first woman in the world");
    console.log(eva.getSay());
    document.getElementById("evaSay").innerHTML = eva.getSay();
}

function evaEat() {
    if (apple.weight !== 0) {
        eva.say = "I have something to eat";
        console.log(eva.getSay());
        eva.eatApple(apple);
        apple.eaten();
    } else {
        eva.say = "Shit!!!";
        console.log(eva.getSay())
    }
    console.log(apple.weight);
    document.getElementById("appStt").innerHTML = "So tao con lai = " + apple.weight + "kg";
}

