/*
* 命名空间内可以嵌套命名空间，外部如果要访问一定要加上 export
* */
namespace MyMath {
    export namespace Circle {
        const PI = 3.14;

        export function calcCircle(num: number): number {
            return num * PI;
        }
    }
}
