import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";


const ValidateFrom = (data) =>{
    const formik = useFormik({
        initialValues: {
            id : data.id,
            name : data.name,
            email: data.email,
            sex: 'Male',
            address: data.address,
            age: data.age,
            date: moment(data.date).format('YYYY-MM-DD'),
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
    console.log(formik.values);
    return formik;
}
export default ValidateFrom;