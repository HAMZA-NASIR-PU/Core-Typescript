interface IBaseRepository<T> {
    getAll(): T[];
    getById(id: number): T;
    create(body: T): T;
    update(body: T, id: number): T
    delete(id: number): T
    logType(): any
    getTypeOfImplementation(): any
}

class Student {
    Id: number
    name: string
    rollNo: string
    batch: string
}

class GenericDB<T> implements IBaseRepository<T>{
    private value: T;
    constructor(value: T) {
        this.value = value;
    }
    getAll(): T[] {
        var arr: T[] = [];
        return arr;
    }

    getById(id: number): T {
        return this.value;
    }

    create(body: T): T {
        return this.value;
    }

    update(body: T, id: number): T {
        return this.value;
    }

    delete(id: number): T {
        return this.value;
    }

    logType(): any {
        // console.log(`Type of T: ${typeof this.value}`);  ===> Type of T: object
        if (this.value instanceof Object) {
            // Use constructor property for objects
            return this.value.constructor ? this.value.constructor.toString().match(/\w+/g)![1] : 'Object';
        } else {
            // Use typeof for non-objects
            return typeof this.value;
        }
    }

    getTypeOfImplementation(): any {
        if (this.value instanceof Object) {
            // Use constructor property for objects
            return this.constructor ? this.constructor.toString().match(/\w+/g)![1] : 'Object';
        } else {
            // Use typeof for non-objects
            return typeof this.value;
        }
    }
}


var genericDBObj: IBaseRepository<Student> = new GenericDB<Student>(new Student());

console.log(genericDBObj.logType());
console.log(genericDBObj.getTypeOfImplementation());

