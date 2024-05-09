// Создаем функцию-конструктор для родительского класса Электроприбор
function ElectricAppliance(name, power) {
    this.name = name; // Название прибора
    this.power = power; // Потребляемая мощность
    this.pluggedIn = false; // Прибор изначально не включен в розетку
}

// Методы для включения и выключения прибора
ElectricAppliance.prototype.plugIn = function() {
    this.pluggedIn = true;
    console.log(this.name + ' включен в розетку.');
}

ElectricAppliance.prototype.unPlug = function() {
    this.pluggedIn = false;
    console.log(this.name + ' выключен из розетки.');
}

// Создаем делегирующую связь для конкретных приборов
function DeskLamp(name, power, brightness) {
    ElectricAppliance.call(this, name, power);
    this.brightness = brightness; // Свойство уровень яркости
}

DeskLamp.prototype = Object.create(ElectricAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Метод для установки уровня яркости
DeskLamp.prototype.setBrightness = function(level) {
    this.brightness = level;
    console.log(this.name + ' яркость установлена на ' + level);
}

// Создаем экземпляр настольной лампы
const myDeskLamp = new DeskLamp('Настольная лампа', 25, 50);

// Включаем и устанавливаем яркость лампы
myDeskLamp.plugIn();
myDeskLamp.setBrightness(75);

// Создаем класс Микроволновка с унаследованными свойствами от Электроприбора
function Microwave(name, power, cookingTime) {
    ElectricAppliance.call(this, name, power);
    this.cookingTime = cookingTime; // Время приготовления блюда
    this.cooking = false; // Флаг, показывающий, что микроволновка сейчас работает
}

// Наследуем методы от Электроприбора
Microwave.prototype = Object.create(ElectricAppliance.prototype);
Microwave.prototype.constructor = Microwave;

// Метод для начала приготовления блюда
Microwave.prototype.startCooking = function() {
    if (this.pluggedIn) {
        this.cooking = true;
        console.log(this.name + ' начал приготовление блюда.');
    } else {
        console.log('Сначала подключите ' + this.name + ' к розетке.');
    }
}

// Метод для остановки приготовления блюда
Microwave.prototype.stopCooking = function() {
    this.cooking = false;
    console.log(this.name + ' остановлен.');
}

// Создаем экземпляр микроволновки
const myMicrowave = new Microwave('Микроволновка', 1200, '2 минуты');

// Проверяем работу методов для микроволновки
myMicrowave.plugIn();
myMicrowave.startCooking();