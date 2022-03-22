import tokens from '../util/tokenList.json';
import ReactJson from 'react-json-view';

const Token = ({name, symbol, type, logoURI, address}) => {
    if (!name) return <div />;
    return (
        <tbody>
        <tr>
            <td>
                <img src={logoURI} width='50px'></img>
            </td>
            <td>
                <h5>{symbol}</h5>
            </td>
            <td>
                <h5>{name}</h5>
            </td>
            <td>
                <h4>{type}</h4>
            </td>
            <td>
                <h4>{address}</h4>
            </td>
        </tr>
    </tbody>
    )
}
const TokenList = () => {
    return (
        <>
        <table>
            <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Name</th>
                        <th scope="col">Token Type</th>
                        <th scope="col">Contract Address</th>
                    </tr>
            </thead>
            {tokens.tokens.map((tokenData, key) => {
                    return (
                        <Token
                            key = {key}
                            name = {tokenData.name}
                            symbol = {tokenData.symbol}
                            logoURI = {tokenData.logoURI}
                            type = {tokenData.type}
                            address = {tokenData.address}
                        />
                    )
            })}
        </table>
        </>
     );
}
export default TokenList;