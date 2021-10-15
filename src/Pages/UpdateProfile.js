import React, { useRef, useState } from 'react'
import { Container, Button, Card, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import ImageUpload from '../Components/ImageUpload/ImageUpload'

export default function UpdateProfile() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { currentUser, updateEmail, updatePassword, updateName } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match');
        }

        const promises = []
        setError('');
        setLoading(true);

        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        if(nameRef.current.value){
            promises.push(updateName(nameRef.current.value))
        }

        //as soon as all our promises done then is executed
        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false);
        })

    }
    return (
        <>
        <Container className="d-flex align-items-center justify-content-center" 
                style={{minHeight: "100vh"}}>

            <div className="w-100" style={{maxWidth: '400px'}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Update Profile</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='img'>
                                <Form.Label>Profile Image</Form.Label>
                                <ImageUpload />
                            </Form.Group>
                            <Form.Group id='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" ref={nameRef} required defaultValue={currentUser.displayName} />
                            </Form.Group>
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} placeholder={"Leave blank to keep the same"} />
                            </Form.Group>
                            <Form.Group id='password-confirm'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} placeholder={"Leave blank to keep the same"} />
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type='submit'>Update</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    <Link to={`/user/${currentUser.email.split('@')[0]}`}>Cancel</Link>    
                </div>  
            </div>
        </Container>        
        </>
    )
}
