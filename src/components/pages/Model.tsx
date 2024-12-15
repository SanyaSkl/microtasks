import {useParams} from "react-router-dom";
import {S} from "./_styles";
import {adidasArr, AdidasItemType} from "./Adidas";
import {pumaArr, PumaItemType} from "./Puma";

type CrossModels = {
    [key: string]: (AdidasItemType | PumaItemType)[]
}

const crossModels: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr
}


export const Model = () => {
    const {model, id} = useParams()

    const productsArray = crossModels[model || '']
    const currentModel = productsArray ? productsArray.find(el => el.id === Number(id)) : null

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