//プロフィールの画面
//body{
//     overflow-x: hidden;
//}

'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

//ログアウトのicon
import LogoutIcon from '@mui/icons-material/Logout';

export default function Profile(){

    const router = useRouter()

    const user = {
        //ユーザーネーム
        'name':'Yamada1234',
        //ユーザーのアイコン
        'icon':'/icon_default.png',
        //フォロワー
        'follower':149,
        //フォロー中
        'follow':132,
    }

    return(
        <div>
            <div>

                {/* アカウント主のicon */}
                <Image
                src = { user.icon }
                alt = 'アイコン'
                width = {100}
                height = {100}
                className = 'fixed top-[128px] left-[13px]'
                />

                {/* アカウントの内容 */}
                <div>
                    <div
                    className ='
                    fixed top-[128px] left-[185px]
                    font-AnekGujarati
                    text-backgray text-[27px] font-extrabold
                    line-height-[41px]
                    '
                    >
                        { user.name }
                    </div>
                
                    <div>
                        <p>
                            <span>
                                フォロワー
                            </span>
                            <span>
                                {user.follower}
                            </span>
                        </p>

                        <p>
                            <span>
                            フォロー中
                            </span>
                            <span>
                                {user.follow}
                            </span>
                        </p>
                    </div>
                </div>

                {/* プロフィール編集へ */}
                <div>
                    <button
                    onClick = {()=>{
                        router.push('./profile/profile_edit')
                    }}

                    //目視できるように追加しただけなので変更してください
                    className = 'fixed t-500'
                    >
                        プロフィールを編集
                    </button>
                    
                    {/* ログアウトボタン */}
                    <button
                    onClick={()=>{
                        router.push('/')
                    }}

                    //目視できるように追加しただけなので変更してください
                    className = 'fixed t-500'
                    >

                        <LogoutIcon />

                    </button>
                </div>

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
