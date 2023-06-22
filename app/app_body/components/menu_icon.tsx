//画面遷移に使用するメニューアイコンの作成

'use client'

import Image from 'next/image'
import { useRouter,usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Menu_Icon(){

    const router = useRouter()
    const pathname = usePathname()

    //航行・観覧を中止するか
    const [ navi_stop , setNaviStop ] = useState('no')

     //メニューバー一覧
     const menu = {
        //Imageのaltに使う
        'name' : ['日誌','カヤック','プロフィール'],

        //画面遷移用(next_path)と現在のパスと比べる用(now_path)
        'link' : {
            next_path:['/app_body/diary','/app_body/kayak','/app_body/profile'],
            now_path:['diary','kayak','profile']
        },

        //pngが通常時、png_onが開かれている画面の時のアイコン
        'png' : ['/diary.png','/kayak.png','/profile.png'],
        'png_on' : ['/diary_on.png','/kayak_on.png','/profile_on.png'],

        //アイコンのサイズ
        //[ 日誌 , カヤック , プロフィール ]
        'size': {
            'height':[ 102, 100 , 102 ],
            'width':[ 132, 100 , 132 ],
        }
    }

    return(
        <div>

            <div className='fixed bottom-0 left-0 w-full h-[120px] bg-white flex justify-around'>
            
            {/* メニューバーを表示 */}
            {menu.name.map(( value , key )=>
            <button
            key = {key}
            //画面遷移
            onClick = {()=>
                //そのページのアイコンが押されたか
                pathname.includes(menu.link.next_path[key]) == false ?
                router.push(menu.link.next_path[key])
                :
                //航行・観覧中か
                pathname.includes('navi_folder') == true ?

                //終了しますかの文字を表示
                setNaviStop('yes')
                :
                ''
            }
            >
                {/* tailwind cssの設定 */}
                <div className="flex flex-col items-center m-2">
                {/* <div
                className = { menu_class[key] } 
                > */}

                {/* アイコン */}
                <Image
                //表示されるアイコンの色を決める
                src = { pathname.includes(menu.link.now_path[key]) == true ?
                    menu.png_on[key]
                    :menu.png[key]
                }
                alt = {value}
                height={menu.size.height[key]}
                width={menu.size.width[key]}
                // className={key==1?'fixed bottom-[76px] left-[145px]':''}
                />

                </div>
                

            </button>
            )}
            </div>

            {/* 航行・観覧を終了するか選択する */}
            {navi_stop == 'yes' ?
            <div>
                <p>
                    {pathname.includes('navigation') == true ?
                    <span>
                        航行
                    </span>
                    :
                    <span>
                        観覧
                    </span>
                    }
                    を終了しますか
                </p>

                <div>
                    <button
                    onClick = {()=>{
                        setNaviStop('no')

                        pathname.includes('navigation') == true ?
                        router.push('../../diary/map/today_map')
                        :
                        router.push('../../diary/map/frend_map')
                    }}
                    >
                        はい
                    </button>

                    <button
                    onClick = {()=>{
                        setNaviStop('no')
                    }}
                    >
                        いいえ
                    </button>
                </div>

            </div>
                :
            <div />
            }

        </div>
    )

}