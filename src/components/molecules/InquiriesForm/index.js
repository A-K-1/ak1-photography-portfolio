import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Formik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const StyledTextField = withStyles({
  root: {
    marginBottom: '20px',
    '& label.Mui-focused': {
      color: '#ffb380',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ffb380',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#ffb380',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffb380',
      },
    },
  },
})(TextField)

const StyledSubmitButton = withStyles(() => ({
  root: {
    '&:hover': {
      color: '#ffb380',
      backgroundColor: '#fff',
    },
  },
}))(Button)

const InquiriesFormWrapper = styled.div`
  background: ${(props) => props.theme.palette.white};
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
  align-items: center;
`

const InquiriesForm = () => {
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
            console.log(JSON.stringify(values, null, 2))
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
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledTextField
              type="text"
              name="name"
              label="Your Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name && touched.name && errors.name ? true : false}
              variant="outlined"
              required
              fullWidth
            />
            <StyledTextField
              type="email"
              name="email"
              label="Your Email Address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={
                errors.email && touched.email && errors.email ? true : false
              }
              variant="outlined"
              required
              fullWidth
            />

            <StyledTextField
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
              variant="outlined"
              required
              fullWidth
            />

            <StyledSubmitButton
              size="large"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </StyledSubmitButton>
          </StyledForm>
        )}
      </Formik>
    </InquiriesFormWrapper>
  )
}

InquiriesForm.propTypes = {}

InquiriesForm.defaultProps = {}

export default InquiriesForm
