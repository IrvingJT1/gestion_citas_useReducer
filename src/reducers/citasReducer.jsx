import {citas_db} from "../data/citas_db.js";

const localStorageCitas = () =>{
    const citas = localStorage.getItem('listaDeCitas');

    return citas ? JSON.parse(citas) : citas_db;
}

//Estado inicial
export const initialState = {
    listaDeCitas: localStorageCitas(),
    seleccionarCita: ''
}
// REDUCER
export const citasReducer = (state, action) => {
    // toda la lógica va aqui dentro

    if(action.type === 'SELECT_CITA'){
        const seleccionarCita = state.listaDeCitas.find((cita) => cita.id === action.id);

        return {
            ...state,
            seleccionarCita
        }
    }

    if(action.type === 'ACTUALIZAR_CITAS')
    {
        const listaDeCitas = state.listaDeCitas.map((cita) => cita.id === action.id ? {...cita, avaialable: action.available}:cita);

        return {
            ...state,
            listaDeCitas
        }
    }

    if(action.type === 'RESERVAR_CITA')
    {
        const listaDeCitas = state.listaDeCitas.map((cita) => cita.id === action.id ? {...cita, available: false}:cita);

        return {
            ...state,
            listaDeCitas
        }
    }

    if(action.type === 'CANCELAR_CITA')
    {
        const listaDeCitas = state.listaDeCitas.map((cita) => cita.id === action.id ? {...cita, available: true}:cita);

        return {
            ...state,
            listaDeCitas
        }
    }

    if(action.type === 'RESET_FORM'){
        return {
            listaDeCitas:citas_db,
            seleccionarCita:''

        }
    }
} 