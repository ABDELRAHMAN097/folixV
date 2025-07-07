import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('بريد غير صحيح').required('البريد مطلوب'),
  password: Yup.string().min(6, 'كلمة السر قصيرة').required('كلمة السر مطلوبة'),
});