import React,{useContext,useState,useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'

import {
    Form, FormGroup, Input,Button,Card,CardBody,CardHeader
} from 'reactstrap'
export const EditTodo = (props) => {
    const [selected, setSelected] = useState({
        id:'',activity:'',time:''
    });
    const {lists, updateList} = useContext(GlobalContext);
    const navigate = useNavigate();
    //date
    const d = new Date();
    const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
    const currentTime = date.toString();

    const Waktu = "time"

    const { id } = useParams();
    const currentId = id;
    useEffect(()=>{
        
        const selected = lists.find(list => list.id === currentId)
        setSelected(selected)
        
    }, [currentId, lists])
    const onSubmit = ()=>{
        updateList(selected)
        navigate("/");
    }
    const onChange = (event)=>{
        setSelected({...selected, [event.target.name]: event.target.value, [Waktu]: currentTime});
    }
    console.log(selected)
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <Card style={{ width:"30rem" }}>
            <CardHeader><h5>Edit To Do</h5></CardHeader>
                <CardBody>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Input 
                    type="text" 
                    name="activity"
                    value={selected.activity} 
                    onChange={onChange}>      
                    </Input>
                    <div className="d-flex justify-content-end mt-3">
                    <Button type="submit" className="btn btn-info mx-2" style={{ color:"white" }}>Save</Button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                    </div>
                </FormGroup>
                
            </Form>
            </CardBody>
            </Card>
            
        </div>
    )
}
