
'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {useState} from 'react'


//フォロ－中
import { Follow } from '../../follow'
//フォロワー
import { Follower } from '../../follower'

//ログアウトのicon
import LogoutIcon from '@mui/icons-material/Logout';

export default function Profile() {
    const [showContent, setShowContent] = useState(false)
    const [buttonImage, setButtonImage] = useState('/downbutton.png')
    const handleButtonClick =() => {
        setShowContent(!showContent)
        setButtonImage(showContent ? '/doenbutton.png' : '/upbutton.png')
    }
    const router = useRouter()
    const user = {
        //ユーザーネーム
        'name': 'Yamada1234',
        //ユーザーのアイコン
        'icon': '/icon_default.png',
        //フォロワー
        'follower': Follower.length,
        //フォロー中
        'follow': Follow.length,
    }

    return (
        <div>
            <div className="flex flex-now mt-5">
                {/* アカウント主のicon */}
                <div className='mr-8 ml-5'> <Image src={user.icon} alt='アイコン' width={100} height={100} /></div>
                {/* アカウントの内容 */}
                <div className='mt-4 ml-3 font-AnekGujarati text-backgray flex flex-col text-center font-extrabold'>
                    <div className="w-full text-center text-[27px] underline">
                        {user.name}
                    </div>
                    <div className="flex flex-row justify-end text-[11px] space-x-4 mt-3">
                        <div>
                            <span>フォロワー</span>
                            <span>{user.follower}</span>
                        </div>
                        <div>
                            <span>フォロー中</span>
                            <span>{user.follow}</span>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-end space-x-6 m-2 mr-8'>
                <div>
                    {/* プロフィール編集へ */}
                    <button style={{
                        backgroundColor: 'rgba(221, 223, 228, 1)',
                        color: 'rgba(99, 123, 152, 1)', fontSize: '11px', fontFamily: 'Anek Gujarati',
                        width: '123px', height: '26px', borderRadius: '5px'
                    }}
                        onClick={() => {
                            router.push('./profile/profile_edit')
                        }}>
                        プロフィールを編集
                    </button>
                </div>
                <div>
                    {/* ログアウトボタン */}
                    <button style={{
                        backgroundColor: 'rgba(221, 223, 228, 1)',
                        color: 'rgba(99, 123, 152, 1)',
                        width: '49px', height: '26px', borderRadius: '5px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        onClick={() => {
                            router.push('/')
                        }}>
                        <LogoutIcon />
                    </button>
                </div>

            </div>
            <div className="mt-5 Line15 w-full border text-backgray"></div>
            {/* 過去の航行を表示 */}
            <div className='overflow-y-auto h-full ...'>
                <div className='mt-5 ml-4 text-backgray font-AnekGujarati text-[15px] font-extrabold'>
                    過去の航行
                </div>

                {/* アルバムを表示 */}
                <div>
                    <div className='ml-4 mt-2 Rectangle84 w-[340px] h-[26px] bg-backgray rounded flex flex-row'>
                        <div className='ml-2 text-border_line font-AnekGujarati font-extrabold text-[15px]'>HappyKayaks</div>
                        <div><button id="toggleButton" className="button" onClick={handleButtonClick}>
                            <Image src={buttonImage} alt="Button" id="buttonImage" width={10} height={10} className='ml-2' />
                        </button>
                        </div>
                    </div>
                    {showContent && ( <div className='ml-4 Rectangle84 w-[340px] h-[78px] bg-backgray rounded' ></div>)}
                </div>   
            </div>

        </div>
    )


}