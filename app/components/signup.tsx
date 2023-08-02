//アカウント新規作成画面

'use client'

import { useRouter } from 'next/navigation'

export default function Signup(props: any) {

    const router = useRouter()

    const className = 'pt-2 w-[67px] h-[40px] bg-backgray text-border_line text-center font-bold rounded-md'

    //アカウント登録時必要な情報
    const info = [
        'ユーザーネームを登録してください',
        'メールアドレスを登録してください',
        'パスワードを登録してください',
        'パスワードを再度入力してください'
    ]

    return (
        <div className='my-10'>

            {/* アカウントの情報を入力 */}
            <div className='flex flex-col space-y-4'>

                {/* 入力部分 */}
                {info.map((value, key) =>

                    <div
                        key={key}
                    >
                        <input
                            className='w-[274px] h-[43px] border rounded-md text-backgray text-center my-2 placeholder-backgray'
                            style={{ borderColor: 'rgba(221, 223, 228, 1)', backgroundColor: 'transparent' }}
                            type="text"
                            id={`input-${key}`}
                            placeholder={value}
                        />
                    </div>

                )}

            </div>
        
            <div className='flex flex-col space-y-5 mt-6 items-center'>
            {/* 登録ボタン */}
            <div className={className}>

                {/* 押したらホーム画面に飛ばす */}
                <button
                    onClick={() => router.push('./app_body/diary')}
                >
                    登録
                </button>
            </div>

            {/* ログインに戻るボタン */}
            <div className={className}>
                <button
                    onClick={props.to_login}
                >
                    戻る
                </button>
            </div>
            </div>

        </div>
    )

}