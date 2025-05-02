import { useEffect, useState } from "react";
import { citas_db } from "../data/citas_db.js";


export const useCitas = () => {
  
    const [listaDeCitas, setListaDeCitas] = useState( () => { 
      
      const guardarCitas =  localStorage.getItem('listaDeCitas');

      return guardarCitas ? JSON.parse(guardarCitas) : citas_db;
     } );

    const [seleccionarCita, setSeleccionarCita] = useState('');

    const selectCita = (id) => {
      const citaSelect = listaDeCitas.find((cita) => cita.id === id );

      setSeleccionarCita(citaSelect);
    }

    const actualizarCitas = (id, available) => {
      // solo pone el atributo available en false o false, dependiendo el valor que traiga ese parámetro cuando hay una conincidencia de id's 
      // y las demás citas que no hacen match las deja igual
      const updatedCitas = listaDeCitas.map((cita) => cita.id === id? {...cita, available} : cita);

      setListaDeCitas(updatedCitas);

    }

    const reservarCita = (id) => {
      actualizarCitas(id, false);
    }

    const cancelarCita = (id) => {
      actualizarCitas(id, true);
    }

    const resetForm = () => {

      setListaDeCitas(citas_db);
      setSeleccionarCita('');

    }

    //Cualquier cambio sobre la variable de listaDeCitas, aplicará que se guarde el valor de esta en
    //localStorage
    useEffect(() => {
      localStorage.setItem('listaDeCitas', JSON.stringify(listaDeCitas));
    }, [listaDeCitas]);

    return {
        listaDeCitas,
        seleccionarCita,
        selectCita,
        reservarCita,
        cancelarCita,
        resetForm

  }
}
