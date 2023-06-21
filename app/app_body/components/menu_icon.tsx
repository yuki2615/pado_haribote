//画面遷移に使用するメニューアイコンの作成

'use client'

import Image from 'next/image'
import { useRouter,usePathname } from 'next/navigation'

export default function Menu_Icon(){

    const router = useRouter()
    const pathname = usePathname()

    //tailwind cssのclassの中身
    const menu_class=[
        //日誌
        'fixed bottom-[12px] left-[35px] h-[102px] z-48',

        //カヤック
        'fixed w-[120px] h-[120px] bottom-[66px] left-[135px] z-50 rounded-full bg-white',

        //プロフィール
        'fixed bottom-[12px] right-[35px] h-[102px] z-48'
    ]

    //メニューバー一覧
    const menu = {
        //Imageのaltに使う
        'name' : ['日誌','カヤック','プロフィール'],

        //リンク
        'link' : {
            //画面遷移用
            next_path:['/app_body/diary','/app_body/kayak','/app_body/profile'],
            //現在のパスと比べる用
            now_path:['diary','kayak','profile']
        },

        //アイコン
        'icon':{
            //通常時
            'png' : ['/diary.png','/kayak.png','/profile.png'],
            //開かれているとき
            'png_on' : ['/diary_on.png','/kayak_on.png','/profile_on.png'],
        },

        //アイコンのサイズ
        //[ 日誌 , カヤック , プロフィール ]
        'size': {
            'height':[ 102, 100 , 102 ],
            'width':[ 132, 100 , 132 ],
        }
    }

    return(
        <div>

            <div
            className='fixed bottom-0 left-0 w-full h-[126px] bg-white'
            >
            
            {/* メニューバーを表示 */}
            {menu.name.map((value,key)=>
            <button
            key = {key}
            //画面遷移
            onClick = {()=>router.push(menu.link.next_path[key])}
            >
                {/* tailwind cssの設定 */}
                <div
                className = { menu_class[key] } 
                >

                {/* アイコン */}
                <Image
                //表示されるアイコンの色を決める
                src = { pathname.includes(menu.link.now_path[key]) ?
                    menu.icon.png_on[key]
                    :
                    menu.icon.png[key]
                }
                alt = {value}
                height={menu.size.height[key]}
                width={menu.size.width[key]}

                className={key==1?'fixed bottom-[76px] left-[145px]':''}
                />

                </div>
                

            </button>
            )}
            </div>
        </div>
    )

}