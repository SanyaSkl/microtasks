import React from "react";
import {Link} from "react-router-dom";
import pumaModel3 from "../../assets/Puma/PUMA RS-X Efekt PRM.webp";
import pumaModel2 from "../../assets/Puma/Puma Nucleus.webp";
import pumaModel1 from "../../assets/Puma/Puma Genetics.webp";
import {S} from "./_styles";

export type PumaItemType = {
    id: number
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const pumaArr: PumaItemType[] = [
    {
        id: 1,
        model: 'PUMA GENETICS',
        collection: 'new collection1',
        price: '500$',
        picture: pumaModel1,
    },
    {
        id: 2,
        model: 'PUMA NUCLEUS',
        collection: 'new collection2',
        price: '600$',
        picture: pumaModel2
    },
    {
        id: 3,
        model: 'PUMA RS-X Efekt PRM',
        collection: 'new collection3',
        price: '700$',
        picture: pumaModel3
    }
]

export const Puma = () => {
    return (
        <div>
            <S.Title>PUMA</S.Title>

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

