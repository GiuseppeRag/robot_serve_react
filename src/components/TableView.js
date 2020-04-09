import React from 'react';
import {Link} from 'react-router-dom'
import {Box, Table, TableBody, TableCell, TableContainer, TableRow, TableHead, TablePagination, TableFooter, Button} from '@material-ui/core'

class TableView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            headerArray: this.props.headerArray,
            contentArray: this.props.contentArray
        }
    }

    renderHeaders(){
        const {headerArray} = this.state
        let headers = []
        headerArray.map(header => {
            headers.push(<TableCell style={{textAlign: "center", backgroundColor: "black", color: "white", fontSize: 24}}>{header}</TableCell>)
        })
        return headers
    }

    renderData() {
        const {contentArray} = this.state
        let rows = []
        let colour = "white"
        contentArray.map(record => {
            rows.push(
            <TableRow>
                {this.renderRow(record, colour)}
            </TableRow>)
            if (colour == "white"){
                colour = "lightgray"
            }
            else {
                colour = "white"
            }
        })
        return rows
    }

    renderRow(record, colour) {
        let itemArray = []
        for (let key in record){
            itemArray.push(<TableCell style={{textAlign: "center", backgroundColor: colour, fontSize: 18}}>{record[key]}</TableCell>)
        }
        if (this.props.allowEdit == true){
            let url = '/edituser/' + record.id
            itemArray.push(<TableCell style={{textAlign: "center", backgroundColor: colour, fontSize: 18}}>
                <Link to={{pathname: url, user: record}} style={{ textDecoration: 'none' }}>
                    <Button variant="contained">Edit</Button>
                </Link>
            </TableCell>)
        }
        return itemArray
    }

    render() { 
        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        {this.renderHeaders()}
                    </TableHead>
                    <TableBody>
                        {this.renderData()}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
 
export default TableView;