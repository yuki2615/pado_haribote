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
                        className='mt-4 ml-12 bg-backgray border-2 border-border_line w-[250px] h-10 rounded'
                        type='text'
                        placeholder='  グループ名を入力してください'
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
                <div className='text-border_line flex flex-row mt-2 ml-20 space-x-4 font-extrabold'>
                    <div>参加人数</div>
                    <input
                        className='w-8 bg-backgray border-2 border-border_line rounded'
                        type='number'
                        placeholder='   8'
                    />
                    <div>
                        名
                    </div>
                </div>

                {/* 追加するユーザーネームを入力 */}
                <div>
                    <input
                    className='fkex'
                        type='text'
                        placeholder='ユーザーネームを入力してください'
                    />
                    <button>
                        確定
                    </button>
                </div>

                {/* ユーザー一覧 */}
                <div>

                    {/* 自分(ホストユーザー)を表示 */}
                    <div>
                        {/* 自分のアイコン */}
                        <Image
                            src={host_user.icon}
                            alt='my_icon'
                            height={30}
                            width={30}
                        />
                        {/* 自分のユーザーネーム */}
                        <span>
                            {host_user.name}
                        </span>
                    </div>

                    {/* 参加するユーザーの一覧 */}
                    <div>
                        <ul>
                            {user_list.icon.map((value, key) =>
                                <li
                                    key={key}
                                >
                                    <span>
                                        <Image
                                            src={value}
                                            alt={user_list.name[key]}
                                            height={32}
                                            width={30}
                                        />
                                    </span>
                                    <span>
                                        {user_list.name[key]}
                                    </span>
                                </li>
                            )}
                        </ul>
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
