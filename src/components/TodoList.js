import React,{useContext,useState} from 'react'
import {Link} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'
import {Button,Card,CardDeck,CardBody} from 'reactstrap' 
export const TodoList = () => {
    const { lists, deleteList} = useContext(GlobalContext);

    return (
        <div>

            {lists.length>0 ? (
                <>
            <CardDeck className="d-flex flex-wrap mt-4">
            {lists.map(list=>(
                <Card className="d-flex m-3" key={list.id}>
                <h5 className="card-header"><small>{list.time}</small></h5>
                <CardBody className="p-3">
                <p className="card-text">{list.activity}</p>
                <div className="d-flex justify-content-end mt-3">
    
                    <Link className="btn btn-info mx-2" to={`/edit/${list.id}`} style={{ color:"white" }}>Edit</Link>              
                    <Button className="btn btn-danger" onClick={()=>{deleteList(list.id)}}>Delete</Button>
                </div>
                </CardBody>
                
                </Card>
            ))}
            </CardDeck>
            </>
            ):(
                <h5 className="d-flex justify-content-center mt-5">Add Your Activity</h5>
            )}

        </div>
    )
}
