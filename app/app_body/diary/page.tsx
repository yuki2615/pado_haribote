//日誌の画面

'use client'

import Image from 'next/image'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'

//☆のicon
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
//★のicon
import StarRoundedIcon from '@mui/icons-material/StarRounded';

//航行中のグループ(Navigation_Group)
//アルバムを表示させるフレンド(Frend_Diary)
import { Navigation_Group,Frend_Diary } from './frend_data'


export default function Diary(){

    const router = useRouter()

    //星が押されたか
    const [ push_star , setPushStar ] = useState(['']);

    return(
        <div>
            {/* 航行中のユーザーの表示 */}
            <div>
                <ul>

                    {Navigation_Group.map(( group , key )=>
                        <li
                        key = { key }
                        >
                            <button
                            onClick = {()=>{
                                router.push('./diary/map/frend_map')
                            }}
                            >
                                {/* アイコンの表示 */}
                                <Image
                                src = { group.icon }
                                alt = { group.name }
                                width = { 60 }
                                height = { 60 }
                                />
                            </button>

                            {/* グループ名の表示 */}
                            <p>
                                { group.name }
                            </p>
                        </li>
                    )}

                </ul>
            </div>

            {/* フレンドのアルバムの表示 */}
            <div>

                {Frend_Diary.map(( diary , key )=>
                //アルバム全体
                <div
                key = { key }>

                    {/* アルバム上部 */}
                    <div>

                        {/* アイコンの表示 */}
                        <Image
                        src = { diary.icon }
                        alt = { diary.frendname }
                        width = { 37 }
                        height = { 40 }
                        />

                        {/* アルバム主の名前を表示 */}
                        <p>
                            { diary.frendname }
                        </p>

                        <button
                        onClick = {()=>{
                            push_star[key] == 'no'?
                            setPushStar([])
                            :
                            setPushStar([])
                        }}
                        >

                            {push_star[key] == 'no' ?
                            //星が押されていない
                            <StarOutlineRoundedIcon />
                            :
                            //星が押されている
                            <StarRoundedIcon />
                            }
                            
                        </button>

                        {/* 写真を表示 */}
                        

                    </div>

                </div>
                )}

            </div>
        </div>
    )

}