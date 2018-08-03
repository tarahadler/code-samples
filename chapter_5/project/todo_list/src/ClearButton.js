import React from 'react';

class ClearButton extends React.Component {

    render () {
   
    

        return (          
            <div>
               <button 
               className="pull-right btn btn-default"
               onClick={() => {this.props.removeTodos()}}
               >Clear Complete
               </button>
            </div>
                  
        )
    }
}

export default ClearButton; 