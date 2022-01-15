

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('auth/register', 'AuthController.register')

  Route.post('auth/login', 'AuthController.login')


  Route.resource('threads', 'ThreadsController').apiOnly().middleware({
    store: 'auth',
    update: 'auth',
    destroy: "auth"
  })


  Route.resource("threads.replies", 'RepliesController').only(['store']).middleware({ store: 'auth' })

}).prefix('api')
