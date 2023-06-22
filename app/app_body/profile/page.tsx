
'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

//ログアウトのicon
import LogoutIcon from '@mui/icons-material/Logout';

export default function Profile() {
    const router = useRouter()
    const user = {
        //ユーザーネーム
        'name': 'Yamada1234',
        //ユーザーのアイコン
        'icon': '/icon_default.png',
        //フォロワー
        'follower': 149,
        //フォロー中
        'follow': 132,
    }

    return (
        <div>
            <div className="flex flex-now space-x-4">
                {/* アカウント主のicon */}
                <div> <Image src={user.icon} alt='アイコン' width={100} height={100} /></div>
                {/* アカウントの内容 */}
                <div className='font-AnekGujarati text-backgray text-[27px] font-extrabold line-height-[41px]'>
                 <div className="flex items-center h-full">
                    {user.name}
                </div>
                </div>
            </div>
            <div className="flex flex-row justify-end space-x-6">
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
            <div className='flex flex-row justify-end space-x-6 m-2'>
                <div>
                    {/* プロフィール編集へ */}
                    <button style={{ 
                        backgroundColor: 'rgba(221, 223, 228, 1)', 
                        color: 'rgba(99, 123, 152, 1)', fontSize: '11px', fontFamily: 'Anek Gujarati',
                        width: '123px', height: '26px', borderRadius: '5px'
                    }}  
                        onClick={() => { 
                            router.push('./profile/profile_edit') }}>
                    プロフィールを編集
                    </button>
                </div>
                <div>
                    {/* ログアウトボタン */}
                    <button style={{
                        backgroundColor: 'rgba(221, 223, 228, 1)',
                        color: 'rgba(99, 123, 152, 1)',
                        width: '49px', height: '26px', borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onClick={() => {
                            router.push('/')}}>

                    <LogoutIcon />
                    </button>
                </div>
                <div></div>

            </div>

            {/* 過去の航行を表示 */}
            <div>

                <div>
                    過去の航行
                </div>

                {/* アルバムを表示 */}


            </div>

        </div>
    )


}
