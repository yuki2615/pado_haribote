//プロフィール編集画面

import Image from 'next/image'

export default function Profile_Edit(){

    //ユーザーの情報
    const user = {
        //ユーザーネーム
        'name':'Yamada1234',
        //アイコン
        'icon':'/icon_default.png',
        //生年月日
        'birthday':{
            'year':2001,
            'month':4,
            'day':4
        },
        //住所
        'lived':{
            //郵便番号
            'post_code':'000-0000',
            //住所詳細
            'lived_detail':'〇〇県〇〇市〇〇町0000-00',
        }
    }

    return(
        <div>
            {/* ユーザーアイコンを表示 */}
            <Image
            src = {user.icon}
            alt = 'アイコン'
            width = {100}
            height = {100}
            />

        </div>
    )

}