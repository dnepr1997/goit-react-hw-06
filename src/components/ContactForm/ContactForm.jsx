import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string()
    .min(3, 'Number is too short!')
    .max(50, 'Number is too long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};
export const ContactForm = ({ onAdd }) => {
  const textId = useId();
  const numberId = useId();
  const hendleSubmit = (values, actions) => {
    console.log(values);
    onAdd({ ...values });
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={hendleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label htmlFor={textId}>Name</label>
        <Field type="text" name="name" id={textId} />
        <ErrorMessage className={css.error} name="name" as="span" />

        <label htmlFor={numberId}>Number</label>
        <Field type="text" name="number" id={numberId} />
        <ErrorMessage className={css.error} name="number" as="span" />

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
