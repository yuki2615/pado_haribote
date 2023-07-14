//航行後の地図を表示

'use client'

import Image from 'next/image'
import { useState } from 'react'

//写真を閉じるときに使うicon
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

export default function Today_Map(){

    //写真を表示するかどうか
    const [ photo_open , setPhotoOpen ] = useState(-1)

    //とった写真一覧
    const photo_list = {
        //写真
        'photo':[
            '/kayak_picture1.png',
            '/kayak_picture2.png'
        ],
        //とった場所
        'place':{
            'x':[
                203,
                202,
            ],
            'y':[
                202,
                486
            ]
        }
    }

    return(
        <div>

            <Image
            src = '/today_navi_map.png'
            alt = '航行後の地図'
            width = { 390 }
            height = { 626 }
            />

            {/* 写真を撮った位置を表示 */}
            {photo_list.photo.map(( value , key )=>
            <button
                title="撮った写真を確認する"
                key = { key }
                onClick = {()=>{
                    setPhotoOpen(key)
                }}
            >

                <Image
                src = '/photo_place.png'
                alt = '写真撮影場所'
                width = { 65 }
                height = { 77 }
                />

            </button> 
            )}

            {/* 写真を表示 */}
            {photo_open == -1 ?
            <div>
            </div>
            :
            <div>

                <Image
                src = {photo_list.photo[photo_open]}
                alt = '撮影した写真'
                width = { 276 }
                height = { 191 }
                />

                <button
                onClick = {()=>{
                    setPhotoOpen(-1)
                }}

                >

                    <DisabledByDefaultRoundedIcon />

                </button>

            </div>
            }

        </div>
    )

}