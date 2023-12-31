//プロフィール編集画面

'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

//削除のicon
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { dividerClasses } from '@mui/material';

export default function Profile_Edit() {

    const router = useRouter()

    //ユーザーの情報
    const user = {
        //ユーザーネーム
        'name': 'Yamada1234',
        //アイコン
        'icon': '/icon_default.png',
        //生年月日
        'birthday': {
            'year': 2001,
            'month': 4,
            'day': 4
        },
        //住所
        'lived': {
            //郵便番号
            'post_code': '000-0000',
            //住所詳細
            'lived_detail': '〇〇県〇〇市〇〇町0000-00',
        }
    }

    //ユーザーの家族の連絡先
    const family_link = [
        {
            'mail': 'Yamada_mam@gmail.com',
            'icon': '/mother_icon.png'
        },
        {
            'mail': 'Yamada_dad@gmail.com',
            'icon': '/father_icon.png'
        },
        {
            'mail': 'Yamada_bro@gmail.com',
            'icon': '/bro_purple.png'
        }
    ]

    return (
        <div>
            <div className='flex flex-row mt-5 ml-5'>
                <div>
                    {/* ユーザーアイコンを表示 */}
                    <Image
                        src={user.icon}
                        alt='アイコン'
                        width={100}
                        height={100}
                    />
                    {/* 保存ボタンと破棄ボタン */}
                </div>
                <div className='m-12 flex flex-row space-x-8'>
                    <div>
                        <button
                            onClick={() => {
                                router.push('../profile')
                            }}
                            className='bg-border_line text-backgray w-[69px] h-[27px] rounded shadow'
                            aria-label='保存'
                        >
                            保存
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                router.push('/')
                            }}
                            className='bg-backgray text-border_line w-[69px] h-[27px] rounded shadow'
                            aria-label='破棄'
                        >
                            破棄
                        </button>
                    </div>
                </div>
            </div>

            {/* 情報表示 */}
            <div className='text-backgray ml-5 font-bold'>

                {/* ユーザーネーム */}
                <div>
                    <div className='text-[14px]'>
                        ユーザーネーム
                    </div>
                    <div className='text-[18px]'>
                        {user.name}
                    </div>
                    <div className="w-[342px] border text-backgray"></div>
                </div>

                {/* 生年月日 */}
                <div>
                    <div className='text-[14px]'>
                        生年月日
                    </div>
                    <div className='text-[18px]'>
                        {user.birthday.year}年
                        {user.birthday.month}月
                        {user.birthday.day}日
                    </div>
                    <div className="w-[342px] border text-backgray"></div>
                </div>

                {/* 住所 */}
                <div>
                    <div className='text-[14px]'>
                        お住まい
                    </div>
                    <div className='text-[17px]'>
                        〒{user.lived.post_code}
                        {user.lived.lived_detail}
                    </div>
                    <div className="w-[342px] border text-backgray"></div>
                </div>
            </div>
            <div className="mt-6 w-full h-[3px]  bg-backgray"></div>

            {/* 家族のリンク先 */}
            <div>
                <div className='text-backgray font-bold my-4 ml-5'>
                    <div>
                        Family link
                    </div>

                    {/* 登録するところ */}
                    <div className='w-[343px] h-11 bg-backgray rounded'>
                        <div className='text-center pt-2'>
                            <input
                                className='bg-backgray w-70'
                                type='text'
                                placeholder={'ご家族のメールアドレスを入力'}
                            />
                            <button className='ml-3 bg-border_line text-backgray w-[35px] h-[21px] text-center rounded text-[11px]'>
                                登録
                            </button>
                        </div>
                    </div>
                </div>

                {/* 家族の連絡先一覧を表示 */}
                <div className='w-[343px] h-[155px]  bg-backgray rounded ml-5'>
                    <div>
                        <ul>

                            {family_link.map((family, key) =>
                                <li
                                    key={key}
                                >
                                    <div className='flex flex-row text-border_line p-2.5 justify-around'>
                                        {/* アイコン */}
                                        <Image
                                            src={family.icon}
                                            alt={family.mail}
                                            width={30}
                                            height={30}
                                        />

                                        {/* メールアドレス */}
                                        <span>
                                            {family.mail}
                                        </span>

                                        {/* 削除アイコン */}
                                        <button aria-label='削除'>

                                            <HighlightOffIcon />

                                        </button>
                                    </div>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>

            </div>

        </div >
    )

}