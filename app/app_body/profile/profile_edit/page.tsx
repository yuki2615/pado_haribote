//プロフィール編集画面

'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

//削除のicon
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function Profile_Edit(){

    const router = useRouter()

    //ユーザーの情報
    const user = {
        //ユーザーネーム
        'name':'Yamada1234',
        //アイコン
        'icon':'/icon_default.png',
        //生年月日
        'birthday':{
            'year':2001,
            'month':4,
            'day':4
        },
        //住所
        'lived':{
            //郵便番号
            'post_code':'000-0000',
            //住所詳細
            'lived_detail':'〇〇県〇〇市〇〇町0000-00',
        }
    }

    //ユーザーの家族の連絡先
    const family_link = [
        {
            'mail':'Yamada_mam@gmail.com',
            'icon':'/mother_icon.png'
        },
        {
            'mail':'Yamada_dad@gmail.com',
            'icon':'/father_icon.png'
        },
        {
            'mail':'Yamada_bro@gmail.com',
            'icon':'/brother_icon.png'
        }
    ]

    return(
        <div>
            {/* ユーザーアイコンを表示 */}
            <Image
            src = {user.icon}
            alt = 'アイコン'
            width = {100}
            height = {100}
            />

            {/* 保存ボタンと破棄ボタン */}

            <div>
                <button
                onClick = {()=>{
                    router.push('../profile')
                }}
                >
                    保存
                </button>
                <button
                onClick = {()=>{
                    router.push('/')
                }}
                >
                    破棄
                </button>
            </div>

            {/* 情報表示 */}
            <div>

                {/* ユーザーネーム */}
                <div>
                    <p>
                        ユーザーネーム
                    </p>
                    <p>
                        {user.name}
                    </p>
                </div>

                {/* 生年月日 */}
                <div>
                    <p>
                        生年月日
                    </p>
                    <p>
                        {user.birthday.year}年
                        {user.birthday.month}月
                        {user.birthday.day}日
                    </p>
                </div>

                {/* 住所 */}
                <div>
                    <p>
                        お住まい
                    </p>
                    <p>
                        〒{user.lived.post_code}
                        {user.lived.lived_detail}
                    </p>
                </div>

            </div>

            {/* 家族のリンク先 */}
            <div>
                <p>
                    Family link
                </p>

                {/* 登録するところ */}
                <div>

                    <input
                    type = 'text'
                    value = '登録するご家族のメールアドレスを入力してください'
                    />

                    <button>
                        登録
                    </button>
                </div>

                {/* 家族の連絡先一覧を表示 */}
                <div>
                    <ul>

                        {family_link.map(( family , key )=>
                        <li
                        key = {key}
                        >

                            {/* アイコン */}
                            <Image
                            src = { family.icon }
                            alt = { family.mail }
                            width = { 30 }
                            height = { 30 }
                            />

                            {/* メールアドレス */}
                            <span>
                                {family.mail}
                            </span>

                            {/* 削除アイコン */}
                            <button>

                                <HighlightOffIcon />

                            </button>

                        </li>
                        )}

                    </ul>
                </div>

            </div>

        </div>
    )

}