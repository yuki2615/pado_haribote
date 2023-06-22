//観覧中の画面

'use client'

import { useSearchParams } from 'next/navigation'

export default function Navi_Viewing(){

    const params = useSearchParams()

    const frend = params.get('frend_user')

    return(
        <div>

            {/* 航行中のフレンドを表示 */}
            <div>
                {frend}さんが航行中
            </div>

        </div>
    )

}