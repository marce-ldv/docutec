import * as yup from 'yup';

export const schema = yup.object().shape({
	name: yup.string().required('El campo nombre es requerido'),
	email: yup.string().email().required('El campo email es requerido'),
});