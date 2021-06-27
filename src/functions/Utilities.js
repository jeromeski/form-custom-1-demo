import ValidationError from './ValidationError'
    
export function validateData(data) {
  const errors = []

  if (!data.fname) {
    errors.push(new ValidationError(ValidationError.ERROR_CODE_FIRST_NAME_MISSING, data.fname))
  }
  if (!data.lname) {
    errors.push(new ValidationError(ValidationError.ERROR_CODE_LAST_NAME_MISSING, data.lname))
  }
  if (!data.email) {
    errors.push(new ValidationError(ValidationError.ERROR_CODE_EMAIL_MISSING, data.email))
  }
  if (!data.pword) {
    errors.push(new ValidationError(ValidationError.ERROR_CODE_PASSWORD_MISSING, data.pword))
  }
  if (!data.pword2) {
    errors.push(new ValidationError(ValidationError.ERROR_CODE_PASSWORD2_MISSING, data.pword2))
  }

  return errors
}