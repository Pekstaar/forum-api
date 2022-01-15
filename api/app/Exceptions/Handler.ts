import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error, ctx: HttpContextContract) {
    if (error === 'E_ROW_NOT_FOUND') {

      return ctx.response.notFound({ message: 'Resource not found' })

    }

    if (error === 'E_UNAUTHORIZED_ACCESS') {

      return ctx.response.unauthorized({ message: 'you are not Authenticated!' })

    }

    return super.handle(error, ctx)
  }
}

