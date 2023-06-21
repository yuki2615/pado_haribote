//航行開始画面

'use client'

import {useRouter} from 'next/navigation'

export default function Go_Kayak(){

    const router = useRouter()

    //今日の日付をとってくる
    const today = new Date()
    //年月日を取得
    const year = today.getFullYear()
    const month = today.getMonth()+1
    const day = today.getDate()

    return(
        <div>
            {/* 背景を設定 */}
            <div
            className='
            fixed w-[342px] h-[281px] left-[24px] top-[141px]
            border-1-border_line bg-backgray
            rounded-lg
            z-45
            '
            >

                {/* 航行時間の設定 */}
                <div>
                    <span>
                        航行時間
                    </span>

                    <div>
                        {/* 本日の日付 */}
                        <div>
                            {year}-{month}-{day}
                        </div>

                        {/* 入力 */}
                        <div>
                            <input
                            type = 'number'
                            value = {12}
                            />
                            :
                            <input
                            type='number'
                            value = {34}
                            />
                        </div>
                    </div>

                </div>

                {/* 現在地を共有するユーザーの切り替え */}
                <div>

                    <div>
                        現在地共有
                    </div>

                    {/* 切り替える部分 */}
                    <div>
                        {/* 家族 */}
                        <div>
                            家族
                        </div>
                        {/* フレンド */}
                        <div>
                            フレンド
                        </div>
                    </div>

                </div>

                {/* 航行開始ボタン */}
                <div>
                    <button
                    onClick={()=>router.push('../navi_folder/navigation')}
                    >
                        航行開始
                    </button>
                </div>

            </div>
        </div>
    )

}