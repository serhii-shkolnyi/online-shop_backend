import Joi from 'joi';

import { regexConfig } from '../config';

export const commonValidator = {
    emailValidator: Joi.string().required().regex(regexConfig.EMAIL).trim(),
    passwordValidator: Joi.string().required().min(8).regex(regexConfig.PASSWORD)
        .trim(),
};
