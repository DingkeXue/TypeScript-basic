/*类与接口：类可以继承多个接口，通过 implements 实现*/
interface Alarm {
    alert();
}
interface Drive {
    driving();
}

class Door {

}

class SeDoor extends Door implements Alarm{
    alert() {
        console.log('b');
    }
}

class Car implements Alarm, Drive{
    alert() {
        console.log('bb');
    }
    driving() {
        console.log('i can drive');
    }
}

/*接口也可以继承接口*/
interface Open extends Alarm{
    alert();
}
