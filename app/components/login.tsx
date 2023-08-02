//ログイン時の画面

'use client'

import { colors } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Login(props: any) {

    const router = useRouter()


    //ログイン時必要な情報
    const info = [
        'メールアドレスを入力してください',
        'パスワードを入力してください'
    ]

    return (
        <div>

            {/* アカウントの情報を入力 */}
            <div className='mt-10 flex flex-col space-y-4'>

                {/* 入力部分 */}
                {info.map((value, key) =>

                    <div
                        key={key}
                    >

                        <input
                            className='w-[274px] h-[43px] border border-backgray placeholder-backgray rounded-md text-backgray text-center my-2'
                            type='text'
                            placeholder={value}
                            style={{ backgroundColor: 'transparent' }}
                        />

                    </div>

                )}

            </div>


            <div className='flex flex-col items-center my-20 space-y-20'>
                {/* ログインボタン */}
                <div>
                    {/* 押したらホーム画面に飛ばす */}
                    <button
                        onClick={() => router.push('./app_body/diary')}

                        className='font-extrabold w-[120px] h-[40px] rounded text-border_line bg-backgray text-[12px]'
                    >
                        ログイン
                    </button>
                </div>

                {/* 新規アカウント作成ボタン */}
                <div>
                    <button
                        onClick={props.to_signup}

                        className='font-extrabold w-[177px] h-[40px] rounded text-border_line bg-backgray text-[12px]'
                    >
                        新規アカウント作成
                    </button>
                </div>
            </div>

        </div>
    )
}
