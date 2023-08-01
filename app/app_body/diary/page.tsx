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
import { Navigation_Group, Friend_Diary } from './frend_data'

//フォロ－中
import { Follow } from '../../follow'
//フォロワー
import { Follower } from '../../follower'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Diary() {

    const router = useRouter()

    //星が押されたか
    const [push_star, setPushStar] = useState([-1]);


    return (
        <div>
            {/* 航行中のユーザーの表示 */}

                <div className='flex flex-row overflow-x-auto bg-backgray pb-4'>
                    {Navigation_Group.map((group, key) =>
                            <div className='flex flex-col  items-center mt-4 mx-4 ' key={key}>
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

                    )}

                </div>

            {/* フレンドのアルバムの表示 */}
            <div className='overflow-x-hidden overflow-y-auto h-[580px]'>
                <ul>
                    {Friend_Diary.map((diary, key) =>
                        //アルバム全体
                        <li
                            key={key}>

                            {/* アルバム上部 */}
                            <div className='relative px-8 pt-2'>
                                <div className='absolute flex flex-col'>
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
                                    <div className='w-80 border border-border_line font-extrabold'></div>

                                    <div className='mx-5 my-4 overflow-hidden h-[156px]' style={{ maxWidth: '275px' }}>
                                    {/* react-slickカルーセルを使用 */}
                                    <Slider
                                        infinite={false}
                                        slidesToShow={1}
                                        slidesToScroll={1}
                                        arrows={false}
                                        dots={true} // ドットナビゲーションを有効にします
                                        swipeToSlide={true} // スワイプした際にスライドが切り替わるようにします
                                        verticalSwiping={false} // 横方向にスワイプできるようにします
                                    >
                                        {diary.album.map((image, key) => (
                                            <div key={key}>
                                                <Image
                                                    src={image}
                                                    alt={diary.frendname}
                                                    width={275}
                                                    height={156}
                                                    style={{objectFit: 'cover' ,width: '275px', height: '156px'}}
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                </div>
                                <div className='w-80 h-60 bg-backgray'></div>
                            </div>

                        </li>
                    )}
                </ul>

            </div>
        </div >
    )

}