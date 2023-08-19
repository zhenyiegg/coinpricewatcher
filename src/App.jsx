import "./App.css";
import { useState } from "react";
import axios from "axios";
import { trimArrayToTen } from "./utils/common";

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
                <button onClick={handleFetchCoinData}>Get Coin Data!</button>
                <div>
                    {coinData.map((coin) => {
                        return (
                            <div key={coin.id}>
                                <div>{coin.id}</div>
                                <div>{coin.name}</div>
                                <div>{coin.symbol}</div>
                            </div>
                        );
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
