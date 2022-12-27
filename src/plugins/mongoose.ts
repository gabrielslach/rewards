import fp from 'fastify-plugin'
import { plugin as mongoosePlugin } from 'fastify-mongoose-driver'

import user from '../models/user'
import appointment from '../models/appointment'

/**
 * This plugins loads the mongoose apis
 *
 */
export default fp(async (fastify) => {
  const settings = {
    useNewUrlParser: true,
    config: {
      autoIndex: true,
    },
  }
  
  const models = [
    user,
    appointment
  ]

  fastify.register(mongoosePlugin, {
    uri: "", //TODO add environment variables
    settings,
    useNameAndAlias: true,
    models
  })
})
