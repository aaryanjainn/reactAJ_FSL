import React from 'react'
import { useState } from 'react';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Index()
{
    const [getVal, changeVal] = useState('');
    const [storeListVal, storeListFunction] = useState([]);
    const [editing, setEditing] = useState(false);
    const [checkVal, checkFunction] = useState([]);

    function handleChange(event)
    {
        changeVal(event.target.value);
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        if(getVal == "" || getVal == null)
        {
            alert("Please enter list name")
        }
        else
        {
            console.log(getVal);
            console.log(storeListVal);
            let see = storeListVal.filter(item => item.includes(getVal))

            if (Object.keys(see).length == 0)
            {
                if(editing === false)
                {
                    storeListFunction([...storeListVal, getVal])
                }
                else
                {
                    storeListVal[editing] = getVal;
                    setEditing(false);
                }
            }
            else
            {
                alert("This item is alreday there in the list");
            }
            // if(see == null)
            // {
            // }
            // else
            // {
            // }


        }
        changeVal('')
    }
    function deleteByValue(listName)
    {  
        let storeArrayAfterDelete = storeListVal.filter((element,index) =>
        {
            if(index !== listName)
            {
                return element;
            }
        })
        storeListFunction(storeArrayAfterDelete)
    }
    function editByValue(indexUser,element)
    {
        changeVal(element);
        setEditing(indexUser)
    }
    function checkByValue(listName)
    {        
        console.log(listName)
        checkFunction([...checkVal,listName])
    }
    function List()
    {
        return (
            <>
                <ul>
                    {
                        // typeof(storeListVal)
                        storeListVal.map(function (element, index)
                        {
                            return(
                                <li className={(checkVal.includes(index))?"checked":""} key={index}> {element} 
                                    <Delete onClick={() => deleteByValue(index)} />
                                    <Edit onClick={() => editByValue(index,element)}/>
                                    <CheckCircleIcon onClick={() => checkByValue(index)} />
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={getVal} onChange={handleChange} />
                <input type="submit" />
            </form>
            <List />
        </>
    )
}

export default Index