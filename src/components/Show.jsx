// ===> React
import { Link } from 'react-router-dom';

// ===> SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// ===> CustomHooks
import { useArticles } from '../hooks/useArticles';

const MySwal = withReactContent(Swal);

export const Show = () => {
    //  Hooks
    const { articles, deleteArticle } = useArticles();

    const confirmDelete = id => {
        MySwal.fire({
            title: '¿Elimina el producto?',
            text: '¿Estas seguro que deseas eliminarlo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, quiero borrarlo',
        }).then(result => {
            if (result.isConfirmed) {
                deleteArticle(id);
                Swal.fire('Borrado!', 'Tu articulo ha sido borrado del inventario', 'success');
            }
        });
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='d-grid gap-2'>
                        <Link to='/create' className='btn btn-success  mt-2 mb-2'>
                            Create Article
                        </Link>
                    </div>
                    {articles.length == 0 ? (
                        <div className='mb-2'>
                            <h1 className='fs-5 py-5  text-center bg-success p-2 text-dark bg-dark-subtle rounded-2 border border-2'>
                                No tienes articulos en tu inventario
                            </h1>
                        </div>
                    ) : (
                        <table className='table  table-hover border-2'>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Description</th>
                                    <th>Stock</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {articles.map(article => (
                                    <tr key={article.id} className=''>
                                        <td>{article.id}</td>
                                        <td>{article.description}</td>
                                        <td>{article.stock}</td>
                                        <td className='d-flex gap-2'>
                                            <Link
                                                to={`/edit/${article.id}`}
                                                className='btn btn-light'
                                            >
                                                <i className='bi bi-pencil-fill'></i>
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    confirmDelete(article.id);
                                                }}
                                                className='btn btn-danger'
                                            >
                                                <i className='bi bi-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};
