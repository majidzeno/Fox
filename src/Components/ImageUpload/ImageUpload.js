import React, {useState, useEffect, useRef} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './ImageUpload.css'
import { Button, Alert } from 'react-bootstrap'

export default function ImageUpload(props){
    const { currentUser, updateProfile } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState()
    const [previewURL, setPreview] = useState(currentUser.photoURL)
    const filePickedRef = useRef()

    useEffect(() => {
        if(!file){
            return;
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPreview(fileReader.result)
        };
        fileReader.readAsDataURL(file)
        console.log(currentUser)
    }, [file])

    async function pickedHandler(e){
        let pickedFile;
        if(e.target.files && e.target.files.length === 1){
            pickedFile = e.target.files[0]
            setFile(pickedFile)
        }
        try{
            setError('');
            setLoading(true);
            console.log('previewURL ', previewURL, typeof previewURL)
            await updateProfile(currentUser.displayName, previewURL)
        } catch {
            setError('Failed to update profile image')
        }
        setLoading(false);
    }

    function pickedImageHandler(){
        filePickedRef.current.click()
    }

    return(
        <>
        {error && <Alert variant='danger'>{error}</Alert>}
        <div className="form-control center">
            <input id={props.id} 
                   ref={filePickedRef} 
                   style={{display: 'none'}} 
                   type="file" 
                   accept=".jpg,.png,.jpeg" 
                   onChange={pickedHandler} 
            />
            <div className={`image-upload ${props.center && 'center'}`}>
                <div className="image-upload-preview">
                    {previewURL && <img src={previewURL} alt='preview' />}
                </div>
                <div>
                    {previewURL && (
                        <div className="center">
                            <Button className="w-100" type="button" onClick={pickedImageHandler}>Edit</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}