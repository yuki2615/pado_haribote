//カヤックアイコンの画面

'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Kayak(){

    const router = useRouter()

    //参加を押したか
    const [join,setJoin] = useState('no')

    return(
        <div>
            
            {/* 画像の挿入 */}
            <Image
            src = '/sea.png'
            alt = '海'
            height = {390}
            width = {432}
            />

            {/* グループ作成or参加　選択画面 */}
            <div>
                <div>
                    <button
                    onClick={()=>router.push('./kayak/preparation')}
                    >
                    グループ作成
                    </button>
                </div>

                <div>
                    <button
                    onClick={()=>setJoin('yes')}
                    >
                    グループ参加
                    </button>
                </div>

                {/* 参加押す→ID入力 */}
                {join=='no'?
                <div></div>:
                <div>
                    <input
                    type='text'
                    value='IDを入力してください'
                    />

                    <div>
                        <button
                        onClick={()=>router.push('./kayak/preparation/go_kayak')}
                        >
                            参加
                        </button>
                    </div>
                </div>
                }

            </div>

        </div>
    )
}