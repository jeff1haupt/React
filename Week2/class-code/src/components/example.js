import React from 'react';

// export default class Example extends React.Component {
//     render() {
//         return(
//             <footer>
//                 <p>
//                     {this.props.name} <br />
//                     {this.props.email} <br />
//                     {this.props.phone} 
//                 </p>
//             </footer>

//         )
//     }
// }

function Example (props) {
    return (
      <footer>
        <p>
          {props.name} <br />
          {props.email} <br />
          {props.phone}
        </p>
      </footer>
    );
}

export default Example;