import React from "react";
import { Table } from "react-bootstrap";

const CoinTable = ({ tableData }) => {
    return (
        <Table striped bordered hover variant="dark" className="coinTable">
            <thead>
                <tr>
                    <th></th>
                    <th>id</th>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((coin) => {
                    return (
                        <tr className="py-4" key={coin.id}>
                            <td>
                                <img src={coin.image} />
                            </td>
                            <td>{coin.id}</td>
                            <td>{coin.symbol}</td>
                            <td>{coin.name}</td>
                            <td>{coin.current_price}</td>
                            <td>{coin.market_cap}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default CoinTable;
