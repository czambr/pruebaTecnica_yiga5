import { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const useArticles = () => {
    // Hooks
    const [articles, setArticles] = useState([]);

    // Obtener articulos
    const getArticles = async () => {
        const articlesCollection = collection(db, 'articles');
        const data = await getDocs(articlesCollection);
        setArticles(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    // Eliminación del articulo
    const deleteArticle = async id => {
        const articleDoc = doc(db, 'articles', id);
        await deleteDoc(articleDoc);
        getArticles();
    };

    // // usamos useEffect
    useEffect(() => {
        getArticles();
    }, []);

    return { articles, deleteArticle };
};
