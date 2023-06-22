//航行・観覧共通のレイアウト

import Image from 'next/image'

export default function NaviFolder_Layout({
    children,
  }: {
    children: React.ReactNode
  }){

    //表示させる情報
    const information = {

        //リアカメラ
        'rear':{
            //情報一覧
            'info':[
                '気温',
                '風向',
                '天候'
            ],

            //情報の値
            'info_value':[
                '18℃',
                '↑',
                '曇り'
            ]
        },

        //フロントカメラ
        'front':{
            //情報一覧
            'info':[
                '航行時間'
            ],

            //情報の値
            'info_value':[
                '１：０４：５６'
            ]
        }

    }

    return(
        <div>

            {/* 電話のボタン */}

            {/* 映像 */}
            <div>

                {/* リアカメラ */}
                <div>

                    <Image
                    src = '/rear_camera.png'
                    alt = 'リアカメラ'
                    width = { 339 }
                    height = { 241 }

                    //仮のCSS
                    className = 'fixed top-[404px] left-[27px]'
                    />

                    {/*　状況表示 */}
                    <div>
                        <ul>

                            {information.rear.info.map((value,key)=>

                            <li
                            key = { key }
                            >

                                <span>
                                    {value}
                                </span>

                                <span>
                                    {information.rear.info_value[key]}
                                </span>

                            </li>

                            )}

                        </ul>
                    </div>

                </div>

                {/* フロントカメラ */}
                <div>
                    <Image
                    src = '/front_camera.png'
                    alt = 'フロントカメラ'
                    width = { 339 }
                    height = { 241 }

                    //仮のCSS
                    className = 'fixed top-[141px] left-[27px]'
                    />

                    {/* 状況表示 */}
                    <div>

                        <ul>
                            <li>
                                <span>
                                    {information.front.info}
                                </span> 
                                <span>
                                    {information.front.info_value}
                                </span>
                            </li>

                            {/* 水分図 */}
                            <li>
                                
                                <Image
                                src = '/body_water.png'
                                alt = '体内の水分状況'
                                width = { 179 }
                                height = { 28 }
                                />

                            </li>
                        </ul>

                    </div>

                </div>

            </div>

            {children}

        </div>
    )

}