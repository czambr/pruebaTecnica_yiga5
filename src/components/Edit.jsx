import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const Edit = () => {
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);

    const navigate = useNavigate();
    const { id } = useParams();

    const update = async e => {
        e.preventDefault();
        const article = doc(db, 'articles', id);
        const data = { description: description, stock: stock };
        await updateDoc(article, data);
        navigate('/');
    };

    const getArticleById = async id => {
        const article = await getDoc(doc(db, 'articles', id));
        if (article.exists()) {
            setDescription(article.data().description);
            setStock(article.data().stock);
        } else {
            console.log('El articulo  no existe');
        }
    };

    useEffect(() => {
        getArticleById(id);
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Edit Product</h1>
                    <form onSubmit={update}>
                        <div className='mb-3'>
                            <label className='form-label'>Description</label>
                            <input
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                type='text'
                                className='form-control'
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
                        <button type='submit' className='btn btn-primary'>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
