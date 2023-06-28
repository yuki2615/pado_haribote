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
            height = {310}
            width = {432}
            className='h-[333px]'
            />

            {/* グループ作成or参加　選択画面 */}
            <div>
                <div  style={{
                        color: 'rgba(99, 123, 152, 1)', fontSize: '20px', fontFamily: 'Anek Gujarati'
                    }}
                    className='font-extrabold flex flex-col text-center'>
                     <div>
                         <button
                          onClick={()=>router.push('./kayak/preparation')}
                          style={{ backgroundColor: 'rgba(221, 223, 228, 1)',
                          width: '312px', height: '80px', borderRadius: '10px', marginTop: '50px'}}
                         >
                         グループ作成
                         </button>
                     </div>
                     <div>
                         <button
                         onClick={()=>setJoin('yes')}
                         style={{ backgroundColor: 'rgba(221, 223, 228, 1)',
                         width: '312px', height: '80px', borderRadius: '10px', marginTop: '20px'}}
                         >
                         グループ参加
                         </button>
                     </div>
                </div>

                {/* 参加押す→ID入力 */}
                {join=='no'?
                <div></div>:
                <div>
                    <input
                    type='text'
                    placeholder='IDを入力してください'
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
