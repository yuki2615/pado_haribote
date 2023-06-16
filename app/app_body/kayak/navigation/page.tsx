//航行中の画面

import Image from 'next/image'

export default function Navigation(){

    //映像(フロントカメラとリアカメラ)
    const live_camera = {
        'name' : ['フロントカメラ','リアカメラ'],

        //Imageタグで呼び出す
        'screen' : ['/front_camera.png','/rear_camera.png'],

        //tailwind cssの設定を記述
        'setting_css' : [
            'fixed top-[141px] left-[27px]',
            'fixed top-[404px] left-[27px]'
        ]
    }

    return(
        <div>
            
            {/* 映像 */}
            <div>

                {live_camera.screen.map((value,key)=>
                    <div
                    key = {key}
                    className = {live_camera.setting_css[key]}
                    >

                        {/* 画像の挿入 */}
                        <Image
                        src = {value}
                        alt = {live_camera.name[key]}
                        width = { 339 }
                        height = { 241 }
                        />

                    </div>
                )}

            </div>

        </div>
    )
}