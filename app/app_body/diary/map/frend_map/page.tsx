//フレンドの航行を確認する画面

'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

//バックボタン
import Back_button from '../../../components/back_button'

export default function Frend_Map(){

    const router = useRouter()

    return(
        <div>

            {/* バックボタンの表示 */}
            <Back_button />

            {/* 地図を表示 */}
            <div>

                {/* 地図 */}
                <Image
                src = '/map.png'
                alt = '地図'
                width = { 390 }
                height = { 626 }
                />

                <button
                onClick = {()=>{
                    router.push('/')
                }}
                >
                    {/* カヤックのアイコン */}
                    <Image
                    src = '/kayak_icon.png'
                    alt = 'カヤックのアイコン'
                    width = { 27 }
                    height = { 24 }

                    //目視可能にするために設定したので変更お願いします
                    className = 'fixed t-100'
                    />
                </button>

            </div>

        </div>
    )
}