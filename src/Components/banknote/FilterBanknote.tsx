import {BanknoteValuesType, MoneyType} from "../../App";

type Props = {
    money: Array<MoneyType>
    onClickFilterHandler: (nameButton: BanknoteValuesType) => void
};
export const FilterBanknote = ({money, onClickFilterHandler}: Props) => {
    return (
        <>
            <ul>
                {money.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index} >
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollars</button>
                <button onClick={() => onClickFilterHandler('ruble')}>rubles</button>
            </div>
        </>
    );
};