import {useParams} from "react-router-dom";
import {S} from "./_styles";
import {adidasArr} from "./Adidas";
import {pumaArr} from "./Puma";

const getArrayByBrand = (brand: string | undefined) => {
    switch (brand) {
        case 'adidas':
            return adidasArr;
        case 'puma':
            return pumaArr;
        default:
            return [];
    }
};

export const Model = () => {
    const params = useParams()
    const {brand} = params
    const productsArray = getArrayByBrand(brand)
    const currentModel = productsArray.find(el => el.id === Number(params.id))

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