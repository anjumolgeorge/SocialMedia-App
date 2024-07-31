
'use client';

import React, { useRef, useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import instance from '../instence/instence';
import { GlobalContext } from './context/globalcontext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius: '16px',
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
};

const buttonStyle = {
    backgroundColor: '#1976d2',
    color: 'white',
    margin: '10px 0',
    '&:hover': {
        backgroundColor: '#1565c0',
    },
};

const Input = styled('input')({
    display: 'none',
});

interface CreatePostProps {
    open: boolean;
    handleClose: () => void;
    setImageUrl: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CreatePost: React.FC<CreatePostProps> = ({ open, handleClose, setImageUrl }) => {
    const { post, setPost } = useContext<any>(GlobalContext);
    const [description, setDescription] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectFile, setSelectFile] = useState<File | null>(null);
    const [imageUrl, setImageUrlState] = useState<string | null>(null);

    useEffect(() => {
        if (!open) {
            setDescription('');
            setSelectFile(null);
            setImageUrlState(null);
        }
    }, [open]);

    const handleUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputFile = e.target.files ? e.target.files[0] : null;
        setSelectFile(inputFile);

        if (inputFile) {
            const inputUrl = URL.createObjectURL(inputFile);
            setImageUrlState(inputUrl);
        } else {
            alert("No file selected");
        }
    };

    const userid =
        typeof localStorage !== "undefined" ? localStorage.getItem("userid") : null;

    const handleApi = async () => {
        const userId = typeof localStorage !== 'undefined' ? localStorage.getItem("userid") : null;
        const formData = new FormData();
        formData.append("file", post);
        formData.append("desc", description);
        formData.append("userId", userId!);

        if (selectFile) {
            formData.append("file", selectFile);
        }

        try {
            const response = await instance.post('/createPost', formData, {
                headers: { 'Content-Type': 'multipart/form-data'},
            });
            console.log('Post created:', response.data);
            setImageUrl((prev: any) => [...prev, response.data.post.image]);
            handleClose();
            setSelectFile(null);
            setDescription("");
           alert("Post added successfully");
        } catch (error) {
            console.log("Error creating post:", error);
            alert("Error creating post");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get(`/posts/${userid}/timeline`);

                if (response.status === 200) {
                    setPost(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (userid){
            fetchData();
        }
    }, [userid,post,setPost]);

    const addPost = () => {
        if (selectFile) {
            handleApi();
        } else {
            alert("Please select a file");
        }
    };

    return (
        <div>
            <input
                ref={fileInputRef}
                onChange={handleFile}
                type='file'
                accept='image/*'
                style={{ display: "none" }}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={style}>
                    <Button component="span" sx={buttonStyle} onClick={handleUpload}>
                        Choose a File
                    </Button>
                    {imageUrl && (
                        <img src={imageUrl} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px', margin: '20px 0' }} />
                    )}
                    <TextField
                        id="description"
                        label="Share your moments here"
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{ bgcolor: 'white', borderRadius: 1, width: '100%', mb: 2 }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button sx={buttonStyle} onClick={addPost}>
                        Post
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default CreatePost;
