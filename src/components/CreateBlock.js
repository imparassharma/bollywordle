import React from 'react';
import { itemList} from '../components/Movie';

function CreateBlock(props){
    return(
    <div className="block-container" id='blockContainer'>
        {itemList}
    </div>
    )
}

export default CreateBlock;
