# Cubit
このライブラリは、Cubitの機能を最大限活用するための基礎になるものです。
<br />

## 各種ブロックの説明


* ### Cubit設定
    * **何をする:** <br />
このコマンドはCubitの全ての機能の使用を宣言します。
<br />
    * **どう使う:** <br />
 プログラムの「最初だけ」の中に配置してください。

    ```blocks
        Cubit.cubit_setup()
    ```

* ### モータ反転設定
    * **何をする:** <br />
このコマンドはCubitの指定したモーターの回転方向を逆転します。
<br />
    * **どう使う:** <br />
 プログラムの「最初だけ」の中に配置して、逆転したいポートを選んでください。

    ```blocks
        Cubit.reverse_motor(motor_Port.A)
    ```

* ### モータ駆動
    * **何をする:** <br />
このコマンドは指定したモータを-100~100のパワーで回します。０の時にはモータは停止します。<br />
（次の指示を送るまで前の動作が継続されます。）
<br />
    * **どう使う:** <br />
 プログラムの使用したい場所に配置し、モータポートとパワーを設定してください。

    ```blocks
        basic.forever(function () {
            Cubit.drive_motor(motor_Port.A, 70)
            Cubit.drive_motor(motor_Port.B, -30)
        })
    ```







## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

```package
cubit=github:kusuwata/cubit
```