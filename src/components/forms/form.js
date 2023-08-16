import "./form.css";
import TextCamp from "../textCamp/textCamp";

const Form = () => {
  return (
    <section className='form'>
      <form className='react__form'>
        <h2 className='form__title'>Rellena el formulario para crear el colaborador</h2>
        <TextCamp titulo='Nombre' placeholder='Ingresar nombre'/>
        <TextCamp titulo='Puesto' placeholder='Ingresar puesto'/>
        <TextCamp titulo='Foto' placeholder='Ingresar enlace de foto'/>
      </form>
    </section>);
};

export default Form;
