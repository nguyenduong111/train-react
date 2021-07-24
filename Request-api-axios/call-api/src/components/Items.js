import React from "react";

function Items(props) {
    let { inFos } = props;
    let showInfo = inFos.map((value, index) => {
        return (
            <tr key={index}>
                <td> {index} </td>
                <td> {value.name} </td>
                <td> {value.address} </td>
            </tr>
        );
    });

    return (
        <table className="table table-striped table-inverse table-responsive table-bordered table-hover">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Địa chỉ</th>
                </tr>
            </thead>
            <tbody>{showInfo}</tbody>
        </table>
    );
}

export default Items;
