import React,{useContext,useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'
import {v4 as uuid} from 'uuid'
import {
    Form, FormGroup, Input,Button, Card,CardBody,CardHeader
} from 'reactstrap'

export const AddTodo = () => {
    const [activity, setActivity] = useState('');
    const {createList} = useContext(GlobalContext);
    const navigate = useNavigate();
    const d = new Date();
    const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
    const currentTime = date.toString();

    const onSubmit = ()=>{
        const newList = {
            id: uuid(),
            activity: activity,
            time: currentTime   
        }
        createList(newList)
        navigate("/");
    }
    const onChange = (event)=>{
        setActivity(event.target.value);
    }
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <Card style={{ width:"30rem" }}>
                <CardHeader><h5>Create To Do</h5></CardHeader>
                <CardBody>
                <Form onSubmit={onSubmit}>
                <FormGroup >
                    <Input type="text" value={activity} onChange={onChange}></Input>
                    <div className="d-flex justify-content-end mt-3">
                    <Button type="submit" className="btn btn-info mx-2" style={{ color:"white" }}>Submit</Button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                    </div>
                </FormGroup>
            </Form>
                </CardBody>
            </Card>
            
        </div>
    )
}
