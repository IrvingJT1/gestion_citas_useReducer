import { CalendarioCitas } from './components/CalendarioCitas';
import { SelectorCitas } from './components/SelectorCitas';
import { useEffect, useReducer } from 'react';
import { citasReducer, initialState } from './reducers/citasReducer';

function App() {
  
  // const {listaDeCitas, seleccionarCita, selectCita, reservarCita, cancelarCita, resetForm} = useCitas();

  const [state, dispatch] = useReducer(citasReducer, initialState);

  useEffect(()=>{
    localStorage.setItem('listaDeCitas', JSON.stringify(state.listaDeCitas));
  },[state.listaDeCitas]);

  return (
    <>
        <div className='min-h-screen flex flex-col'>
          <header className='bg-yellow-200'>
            
            <h1 className='text-3xl font-bold text-center py-4'>
              Gestión de citas médicas
            </h1>

          </header>
          <main className='flex-grow'>
            <div className='bg-orange-300 flex justify-center items-center'>
              <CalendarioCitas 
                state = {state}
                dispatch = {dispatch}
              />
            </div>
            <div className='bg-orange-300 flex justify-center items-center'>
              <SelectorCitas 
              state={state}
              dispatch={dispatch}
              />
            </div>
          </main>

          <footer className='bg-slate-400 flex justify-center items-center w-full py-8 mt-auto'>
            <p>Todos los derechos reservados</p>
          </footer>
        </div>
    </>
  )
}

export default App;
