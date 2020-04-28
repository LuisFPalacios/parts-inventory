import React from 'react';
import axios from 'axios';

class DisplayParts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {parts:[]}
        this.getParts()
    }
    getParts() {
        axios.get('http://localhost:3000/api/parts', {

          }).then((response) => {
            this.setState({
                parts: response.data.data
            })
            console.log(response);
          }).catch(error => {
            console.log(error)
            // do something when request was unsuccessful
          });
    }
    partsHtml(){

        let partsHtmlArr = []
        for(let part of this.state.parts){
            partsHtmlArr.push(
                <tr>
                    <td>{part.name}</td>
                    <td>{part.price}</td>
                    <td>{part.description}</td>
                    <td>{part.compatibility}</td>
                    <td>{part.count}</td>
                </tr>
            )
        }
        return partsHtmlArr
        
    }

    render() {
        return (<table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Desc</th>
                    <th>Comp</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
             {this.partsHtml()}
            </tbody>
        </table>)
    }


}
export default DisplayParts;