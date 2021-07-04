import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Formik } from 'formik'
import { Button, TextField } from '@material-ui/core'

const InquiriesFormWrapper = styled.div`
  background: #fff;
  color: #000;
  font-size: 36px;
  line-height: 100px;
  position: relative;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  margin: 10px;
  padding: 25px;
  width: inherit;
  height: inherit;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
`
const InquiriesForm = ({ testimonial, image, name }) => {
  return (
    <InquiriesFormWrapper>
      <Formik
        initialValues={{ name: '', inquiryReason: '', email: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }

          console.log(values)

          if (!values.name) {
            errors.name = 'Required'
          }

          if (!values.inquiryReason) {
            errors.inquiryReason = 'Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="name"
              label="Your Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name && touched.name && errors.name ? true : false}
            />
            <TextField
              type="email"
              name="email"
              label="Your Email Address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={
                errors.email && touched.email && errors.email ? true : false
              }
            />

            <TextField
              type="text"
              name="inquiryReason"
              label="Your Inquiry"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.inquiryReason}
              multiline
              rows={4}
              error={
                errors.inquiryReason &&
                touched.inquiryReason &&
                errors.inquiryReason
                  ? true
                  : false
              }
            />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </StyledForm>
        )}
      </Formik>
    </InquiriesFormWrapper>
  )
}

InquiriesForm.propTypes = {}

InquiriesForm.defaultProps = {}

export default InquiriesForm
