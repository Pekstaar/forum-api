import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Thread from 'App/Models/Thread'
import ThreadValidator from 'App/Validators/ThreadValidator'
import UPdateThreadValidator from 'App/Validators/UpdateThreadValidator';

export default class ThreadsController {

  // get all threads
  public async index() {
    const threads = await Thread.query()
      .preload('user')
      .preload('category')

    return threads;
  }

  // create thread
  public async store({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(ThreadValidator)

    try {
      const thread = await auth.user?.related('threads').create(validatedData)

      await thread?.preload('user')
      await thread?.preload('category')

      return thread;
    } catch (err) {
      response.status(500).send(err.message);
    }



  }

  // fetch threads:
  public async show({ params, response }: HttpContextContract) {
    try {

      const thread = await Thread.query()
        .where('id', params.id)
        .preload('user')
        .preload('category')
        .firstOrFail()

      return thread;

    } catch (error) {
      response.status(500).send(error.message);
    }
  }

  // update Thread
  public async update({ request, params }: HttpContextContract) {

    const thread = await Thread.findOrFail(params.id)

    const validatedData = await request.validate(UPdateThreadValidator)

    thread.merge(validatedData)

    await thread.save()

    await thread.preload('user')
    await thread.preload('category')

    return thread;
  }

}
