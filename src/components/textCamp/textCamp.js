import './textCamp.css';

const TextCamp = (props) => {
    console.log("Data: ", props)
    const placeholderMod = `${props.placeholder}...`
    return (
        <div className='textCamp'>
            <label> { props.titulo }</label>
            <input placeholder={ placeholderMod } />
        </div>
    );
};

export default TextCamp;