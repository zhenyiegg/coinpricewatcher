import React from "react";
import { Table } from "react-bootstrap";

const CoinTable = ({ tableData }) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Symbol</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((coin) => {
                    return (
                        <tr key={coin.id}>
                            <td>{coin.id}</td>
                            <td>{coin.name}</td>
                            <td>{coin.symbol}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default CoinTable;
