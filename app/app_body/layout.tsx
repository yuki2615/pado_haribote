//アプリ内の共通のレイアウト

//component
import Menu_Icon from './components/menu_icon'
import {Background_gray,Background_blue} from './components/background'

export default function AppBody_Layout({
    children,
  }: {
    children: React.ReactNode
  }){

    return(
        <div>

            {/* 背景を表示 */}
            
            <div className='
            fixed top=[0px] left=[0px]
            w-full h-full bg-backblue
            '
            >
              
              <Background_gray/>
              {children}
              
              {/* メニューアイコンを表示 */}
              <Menu_Icon />
            </div>
            
            

        </div>
    )

}