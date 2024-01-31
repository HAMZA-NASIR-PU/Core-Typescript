var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var GenericDB = /** @class */ (function () {
    function GenericDB(value) {
        this.value = value;
    }
    GenericDB.prototype.getAll = function () {
        var arr = [];
        return arr;
    };
    GenericDB.prototype.getById = function (id) {
        return this.value;
    };
    GenericDB.prototype.create = function (body) {
        return this.value;
    };
    GenericDB.prototype.update = function (body, id) {
        return this.value;
    };
    GenericDB.prototype.delete = function (id) {
        return this.value;
    };
    GenericDB.prototype.logType = function () {
        // console.log(`Type of T: ${typeof this.value}`);  ===> Type of T: object
        if (this.value instanceof Object) {
            // Use constructor property for objects
            return this.value.constructor ? this.value.constructor.toString().match(/\w+/g)[1] : 'Object';
        }
        else {
            // Use typeof for non-objects
            return typeof this.value;
        }
    };
    GenericDB.prototype.getTypeOfImplementation = function () {
        if (this.value instanceof Object) {
            // Use constructor property for objects
            return this.constructor ? this.constructor.toString().match(/\w+/g)[1] : 'Object';
        }
        else {
            // Use typeof for non-objects
            return typeof this.value;
        }
    };
    return GenericDB;
}());
var genericDBObj = new GenericDB(new Student());
console.log(genericDBObj.logType());
console.log(genericDBObj.getTypeOfImplementation());
