//プロフィールの画面
//body{
//     overflow-x: hidden;
//}
import Image from 'next/image'

export default function Profile(){

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

            

        </div>
    )


}
