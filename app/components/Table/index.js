import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'styles/colors';
import TableStyle from './style';
import JoiningIcon from 'images/joining.png';
import RegisterIcon from 'images/register.png';
import Icon from 'components/Icon';
import * as _ from 'lodash';

const Table = ({ header, data }) => {
    const TableHeaderStyle = styled.div`
        display: grid;
        grid-template-columns: 50px repeat(${header.length - 2}, 1fr) 50px;
        .table-rooms_header__item {
            display: flex;
            align-items: center;
            padding-left: 5px;
            height: 35px;
            background: ${colors.$bluegrey.base};
            color: ${colors.$white};
        }
    `
    const TableBodyStyle = styled.div`
        display: grid;
        grid-template-columns: 50px repeat(${header.length - 2}, 1fr) 50px;
        .table-rooms_body__item {
            display: flex;
            padding-left: 5px;
            min-height: 30px;
        }
        .table-rooms_action {
            display: flex;
            justify-content: center;
            img {
                width: 18px;
                height: 18px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    `

    return (
        <TableStyle id="table-rooms">
            <TableHeaderStyle>
                <TableHeaderItem items={header} />
            </TableHeaderStyle>
            {
                data.map((item, index) => {
                    return <TableBodyStyle key={`table-rooms_body__${index}`}>
                        <TableBodyItem item={item}/>
                    </TableBodyStyle>
                })
            }
        </TableStyle>
    )
}

Table.propTypes = {
    header: PropTypes.array,
    data: PropTypes.array
}

const TableHeaderItem = ({ items }) => {
    return (
        items.map((e, i) => {
            return <div key={`table-rooms_header_${i}`} className="table-rooms_header__item">{e}</div>
        })
    )
}

const TableBodyItem = ({ item }) => {
    return _.values(item).map((e, i) => {
        if (e === 'REGISTER') {
            return (
                <div key={`table-rooms_body_${i}`} className="table-rooms_action">
                    <Icon className="hovering" src={JoiningIcon} tooltip="Join"/>
                </div>
            )
        }
        if (e === 'JOIN') {
            return (
                <div key={`table-rooms_body_${i}`} className="table-rooms_action">
                    <Icon className="hovering" src={RegisterIcon} tooltip="Register"/>
                </div>
            )
        }
        return <div key={`table-rooms_body_${i}`} className="table-rooms_body__item">{e}</div>
    })
}

export default Table;
