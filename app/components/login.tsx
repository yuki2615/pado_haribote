//ログイン時の画面

'use client'

import {useRouter} from 'next/navigation'

export default function Login(props:any) {

    const router = useRouter()

    //ログイン時必要な情報
    const info = [
        'メールアドレスを入力してください',
        'パスワードを入力してください'
    ]

    return (
        <div>

            {/* アカウントの情報を入力 */}
            <div>

                {/* 入力部分 */}
                {info.map((value, key) =>

                    <div
                        key={key}
                    >

                        <input
                            type='text'
                            value = {value}
                        />

                    </div>

                )}

            </div>

            {/* ログインボタン */}
            <div>

                {/* 押したらホーム画面に飛ばす */}
                <button
                onClick={()=>router.push('./app_body/kayak')}
                >
                    ログイン
                </button>  
            </div>

            {/* 新規アカウント作成ボタン */}
            <div>
                <button
                onClick={
                    props.to_signup
                }
                >
                    新規アカウント作成
                </button>
            </div>

        </div>
    )
}