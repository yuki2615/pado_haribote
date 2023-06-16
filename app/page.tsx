//最初の画面

'use client'

import Image from 'next/image'
import { useState } from 'react'

//component
import Login from './components/login'
import Signup from './components/signup'
export default function Index() {

  //component切り替え
  const [switching,setSwiching]=useState({

    //ログインとサインアップ
    'login_signup':'login'

  })

  return (
    <div>

      {/* タイトル表示部分 */}
      <div>

        {/* タイトルを挿入 */}
        <Image
          src = "/pado_title.png"
          alt = "ぱどろーる"
          width = { 250 }
          height = { 150 }
        />

      </div>

      {/* ログイン入力部分 */}
      <div>

        {/* ログインと新規登録で分ける */}
        {switching.login_signup=='login'?
        <Login

        //新規アカウント作成を押したときの処理
        to_signup = {()=>{
          setSwiching({...switching,'login_signup': 'signup' })
        }}
        />
        :
        <Signup
        //新規アカウント作成を押したときの処理
        to_login = {()=>{
          setSwiching({...switching,'login_signup': 'login' })
        }}
        />
        }
        

      </div>

    </div>
  )
}
