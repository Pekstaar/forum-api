import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Thread from 'App/Models/Thread'
import ThreadValidator from 'App/Validators/ThreadValidator'
import UPdateThreadValidator from 'App/Validators/UpdateThreadValidator';

export default class ThreadsController {

  // get all threads
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)

    const perPage = request.input('per_page', 25)

    const userId = request.input('user_id')

    const categoryId = request.input('category_id')


    const threads = await Thread.query()
      .if(userId, (query) =>
        query.where('user_id', userId)
      )
      .if(categoryId, (query) =>
        query.where('category_id', categoryId)
      )
      .preload('user')
      .preload('category')
      .preload('replies')
      .paginate(page, perPage)

    return threads;
  }

  // create thread
  public async store({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(ThreadValidator)

    try {
      const thread = await auth.user?.related('threads').create(validatedData)

      await thread?.preload('user')
      await thread?.preload('category')
      await thread?.preload('replies')

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
        .preload('replies')
        .firstOrFail()

      return thread;

    } catch (error) {
      response.status(500).send(error.message);
    }
  }

  // update Thread
  public async update({ request, params, response }: HttpContextContract) {

    try {
      const thread = await Thread.findOrFail(params.id)

      const validatedData = await request.validate(UPdateThreadValidator)

      thread.merge(validatedData)

      await thread.save()

      await thread.preload('user')
      await thread.preload('category')
      await thread.preload('replies')

      return thread;

    } catch (error) {

      response.status(500).send(error.message)

    }

  }

  // delete Thread
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const thread = await Thread.findOrFail(params.id)

      await thread.delete()

      return "Thread Deleted Successfully!"
    } catch (error) {
      response.status(500).send(error.message)

    }

  }
}
