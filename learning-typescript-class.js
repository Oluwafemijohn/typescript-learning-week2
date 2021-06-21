var HumanBeing = /** @class */ (function () {
    function HumanBeing(name, country, color, gender, height, weight, status, likeFood) {
        var _this = this;
        this.details = function () {
            return _this.name + " is someone from " + _this.country + " of " + _this.color + " colour with " + _this.height + "meter and  " + _this.weight + "kg. \n He is " + _this.status + " and likes the following food: " + _this.likeFood;
        };
        this.name = name;
        this.country = country;
        this.color = color;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.status = status;
        this.likeFood = likeFood;
    }
    return HumanBeing;
}());
var personOne = new HumanBeing("Oluwafemi", "Nigeria", "black", "Male", 1.6, 51, "Single", ["Bread and egg", "Yogut", "Porrage", "Semo"]);
console.log(personOne);
