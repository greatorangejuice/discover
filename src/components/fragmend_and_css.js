import React from 'react';


const Columns = () => (
    <>
    <td key="1">Hello</td> 
    <td key="2">world</td>
    </>
)

const Table = () => (
    <table>
        <tbody>
            <tr>
                <Columns />
            </tr>
        </tbody>
    </table>
)

export default Table;