import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Show } from './components/Show';
import { Edit } from './components/Edit';
import { Create } from './components/Create';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Show />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:id' element={<Edit />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
