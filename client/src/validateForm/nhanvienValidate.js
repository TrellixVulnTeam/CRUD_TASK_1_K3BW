import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

const ValidateFrom = () =>{
    const formik = useFormik({
        initialValues: {
            name : '',
            email: '',
            sex: 'Male',
            address: '',
            age: '',
            date: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required!"),
            email: Yup.string().email().required("Required!"),
            sex: Yup.string().required("Required!"),
            address: Yup.string().required("Required!"),
            age: Yup.number().required("Required!"),
            date: Yup.date().default(() => new Date()).required("Required!"),
        })
    });
    console.log('formik',formik);
    return formik;
}
export default ValidateFrom;