import React , {useEffect,useState} from 'react';
import FormCss from './Form.module.css';
import api from '../../service/Api';
import { useNavigate, Link } from 'react-router-dom';
import UIButton from '../UI/Button/Button';

const initialValue = {
    title: '',
    imageUrl:'',
    url: '',
    price: 0,
}



const BooksForm = ({id}) => {
    const[values, setValues] = useState(initialValue);
    const navigate = useNavigate();
    console.log(values);
    function onChange(ev){
        const{name, value} = ev.target;

        // console.log({name, value});
        setValues({...values, [name]: value})
    }
    useEffect( ()=>{
        if(id){
            api.get(`/books/${id}`)
            .then( (response) => {
                setValues(response.data);
            })
        }

    }, [id])



    function onSubmit(ev){
        ev.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id
          ?`/books/${id}`
          :'/books'

          api[method](url, values)
          .then( (response) => {
              navigate('/');
          })
    }
    return(
        <div>
            
            <h2>Novo Livro</h2>
            <form onSubmit={onSubmit}>
                <div className={FormCss.BooksFormGroup}>
                <label htmlFor="title">titulo</label>
                <input type="text" id="title" name="title" value={values.title} onChange={onChange} />
                </div>

                <div className={FormCss.BooksFormGroup}>
                <label htmlFor="title">Url Image</label>
                <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onChange} />
                </div>

                <div className={FormCss.BooksFormGroup}>
                <label htmlFor="url">Url</label>
                <input type="text" id="url" name="url" value={values.url} onChange={onChange} />
                </div>

                <div className={FormCss.BooksFormGroup}>
                <label htmlFor="price">Price</label>
                <input type="number" step="any" id="price" name="price" value={values.price} onChange={onChange} />
                </div>

                <div className={FormCss.BooksFormButton}>
                    <UIButton type="submit" component="button">
                        Salvar
                    </UIButton>
                    <UIButton
                    to="/"
                    component={Link}
                    theme="border-warning"
                    >
                        Voltar
                    </UIButton>
                </div>

               
               

            </form>
        </div>
    )
}

export default BooksForm;