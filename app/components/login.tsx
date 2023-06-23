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
            <div className='mt-10'>

                {/* 入力部分 */}
                {info.map((value, key) =>

                    <div
                        key={key}
                    >

                        <input
                            className='w-[274px] h-[30px] border border-gray-300 rounded-md text-[#DDDFE4] text-center my-2'
                            type='text'
                            value={value}
                            style={{ borderColor: 'rgba(221, 223, 228, 1)', backgroundColor: 'transparent'}}
                        />

                    </div>

                )}

            </div>

            {/* ログインボタン */}
            <div>
                {/* 押したらホーム画面に飛ばす */}
                <button
                    onClick={() => router.push('./app_body/kayak')}
                    style={{
                        backgroundColor: 'rgba(221, 223, 228, 1)',
                        color: 'rgba(99, 123, 152, 1)', fontSize: '12px', fontFamily: 'Anek Gujarati',
                        width: '123px', height: '30px', borderRadius: '5px',
                        margin: '26%'
                    }}
                    className='font-extrabold w-full'
                >
                    ログイン
                </button>
            </div>

            {/* 新規アカウント作成ボタン */}
            <div>
                <button
                    onClick={props.to_signup}
                    style={{
                        backgroundColor: 'rgba(221, 223, 228, 1)',
                        color: 'rgba(99, 123, 152, 1)', fontSize: '12px', fontFamily: 'Anek Gujarati',
                        width: '177px', height: '30px', borderRadius: '5px',
                        margin: '17%'
                    }}
                    className='font-extrabold w-full '
                >
                    新規アカウント作成
                </button>
            </div>

        </div>
    )
}