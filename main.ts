/**
 * Provides access to basic micro:bit functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
//% groups=['LED matrix', 'Control flow', 'others']
namespace adoreos_core {
    //% block
    export function showNumbers(v: number, interval: number = 150): void {
        basic.showNumber(0)
    }
}