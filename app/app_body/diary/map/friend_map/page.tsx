//フレンドの航行を確認する画面 

'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'



//バックボタン
import Back_button from '../../../components/back_button'

export default function Friend_Map() {

    const router = useRouter()
    const params = useSearchParams()

    const friend_user = params.get('friend_user')

    return (
        <div className='relative'>

            {/* 地図を表示　本来は地図読み込みAPIを使用 */}
            <div className='absolute'>
                {/* google mapから仮で読み込み */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d100033.9820597696!2d136.7188807!3d34.4828905!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sja!2sjp!4v1690899952528!5m2!1sja!2sjp"
                    width="600" height="450"
                    style={{ border: '0', pointerEvents: 'none' }}
                    loading="lazy"
                    className='w-[390px] h-[695px]'
                >
                </iframe>
            </div>
            <div className='absolute'>
                <div className="w-56 h-28 mt-14 ml-3 flex flex-col justify-between space-y-1 relative">
                <div className="w-56 h-8">
                        <div className="w-56 h-8 absolute bg-backgray rounded-tl-lg rounded-tr-lg shadow" />
                        <div className="w-56 h-8 absolute text-center text-border_line text-base font-bold">
                        {friend_user} さんの航行
                        </div>
                    </div>
                    <div className="w-56 h-20">
                        <div className="w-56 h-20  absolute bg-border_line opacity-70  rounded-bl-2xl rounded-br-2xl" />
                        <div className="w-56 h-20  absolute text-center text-backgray text-base font-bold">
                            航行時間: 1時間12分56秒<br />現在の速度: 5.2 m/s<br />安全情報: 転覆の危険 2 回
                        </div>
                    </div>
                </div>
            </div>
            <button
                title='kayak'
                onClick={() => {
                    router.push(`../../kayak/navi_folder/navi_viewing?friend_user=${friend_user}`)
                }}
                style={{ pointerEvents: 'auto' }} // ボタンのクリックイベントを有効にする
            >
                {/* カヤックのアイコン 現在地などデータベースからのやり取りが必要*/}
                <Image
                    src='/kayak_icon.png'
                    alt='カヤックのアイコン'
                    width={40}
                    height={40}
                    className='top-[300px] mx-10 absolute'
                />
            </button>



        </div>
    )
}