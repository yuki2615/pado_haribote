//アカウント新規作成画面

'use client'

import {useRouter} from 'next/navigation'

export default function Signup(props){

    const router = useRouter()

    //アカウント登録時必要な情報
    const info=[
        'ユーザーネームを登録してください',
        'メールアドレスを登録してください',
        'パスワードを登録してください',
        'パスワードを再度入力してください'
    ]

    return(
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

            {/* 登録ボタン */}
            <div>

                {/* 押したらホーム画面に飛ばす */}
                <button
                onClick={()=>router.push('./app_body/kayak')}
                >
                    登録
                </button>
            </div>

            {/* ログインに戻るボタン */}
            <div>
                <button
                onClick={props.to_login}
                >
                    ログイン
                </button>
            </div>
        </div>
    )

}