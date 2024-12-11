import React from "react";
import {Link} from "react-router-dom";
import pumaModel3 from "../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp";
import pumaModel2
    from "../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";
import pumaModel1 from "../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp";
import {S} from "./_styles";

export type PumaItem = {
    id: number
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const pumaArr: PumaItem[] = [
    {
        id: 1,
        model: 'PUMA GENETICS',
        collection: 'new collection1',
        price: '100200$',
        picture: pumaModel1,
    },
    {
        id: 2,
        model: 'PUMA NUCLEUS',
        collection: 'new collection2',
        price: '200300$',
        picture: pumaModel2
    },
    {
        id: 3,
        model: 'PUMA RS-X Efekt PRM',
        collection: 'new collection3',
        price: '300400$',
        picture: pumaModel3
    }
]

export const Puma = () => {
    return (
        <div>
            <S.Title>ADIDAS</S.Title>

            <S.ImgWrap>
                {pumaArr.map((puma, id) => (
                    <Link key={id} to={`/puma/${puma.id}`}>
                        <S.Img src={puma.picture} alt={puma.model}/>
                    </Link>
                ))}
            </S.ImgWrap>
            <S.Text>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since
            </S.Text>
        </div>
    );
};

