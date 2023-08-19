import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { trimArrayToTen } from "./utils/common";
import Header from "./components/Header";
import CoinTable from "./components/CoinTable";

function App() {
    const [coinData, setCoinData] = useState([]);
    const handleFetchCoinData = async () => {
        try {
            const coinGeckoData = await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en",
            );
            setCoinData(trimArrayToTen(coinGeckoData.data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleFetchCoinData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <CoinTable tableData={coinData} />
            </header>
        </div>
    );
}

export default App;
