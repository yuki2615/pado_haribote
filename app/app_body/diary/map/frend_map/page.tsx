//フレンドの航行を確認する画面

'use client'

import Image from 'next/image'
import { useRouter , useSearchParams } from 'next/navigation'

//バックボタン
import Back_button from '../../../components/back_button'

export default function Frend_Map(){

    const router = useRouter()
    const params = useSearchParams()

    const frend_user = params.get('frend_user')

    return(
        <div>

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
                    router.push(`../../kayak/navi_folder/navi_viewing?frend_user=${frend_user}`)
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