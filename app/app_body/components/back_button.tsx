//戻るボタン

'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Back_Button(){

    const router = useRouter()

    return(
        <div>
            <button
            onClick={()=>router.back()}
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