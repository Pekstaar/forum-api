import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new UnauthorizedExeptionException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class UnauthorizedExeption extends Exception {
  constructor(message: string) {

    super(message, 403)

  }

  public async handle(error: this, { response }: HttpContextContract) {

    return response.forbidden({ message: error.message });

  }
}
