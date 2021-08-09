import React from 'react';

const List = (props) => {
    console.log(props);
    return (
        <div>
            <ul>
                {
                    props.marketlist.map(element => {
                        return <li>{element[1]} - {element[0]}</li>;
                    })
                }
            </ul>           
        </div>
    );
};

export default List;