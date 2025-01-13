import { useState } from "react";

export const useForm = ()=>{
    const [formData, setFormData]= useState({userName:"", email:"", password:""});

    const handleChange = (e)=>{
        const {id, value}= e?.target;
        setFormData({...formData, [id]:value});
    }

    return {formData, handleChange}
}