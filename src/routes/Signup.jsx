import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Signup = () => {

  const { signUp, user } = useContext(UserContext);
  const navigate = useNavigate()

  const { register, handleSubmit, watch, formState: { errors }, getValues, setError } = useForm()

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await signUp(data.email, data.password)
      navigate("/")

    }
    catch (error) { 
      switch(error.code){
        case "auth/email-already-in-use":
          setError("email",{
            message:"El correo ya está registrado"
          })
          break;
          case "auth/ivalid-email":
            setError("email",{
              message:"Ingrese un email valido"
            })
        default:
          console.log("Ha ocurrido un error")
      }
    }
  }

 

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Registrarse</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder='Email'
          {...register("email", {
            required: {
              value: true,
              message: "Campo obligatorio"
            },
            pattern: {
              value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Ingrese un email valido"
            }

          })}
        />

        {
          errors.email && errors.email.message
        }

        <input
          type="password"
          placeholder='Contraseña'
          {...register("password", {
            setValueAs: v=>v.trim(),             
            minLength: {
              value: 6,
              message: "Minimo 6 caracteres"
            }
          })}
        />

        {
          errors.password && errors.password.message
        }

        <input
          type="password"
          placeholder='Contraseña'
          {...register("repassword", {
            setValueAs: v=>v.trim(),      
            validate: {
              equals: v => v === getValues("password") || "Las contraseñas no coinciden"
            }
          })}
        />

        {
          errors.repassword && errors.repassword.message
        }


        <button type='submit'>Registrarse</button>
      </form>

    </div>
  );
}

export default Signup