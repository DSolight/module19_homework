// Определяем класс Электроприборов
class ElectricAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false; // Флаг, показывающий, что прибор подключен к розетке
    }

    plugIn() {
        this.pluggedIn = true;
        console.log(this.name + ' подключена к розетке.');
    }

    unplug() {
        this.pluggedIn = false;
        console.log(this.name + ' отключена от розетки.');
    }
}

// Определяем класс Настольной лампы, наследующий от Электроприбора
class DeskLamp extends ElectricAppliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
        this.turnedOn = false;
    }

    turnOn() {
        if (this.pluggedIn) {
            this.turnedOn = true;
            console.log(this.name + ' включена на яркость ' + this.brightness + '.');
        } else {
            console.log('Сначала подключите ' + this.name + ' к розетке.');
        }
    }

    turnOff() {
        this.turnedOn = false;
        console.log(this.name + ' выключена.');
    }
}

// Создаем экземпляр настольной лампы
const myDeskLamp = new DeskLamp('Настольная лампа', 60, '50%');

// Проверяем работу методов для настольной лампы
myDeskLamp.plugIn();
myDeskLamp.turnOn();
myDeskLamp.turnOff();

// Определяем класс Микроволновки, наследующий от Электроприбора
class Microwave extends ElectricAppliance {
    constructor(name, power, cookingTime) {
        super(name, power);
        this.cookingTime = cookingTime;
        this.cooking = false;
    }

    startCooking() {
        if (this.pluggedIn) {
            this.cooking = true;
            console.log(this.name + ' начал приготовление блюда.');
        } else {
            console.log('Сначала подключите ' + this.name + ' к розетке.');
        }
    }

    stopCooking() {
        this.cooking = false;
        console.log(this.name + ' остановлена.');
    }
}

// Создаем экземпляр микроволновки
const myMicrowave = new Microwave('Микроволновка', 1200, '2 минуты');

// Проверяем работу методов для микроволновки
myMicrowave.plugIn();
myMicrowave.startCooking();
myMicrowave.stopCooking();