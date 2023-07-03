//航行前の準備画面

'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Preparation() {

    const router = useRouter()

    //ホストユーザー
    const host_user = {
        'icon': '/icon_default.png',
        'name': 'Yamada1234'
    }

    //参加するユーザー一覧
    const user_list = {
        //ユーザーのアイコン一覧
        'icon': [
            '/Taro1234_icon.png',
            '/Suzuki1341_icon.png',
            '/090Hiroya_icon.png',
            '/icon_default.png',
            '/icon_default.png',
        ],
        //ユーザーネーム一覧
        'name': [
            'Taro1234',
            'Suzuki1341',
            '090Hiroya',
            'Aiueo0123',
            'Kakikuke4567'
        ]
    }

    return (
        <div>
            {/* 準備画面の背景 */}
            <div
                className='
            fixed w-[353px] h-[540px] left-[18px] top-[109px]
            border-1-border_line bg-backgray
            rounded-lg
            z-45
            '
            >

                {/* グループ名入力 */}
                <div>
                    <input
                        className='mt-4 ml-12 bg-backgray border-2 border-border_line w-[250px] h-10 rounded text-center'
                        type='text'
                        placeholder='グループ名を入力'
                    />
                </div>

                {/* ツアーID表示 */}
                <div className='flex flex-row text-border_line font-extrabold space-x-4 text-[15px] mt-5 ml-20'>
                    <div>
                        ツアーID
                    </div>
                    <div>
                        000000A1
                    </div>
                </div>

                {/* 参加人数入力 */}
                <div className='text-border_line flex flex-row mt-2 ml-20 space-x-4 font-extrabold text-[15px]'>
                    <div>参加人数</div>
                    <input
                        className='w-8 h-5 bg-backgray border-2 border-border_line rounded'
                        type='number'
                        placeholder='     8'
                    />
                    <div>名</div>
                </div>

                {/* 追加するユーザーネームを入力 */}
                <div className='ml-9 mt-9 flex flex-row border-2 w-[285px] h-[49px] border-border_line text-backgray rounded'>
                    <div>
                        <input
                            className='bg-backgray w-60 text-center mt-3'
                            type='text'
                            placeholder='ユーザーネームを入力'
                        />
                    </div>
                    <div>
                        <button
                            className='w-9 h-[17px] bg-border_line rounded mt-4 text-[11px]'>
                            追加
                        </button>
                    </div>
                </div>

                {/* ユーザー一覧 */}
                <div>
                    <div className='border-2 border-border_line rounded w-[285px] h-[212px]'>
                        {/* 自分(ホストユーザー)を表示 */}
                        <div className='flex flex-row space-x-6'>
                            {/* 自分のアイコン */}
                            <div>
                                <Image
                                    src={host_user.icon}
                                    alt='my_icon'
                                    height={30}
                                    width={30}
                                />
                            </div>
                            {/* 自分のユーザーネーム */}
                            <div>
                                {host_user.name}
                            </div>
                        </div>

                        {/* 参加するユーザーの一覧 */}
                        <div>
                            <ul>
                                {user_list.icon.map((value, key) =>
                                    <li
                                        key={key}
                                    >
                                        <div className='flex flex-row space-x-6'>
                                            <div>
                                                <Image
                                                    src={value}
                                                    alt={user_list.name[key]}
                                                    height={32}
                                                    width={30}
                                                />
                                            </div>
                                            <div>
                                                {user_list.name[key]}
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* メンバーを確定し、次へ進む */}
                    <div>
                        <button
                            onClick={() => router.push('./preparation/go_kayak')}
                        >
                            確定
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
