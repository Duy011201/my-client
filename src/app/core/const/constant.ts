export const CONST = {
  LIST_SKILL: 'Web developer, Mobile developer.',
  REG_EMAIL: '/^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/',
  MSG: {
    IS_VALID_EMAIL: 'Email không đúng định dạng',

    NOT_FOUND_DATA: 'Không tìm thấy dữ liệu!',
    NOT_FOUND_PAGE: 'Lỗi 404! Không tìm thấy trang web!',
    NOT_FOUND_EMAIL: 'Không tìm thấy email!',
    NOT_FOUND_PASSWORD: 'Không tìm thấy password!',
  },

  // url
  URL_AUTH: 'auth',
  URL_LOGIN: 'login',
  URL_REGISTER: 'register',
  URL_FORGOT_PASSWORD: 'forgot-password',
  URL_HOME: '',
  URL_USER: 'user',
  URL_BLOG: 'blog',
  URL_DASHBOARD: 'dashboard',
  URL_404: '**',
  URL_WORKFLOW: 'workflow',

  LOCALSTORAGE_TOKEN: localStorage.getItem('token'),
  LOCALSTORAGE_USER_ID: localStorage.getItem('user_id'),
  LOCALSTORAGE_INFO_USER: localStorage.getItem('user_info')
}
