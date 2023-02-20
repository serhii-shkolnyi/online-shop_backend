import Joi from 'joi';
import { commonValidator } from './common.validator';

export const userValidator = {
    registration: Joi.object({
        email: commonValidator.emailValidator.messages({
            'string.pattern.base': 'помилка з поштою',
        }),
        password: commonValidator.passwordValidator.messages({
            'string.min': 'пароль має бути мінімум 8 символів',
            'string.pattern.base': 'пароль повинен мати хочаб одну велику літеру, одну цифру та бути тільки з латиниці',
        }),
    }),
};
