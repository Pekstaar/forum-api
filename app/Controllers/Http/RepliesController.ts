import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Thread from 'App/Models/Thread'
import ReplyValidator from 'App/Validators/ReplyValidator'

export default class RepliesController {
  public async store({ request, params, auth, response }: HttpContextContract) {
    const { content } = await request.validate(ReplyValidator)

    try {
      const thread = await Thread.findOrFail(params.threadId)

      const reply = await thread.related('replies').create({
        userId: auth.user?.id,
        content
      })

      await reply.preload('user')
      await reply.preload('thread')

      return reply;

    } catch (error) {

      response.status(500).send(error.message)

    }

  }
}
