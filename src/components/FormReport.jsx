import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/userForm.css'


const FormReport = ({ reportLive, setReportLive, client, setCloseForm }) => {

  const { register, handleSubmit, reset } = useForm()
  const [fails, setFails] = useState()
  const [users, setUsers] = useState()

  useEffect(() => {
    const URL = 'https://bitacora-production.up.railway.app/api/users'
    axios.get(URL)
      .then((res) => setUsers(res.data.usuarios)
      ).catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    const URL = 'https://bitacora-production.up.railway.app/api/fallas'
    axios.get(URL)
      .then((res) => setFails(res.data)
      ).catch((err) => console.log(err));
  }, [])


  const clearForm = () => {
    setCloseForm(true)
    reset()
  }

  const sendReport = (data) => {
    data.nombreLive = reportLive?.name
    data.idLive = reportLive?.id
    data.cliente = client?.id
    const URL = 'https://bitacora-production.up.railway.app/api/reporte'
    axios.post(URL, data)
      .then((res) => {
        console.log(data);

      }).catch((err) => {
        console.log(err);

      });
  }

  const idioms = [{ id: 0, nombre: 'Spanish' }, { id: 1, nombre: 'English' }]




  return (
    <div>
      <form className='form' >
        <div className='form_x' onClick={handleSubmit(clearForm)}>x</div>
        <h2 className='form__title'>Reporte de incidencias</h2>

        <div className='form__div'>
          <label className='form__label' htmlFor="nombreLive">Nombre Live </label>
          <input className='form__input' type="text" id='nombreLive' defaultValue={reportLive?.name} {...register("nombreLive")} />
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor="idLive">Live id </label>
          <input className='form__input' type="text" id='idLive' defaultValue={reportLive?.id} {...register("idLive")} />
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor='Cliente'>Cliente id </label>
          <input className='form__input' type='text' id='cliente' defaultValue={client?.id} {...register("cliente")} />
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor='observaciones'>Observaciones </label>
          <input className='form__input' type='text' id='observaciones' {...register("observaciones")} />
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor='fechaInicio'>Fecha Inicio </label>
          <input className='form__input' type='date' id='fechaInicio' {...register("fechaInicio")} />
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor='fechaFin'>Fecha Fin </label>
          <input className='form__input' type='date' id='fechaFin' {...register("fechaFin")} />
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor='usuario'>Usuario </label>
          <select {...register("usuario")}>
            <option value=""></option>
            {
              users?.map(user => (
                <option key={user._id} value={user._id}>{user.nombre}</option>
              ))
            }
          </select>
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor='tipoFalla'>Tipo de Falla </label>
          <select  {...register("tipoFalla")}>
            <option value=""></option>
            {
              fails?.map(fail => (
                <option key={fail.id} value={fail.id}>{fail.nombre}</option>
              ))
            }
          </select>

        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor='idioma'>Idioma </label>
          <select  {...register("idioma")}>
            <option value=""></option>
            {
              idioms?.map(idiom => (
                <option key={idiom.id} value={idiom.id}>{idiom.nombre}</option>
              ))
            }
          </select>

        </div>
        <button className='form__button'onClick={handleSubmit(sendReport)}>Reportar</button>
      </form>
    </div>
  )
}

export default FormReport