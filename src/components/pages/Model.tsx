import {useParams} from "react-router-dom";
import {S} from "./_styles";
import {adidasArr} from "./Adidas";


export const Model = () => {
    const params = useParams()
    const currentModel = adidasArr.find(el => el.id === Number(params.id))
    return (
        <div>
            {
                currentModel
                    ? <S.ModelWrap>
                        <h3>{currentModel.model}</h3>
                        <h3>{currentModel.collection}</h3>
                        <h2>{currentModel.price}</h2>
                        <S.ImgWrap>
                            <S.Img src={currentModel.picture} alt={currentModel.model}/>
                        </S.ImgWrap>
                    </S.ModelWrap>
                    : <h2>Модели нет</h2>
            }
        </div>
    )
}