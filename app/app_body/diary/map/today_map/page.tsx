//航行後の地図を表示

'use client'

import Image from 'next/image'
import { SetStateAction, useState, useEffect, useRef } from 'react'
import { Today_data } from './today_data';


//写真を閉じるときに使うicon
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';


export default function Today_Map() {

    // ドロワーの表示状態を管理するステート
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    // タッチの初期位置を格納するためのRef
    const initialTouchY = useRef<number | null>(null); // 初期値は null で number 型であることを明示的に指定

    useEffect(() => {
        // タッチ開始時のイベントリスナー
        const handleTouchStart = (e: TouchEvent) => {
            initialTouchY.current = e.touches[0].clientY;
        }

        // タッチ終了時のイベントリスナー
        const handleTouchEnd = (e: TouchEvent) => {
            if (!initialTouchY.current) return; // 初期位置が null の場合は処理を中断

            const currentY = e.changedTouches[0].clientY;
            const deltaY = currentY - initialTouchY.current;
            // スワイプを検出するための閾値を定義
            const swipeThreshold = 100;

            if (deltaY > swipeThreshold) {
                // 下向きのスワイプ距離が閾値を超えたら、ドロワーを開く
                setDrawerOpen(true);
            } else if (deltaY < -swipeThreshold) {
                // 上向きのスワイプ距離が閾値を超えたら、ドロワーを閉じる
                setDrawerOpen(false);
            }

            initialTouchY.current = null; // 初期位置をリセット
        }

        // コンポーネントがマウントされたときにイベントリスナーを追加
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        // コンポーネントがアンマウントされるときにイベントリスナーをクリーンアップ
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);


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

      // Today_dataを適切な型に修正
      const Today = [
        { label: '航行距離', value: `${Today_data.distance} ${Today_data.value[0]}` },
        { label: '平均速度', value: `${Today_data.speed} ${Today_data.value[1]}` },
        { label: '平均温度', value: `${Today_data.temperature} ${Today_data.value[2]}` },
        {
            label: '天気記号',
            value: (
                <div className='flex flex-row mx-5'>
                    <div className='w-1/2 text-left'>
                        <Image src={Today_data.air_mark} width={58} height={53} alt="天気記号" />
                    </div>
                </div>
            ),
        },
        { label: '転覆検知', value: `${Today_data.capsize} ${Today_data.value[4]}` },
        { label: '予防転覆', value: `${Today_data.prevent} ${Today_data.value[5]}` },
        { label: '総合評価', value: `${Today_data.evaluation} ${Today_data.value[6]}` },
    ];


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

<div
                className={`absolute bg-backblue w-full rounded-b-2xl ${isDrawerOpen ? 'h-[535px]' : 'h-16'
                    }`}
            >
                {isDrawerOpen && (
                    <div className='mt-5 flex flex-col text-[18px] space-y-2 font-extrabold mx-8'>
                        {Today.map((data, index) => (
                            <div
                                key={index}
                                className='bg-backgray sticky w-[319px] h-[60px] py-3 text-border_line rounded-md'
                            >
                                 <div className='flex flex-row justify-between mx-5 '>
                                    <div className='w-1/2 text-left'>{data.label}</div>
                                    <div className='w-1/2 text-left'>{data.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                        <div className={`mt-${isDrawerOpen ? '6' : '10'} mx-36 rounded-md border-[3px] w-28 border-backgray`}></div>
                    
            </div>

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