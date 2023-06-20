import React from 'react';
import { itemList, arr } from '../components/Movie';

function CreateBlock(props){
    return(
    <div className="block-container">
        {itemList}
    </div>
    )
}

export default CreateBlock;
