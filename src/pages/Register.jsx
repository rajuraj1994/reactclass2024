import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Helmet } from 'react-helmet'

const Register = () => {
  return (
    <>
    <Helmet>
        <title>Register</title>
    </Helmet>

    <Formik
    initialValues={{firstname:'',lastname:'',email:'',password:'',cpassword:''}}
    validationSchema={Yup.object({
        firstname:Yup.string()
        .max(20,'must be 20 characters or less')
        .required('firstname is mandatory'),

        lastname:Yup.string()
        .max(20,'must be 20 characters or less')
        .required('lastname is mandatory'),

        email:Yup.string()
        .email('invalid email format')
        .required('email is mandatory'),

        password:Yup.string()
        .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$?!])[A-Za-z\d@#$?!]{8,}$/,'must contain one uppercase,one lowercase,one numeric and one special character and must be at least 8 characters')
        .required('password is mandatory'),

        cpassword:Yup.string()
        .required('confirm password is mandatory')
        .oneOf([Yup.ref('password'),null],'password and confirm password doesnot match')

    })}
    >
        <div className="container my-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 shadow p-3">
                    <Form>
                        <div className="mb-2">
                            <label htmlFor="firstname">FirstName</label>
                            <Field type="text" name="firstname" id="firstname" className="form-control" />
                            <ErrorMessage name='firstname'>
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="lastname">LastName</label>
                            <Field type="text" name="lastname" id="lastname" className="form-control" />
                            <ErrorMessage name='lastname'>
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" id="email" className="form-control" />
                            <ErrorMessage name='email'>
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" id="password" className="form-control" />
                            <ErrorMessage name='password'>
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <Field type="password" name="cpassword" id="cpassword" className="form-control" />
                            <ErrorMessage name='cpassword'>
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <button className='btn btn-primary'>Register</button>
                        </div>

                    </Form>
                </div>
            </div>
        </div>

    </Formik>

    </>
  )
}

export default Register