

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('auth/register', 'AuthController.register')

  Route.post('auth/login', 'AuthController.login')


  Route.post('threads', 'ThreadsController.store').middleware('auth')

  Route.get('threads/:id', 'ThreadsController.show')

  Route.get('threads', 'ThreadsController.index')

  Route.patch('threads/:id', 'ThreadsController.update')

  Route.delete('threads:id', 'ThreadsController.destroy')

}).prefix('api')
