//戻るボタン

'use client'

import { useRouter , useSearchParams } from 'next/navigation'
import Image from 'next/image'

export default function Back_Button(){

    const router = useRouter()
    const params = useSearchParams()

    //航行・観覧が終了 → 地図を表示 → バックボタンでdiaryに移動
    const next_path = params.get('next_path')

    return(
        <div>
            <button
            onClick={()=>
                {next_path ?
                    router.push('/app_body/diary')
                    :
                    router.back()
                }
            }
            className='fixed top-[34px] left-[30px]'
            >
                <Image
                src = '/back_button.png'
                alt = 'バックボタン'
                width = {20}
                height = {23.36}
                />
            </button>
        </div>
    )

}