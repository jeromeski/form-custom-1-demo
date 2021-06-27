class ValidationError {
  static ERROR_CODE_FIRST_NAME_MISSING = 4100;
  static ERROR_CODE_LAST_NAME_MISSING = 4200;
  static ERROR_CODE_EMAIL_MISSING = 4300;
  static ERROR_CODE_PASSWORD_MISSING = 4400;
  static ERROR_CODE_PASSWORD2_MISSING = 4500;

  static defaultErrorMessageMap = {
    [ValidationError.ERROR_CODE_FIRST_NAME_MISSING]: 'Missing required data: first name',
    [ValidationError.ERROR_CODE_LAST_NAME_MISSING]: 'Missing required data: last name',
    [ValidationError.ERROR_CODE_EMAIL_MISSING]: 'Missing required data: email',
    [ValidationError.ERROR_CODE_PASSWORD_MISSING]: 'Missing required data: password',
    [ValidationError.ERROR_CODE_PASSWORD2_MISSING]: 'Missing required data: confirm password',
  }

  constructor(
    errorCode, 
    errorData, 
    errorMessage = ValidationError.defaultErrorMessageMap[errorCode]
    ) {
    this.errorCode = errorCode
    this.errorData = errorData
    this.errorMessage = errorMessage
    }
}

export default ValidationError;