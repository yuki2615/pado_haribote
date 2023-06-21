//アプリ内の共通のレイアウト

//component
import Menu_Icon from './components/menu_icon'
import { Background_gray, Background_blue } from './components/background'

export default function AppBody_Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div>

      <div>
        <Background_gray />
        {children}
        <Menu_Icon />
    </div>
            
            

    </div >
  )

}