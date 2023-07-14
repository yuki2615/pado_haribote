//日誌の画面

'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

//☆のicon
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
//★のicon
import StarRoundedIcon from '@mui/icons-material/StarRounded';

//航行中のグループ(Navigation_Group)
//アルバムを表示させるフレンド(Frend_Diary)
import { Navigation_Group, Frend_Diary } from './frend_data'

//フォロ－中
import { Follow } from '../../follow'
//フォロワー
import { Follower } from '../../follower'

export default function Diary() {

    const router = useRouter()

    //星が押されたか
    const [push_star, setPushStar] = useState([-1]);

    return (
        <div>
            {/* 航行中のユーザーの表示 */}
            <div className='relative'>
                <ul className='flex flex-row absolute'>
                    {Navigation_Group.map((group, key) =>
                        <li
                            key={key}
                        >
                            <div className='flex flex-col mt-4 mx-4'>
                                <button
                                    onClick={() => {

                                        var display_user

                                        //グループ内にいるフレンド(フォロー中)を検索
                                        {
                                            group.user.map((user, index) => {

                                                Follow.indexOf(user) != -1 ?
                                                    display_user = user
                                                    :
                                                    ''
                                            })
                                        }

                                        //観覧に飛ぶ
                                        router.push(`./diary/map/frend_map?frend_user=${display_user}`)
                                    }}
                                >
                                    {/* アイコンの表示 */}
                        
                                    <Image
                                        src={group.icon}
                                        alt={group.name}
                                        width={60}
                                        height={60}
                                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                                    />
                                </button>

                                {/* グループ名の表示 */}
                                <div className='text-center text-[11px] text-border_line w-[60px] px-[2px]'>
                                    {group.name}
                                </div>
                            </div>
                        </li>

                    )}

                </ul>
                <div className='w-full h-24 bg-backgray'></div>
            </div>

            {/* フレンドのアルバムの表示 */}
            <div className='overflow-y-auto h-[656px]'>

                {Frend_Diary.map((diary, key) =>
                    //アルバム全体
                    <div
                        key={key}>

                        {/* アルバム上部 */}
                        <div className='relative px-8 pt-2'>
                            <div className='absolute'>
                                <div className='flex pl-3 flex-row pt-2'>

                                    {/* アイコンの表示 */}
                                    <div>
                                        <Image
                                            src={diary.icon}
                                            alt={diary.frendname}
                                            width={37}
                                            height={40}
                                        />
                                    </div>

                                    {/* アルバム主の名前を表示 */}
                                    <div className='p-1 text-border_line font-bold'>
                                        {diary.frendname}
                                    </div>

                                    <div className='text-border_line mt-1 font-extrabold text-right'>
                                        <button
                                            onClick={() => {
                                                push_star.indexOf(key) == -1 ?
                                                    //星が押された
                                                    setPushStar([...push_star, key])
                                                    :
                                                    //星を押されていない
                                                    setPushStar(
                                                        push_star.filter((star) => (star !== key))
                                                    )
                                            }}
                                        >

                                            {push_star.indexOf(key) == -1 ?
                                                //星が押されていない
                                                <StarOutlineRoundedIcon />
                                                :
                                                //星が押されている
                                                <StarRoundedIcon />
                                            }

                                        </button>
                                    </div>
                                </div>
                                <div className='w-80 border border-border_line'></div>
                            </div>
                            <div className='w-80 h-60 bg-backgray'></div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    )

}