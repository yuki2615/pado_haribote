//アカウント新規作成画面

'use client'

import { useRouter } from 'next/navigation'

export default function Signup(props: any) {

    const router = useRouter()

    //アカウント登録時必要な情報
    const info = [
        {
            label: 'ユーザーネームを登録してください',
            placeholder: 'ユーザーネーム',
          },
          {
            label: 'メールアドレスを登録してください',
            placeholder: 'メールアドレス',
          },
          {
            label: 'パスワードを登録してください',
            placeholder: 'パスワード',
          },
          {
            label: 'パスワードを再度入力してください',
            placeholder: 'パスワード確認',
          },
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
                        <label htmlFor={`input-${key}`}>{value.label}</label>
                        <input type="text" id={`input-${key}`} placeholder={value.placeholder} />
                    </div>

                )}

            </div>

            {/* 登録ボタン */}
            <div>

                {/* 押したらホーム画面に飛ばす */}
                <button
                    onClick={() => router.push('./app_body/kayak')}
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