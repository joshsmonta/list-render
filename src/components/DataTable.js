import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import profileData from '../data/service';

function DataTable() {
    const [data] = useState(profileData);
    return (
        <div class='container'>
            <div class='col-12'>
                <Table class="table">
                    <thead class="theader">
                        <tr>
                            <th colspan="1"></th>
                            <th colspan="4" id='nameData'>Name</th>
                            <th id='scoreData'>Target Score</th>
                            <th id='scoreData'>Actual Score</th>
                            <th id='scoreData'>Total Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <td colspan="1"></td>
                                <td colspan="4" id='nameData'>{item.name}</td>
                                <td id='scoreData'>{item.target}%</td>
                                <td id='scoreData'><span class={item.spanColor}>{item.actual}%</span></td>
                                <td id='scoreData'>{item.points}%</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default DataTable;
