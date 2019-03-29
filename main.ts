enum MyEnum {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="C"
    C,
    //% block="D"
    D

}


//% weight=100 color=#0fbc11 icon=""
namespace cubit {
    /**
     * @param MotorPower ここでパラメーターの説明をしてください。, eg: 0
     * @param MotorPort ここでパラメーターの説明をしてください。, eg: "A"
     */

    let DM = 0
    let CM = 0
    let BM = 0
    let DD = 0
    let DP = 0
    let CD = 0
    let CP = 0
    let BD = 0
    let BP = 0
    let AD = 0
    let AP = 0
    let AM = 0


    //% blockId=drive_motor
      //% block="Motor"
      //% MotorPower.min=-100 speed.max=100
    export function モータ駆動(MotorPort: MyEnum, MotorPower: number): void {




        switch (MotorPort) {
            case 1:
                AM = MotorPower
                MotorDriverA()

            case 2:
                BM = MotorPower
                MotorDriverB()

            case 3:
                CM = MotorPower
                MotorDriverC()

            case 4:
                DM = MotorPower
                MotorDriverD()

        }
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

    
