//アプリ内の共通のレイアウト

//component
import Back_Button from '../../components/back_button'

export default function AppBody_Layout({
    children,
  }: {
    children: React.ReactNode
  }){

    return(
        <div>

            <Back_Button />
            {children}

        </div>
    )

}