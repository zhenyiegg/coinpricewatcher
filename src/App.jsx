import "./App.css";
import { useState } from "react";
import axios from "axios";
import { trimArrayToTen } from "./utils/common";
import Header from "./components/Header";
import CoinTable from "./components/CoinTable";

function App() {
    const [coinData, setCoinData] = useState([]);
    const handleFetchCoinData = async () => {
        try {
            const coinGeckoData = await axios.get(
                "https://api.coingecko.com/api/v3/coins/list?include_platform=false",
            );
            setCoinData(trimArrayToTen(coinGeckoData.data));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <button onClick={handleFetchCoinData}>Get Coin Data!</button>
                <CoinTable tableData={coinData} />
            </header>
        </div>
    );
}

export default App;
