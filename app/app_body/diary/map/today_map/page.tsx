//航行後の地図を表示

'use client'

import Image from 'next/image'
import { SetStateAction, useState } from 'react'

//写真を閉じるときに使うicon
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

export default function Today_Map() {

    //写真を表示するかどうか
    const [photo_open, setPhotoOpen] = useState(-1)

    //とった写真一覧
    const photo_list = {
        //写真
        'photo': [
            '/kayak_picture1.png',
            '/kayak_picture2.png'
        ],
        //とった場所
        'place': {
            'x': [
                203,
                202,
            ],
            'y': [
                202,
                486
            ]
        }
    }

    const openPhoto = (index: SetStateAction<number>) => {
        setPhotoOpen(index);
    }

    const closePhoto = () => {
        setPhotoOpen(-1);
    };

    return (
        <div className='relative'>

            <div className='absolute'>
                <Image
                    src='/today_navi_map.png'
                    alt='航行後の地図'
                    width={390}
                    height={626}
                    style={{ objectFit: 'cover', width: '390px', height: '700px' }}
                />
            </div>

            {/* 写真を撮った位置を表示 */}
            {photo_list.photo.map((value, key) =>
                <button
                    className='absolute'
                    title="撮った写真を確認する"
                    key={key}
                    style={{ left: photo_list.place.x[key], top: photo_list.place.y[key] }}
                    onClick={() => {
                        openPhoto(key);
                    }}
                >
                    <Image
                        src='/photo_place.png'
                        alt='写真撮影場所'
                        width={65}
                        height={77}
                    />
                </button>
            )}

            {/* 写真を表示 */}
            {photo_open === -1 ? null : (
                <div className='fixed inset-0 flex items-center justify-center'>
                    <div className='relative'>
                        <Image
                            src={photo_list.photo[photo_open]}
                            alt='撮影した写真'
                            width={276}
                            height={191}
                        />

                        <button
                            className='absolute top-0 right-0'
                            title='kayakphoto'
                            onClick={closePhoto}
                        >
                            <DisabledByDefaultRoundedIcon />
                        </button>
                    </div>
                </div>
            )}

        </div>
    )

}