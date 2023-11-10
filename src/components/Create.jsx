import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const Create = () => {
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
    const navigate = useNavigate();

    const store = async e => {
        e.preventDefault();
        const articlessCollection = collection(db, 'articles');
        await addDoc(articlessCollection, { description, stock });
        navigate('/');
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Create Product</h1>
                    <form onSubmit={store}>
                        <div className='mb-3'>
                            <label className='form-label'>Description</label>
                            <input
                                type='text'
                                className='form-control'
                                name='description'
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Stock</label>
                            <input
                                value={stock}
                                onChange={e => setStock(e.target.value)}
                                type='number'
                                className='form-control'
                            />
                        </div>
                        <div className='d-flex gap-2'>
                            <button type='submit' className='btn btn-success'>
                                Store
                            </button>
                            <Link to='/' className='btn btn-danger'>
                                Volver
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
