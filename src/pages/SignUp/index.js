import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome Obrigatório'),
  email: Yup.string().email('Insira um e-mail valido').required('E-mail Obrigatório'),
  password: Yup.string().min(6, 'Minimo de 6 Caracteres').required('Senha Obrigatória')
})

export default function SignUp() {

  function handleSubmit(data){
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber"/>


      <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="name" placeholder="Nome Completo"/>
        <Input name="email" type="email" placeholder="Seu e-mail"/>
        <Input name="password" type="password" placeholder="Sua Senha Secreta"/>

        <button type="submit">Criar Conta</button>

        <Link to="/">Já tenho Login</Link>
      </Form>

    </>
  );
}
