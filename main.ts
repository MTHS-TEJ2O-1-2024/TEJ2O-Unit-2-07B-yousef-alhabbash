 /* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: Sep 2024
 * This program will make a cookie clicker
*/

let cookienumber = 0
basic.showNumber(0)



basic.clearScreen()

input.onButtonPressed(Button.A, function () {

    cookienumber += 1
    basic.showNumber(cookienumber)


})

    input.onButtonPressed(Button.B, function () {

        cookienumber = 0
        basic.showNumber(cookienumber)






})