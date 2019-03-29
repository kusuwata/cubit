enum motor_Port {
    //% block="A"
    A = 1,
    //% block="B"
    B = 2,
    //% block="C"
    C = 3,
    //% block="D"
    D = 4

}

enum AIN_Port {
    //% block="A1"
    A1 = 1,
    //% block="A2"
    A2 = 2,
    //% block="A3"
    A3 = 3,
    //% block="A4"
    A4 = 4,
    //% block="A5"
    A5 = 5
}
enum DIN_Port {
    //% block="D1"
    D1 = 1,
    //% block="D2"
    D2 = 2,
    //% block="D3"
    D3 = 3,
    //% block="D4"
    D4 = 4,
    //% block="D5"
    D5 = 5
}
enum Header {
    //% block="A"
    a = 1,
    //% block="B"
    b = 2,
    //% block="C"
    c = 3,
    //% block="D"
    d = 4,
    //% block="E"
    e = 1,
    //% block="F"
    f = 2,
    //% block="G"
    g = 3,
    //% block="H"
    h = 4

}

/**
    * Cubitを利用するための基本ライブラリです。
    */

//% weight=1000 color=#0fbc11 icon="❑"
namespace Cubit {

    let DM = 1
    let CM = 1
    let BM = 1
    let DD = 1
    let DP = 1
    let CD = 1
    let CP = 1
    let BD = 1
    let BP = 1
    let AD = 1
    let AP = 1
    let AM = 1
    let AR = 1
    let BR = 1
    let CR = 1
    let DR = 1

    /**
    * Cubitに接続されたモータを駆動します。
    */
    //% blockId=drive_motor block="モータ駆動 ポート %MotorPort パワー %Power"
    //% text.shadowOptions.toString=true
    //% Power.min=-100 Power.max=100
    //% weight=3
    export function drive_motor(MotorPort: motor_Port, Power: number): void {




        switch (MotorPort) {
            case 1:
                AM = Power * AR
                MotorDriverA()
                break

            case 2:
                BM = Power * BR
                MotorDriverB()
                break


            case 3:
                CM = Power * CR
                MotorDriverC()
                break
            case 4:
                DM = Power * DR
                MotorDriverD()
                break
        }
    }

    /**
    * Cubitを設定します。「最初だけ」の中に配置してください。
    */
    //% blockId=cubit_setup block="Cubit設定"
    //% text.shadowOptions.toString=true
    //% weight=6
    export function cubit_setup() {
        serial.redirect(
            SerialPin.P0,
            SerialPin.P1,
            BaudRate.BaudRate115200
        )

    }



    /**
     * Cubitのモータ反転を設定します。
     */
    //% blockId=reverse_motor block="モータ反転設定 ポート %PortSelect ""
    //% text.shadowOptions.toString=true
    //% weight=2
    export function reverse_motor(PortSelect: motor_Port) {
        switch (PortSelect) {
            case 1:
                AR = -1

                break
            case 2:
                BR = -1

                break


            case 3:
                CR = -1

                break
            case 4:
                DR = -1

                break
        }

    }

    /**
    * 値の範囲のとりかたをCubitのモータに適した値に変換します。
    */

    //% blockId=map_power block="モータパワー変換　最小 %Min 最大 %Max  値 %Var""
    //% inlineInputMode=inline
    //% weight=1
    export function map_power(Min: number, Max: number, Var: number) {

        return Math.map(Min, Max, Var, -100, 100)
    }

    /**
    * アナログ入力ポートを選択します
    */

    //% blockId=AnalogPort block="アナログ入力ポート　　ポート %Port""
    //% inlineInputMode=inline
    //% weight=4
    export function AnalogPort(Port: AIN_Port) {
        switch (Port) {
            case 1:
                return pins.P3

                break
            case 2:
                return pins.P0

                break


            case 3:
                return pins.P4

                break
            case 4:
                return pins.P1

                break
            case 5:
                return pins.P2
                break
        }
        return pins.P3

    }



    /**
       * デジタル入出力ポートを選択します
       */

    //% blockId=DigitalPort block="デジタル入力ポート　ポート %Port""
    //% inlineInputMode=inline
    //% weight=5
    export function DigitalPort(Port: DIN_Port) {
        switch (Port) {
            case 1:
                return pins.P6
                break
            case 2:
                return pins.P7

                break

            case 3:
                return pins.P8

                break
            case 4:
                return pins.P9
                break
            case 5:
                return pins.P16

                break
        }
        return pins.P6
    }




    function MotorDriverA() {
        if (AM < 0) {
            AP = Math.abs(AM)
            AD = 2
        } else if (AM == 0) {
            AP = 0
            AD = 0
        } else {
            AD = 1
            AP = Math.abs(AM)
        }
        serial.writeString("A")
        serial.writeNumber(AD)
        serial.writeString("D")
        serial.writeNumber(AP)
        serial.writeString("P")
    }
    function MotorDriverB() {
        if (BM < 0) {
            BP = Math.abs(BM)
            BD = 2
        } else if (BM == 0) {
            BP = 0
            BD = 0
        } else {
            BD = 1
            BP = Math.abs(BM)
        }
        serial.writeString("B")
        serial.writeNumber(BD)
        serial.writeString("D")
        serial.writeNumber(BP)
        serial.writeString("P")
    }
    function MotorDriverC() {
        if (CM < 0) {
            CP = Math.abs(CM)
            CD = 2
        } else if (CM == 0) {
            CP = 0
            CD = 0
        } else {
            CD = 1
            CP = Math.abs(CM)
        }
        serial.writeString("C")
        serial.writeNumber(CD)
        serial.writeString("D")
        serial.writeNumber(CP)
        serial.writeString("P")
    }

    function MotorDriverD() {
        if (DD < 0) {
            DP = Math.abs(DM)
            DD = 2
        } else if (DM == 0) {
            DP = 0
            DD = 0
        } else {
            DD = 1
            DP = Math.abs(DM)
        }
        serial.writeString("D")
        serial.writeNumber(DD)
        serial.writeString("D")
        serial.writeNumber(DP)
        serial.writeString("P")

    }

}
