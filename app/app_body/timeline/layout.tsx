//ページ内の共通のレイアウト

//component
import Back_Button from '../components/back_button'

export default function Album_Layout({
    children,
  }: {
    children: React.ReactNode
  }){

    return(
        <div>

            {/* バックボタンの表示 */}
            <Back_Button />
            {children}

        </div>
    )

}