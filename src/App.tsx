import {useState} from "react";
import {FilterBanknote} from "./Components/banknote/FilterBanknote";

export type BanknoteValuesType = "dollar" | "ruble" | "all"
export type MoneyType = {
    banknote: BanknoteValuesType
    nominal: number
    number: string
}

function App() {
    const [money, setMoney] = useState<MoneyType[]>([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filter, setFilter] = useState<BanknoteValuesType>('all')

    let currentMoney = money

    if (filter === 'ruble' ) {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble' )
    }
    if (filter === 'dollar' ) {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar' )
    }

    const onClickFilterHandler = (nameButton: BanknoteValuesType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <FilterBanknote
                money={currentMoney}
                onClickFilterHandler={onClickFilterHandler}
            />
        {/*    <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
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
            </div>*/}
        </>


    )

}

export default App;