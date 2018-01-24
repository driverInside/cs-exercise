/**
 * controllers/spotify.js
 *
 * @description :: Describe the 'spotify' logic
 * @docs        :: spotify api docs: https://developer.spotify.com/web-api/user-guide/
 */
const rp = require('request-promise')

const RequestModel = require('../models/requests')

const { spotifyClientSecret, spotifyClientID } = require('../config')
const baseURI = 'https://api.spotify.com/v1/search'

module.exports = {
  /**
   * get
   *
   * @description: Request a search to spotify API
   *               @route: GET api/spotify
   * @param {Obj} ctx Koa context.
   */
  get: async (ctx, next) => {
    const tokenUri = 'https://accounts.spotify.com/api/token'
    const authString = new Buffer(spotifyClientID + ':' + spotifyClientSecret)

    try {
      const q = ctx.query.q

      if (!q || ctx.query.q === '') {
        ctx.status = 404
        ctx.body = {
          success: false,
          error: 'no query provided.'
        }
        return
      }

      let types = Object.keys(ctx.query)
      types.splice(types.indexOf('q'), 1)

      if (types.indexOf('track') < 0) {
        types.push('track')
      }

      let uri = baseURI + '?q=' + q

      uri += (types.length > 0)? '&type=' + encodeURIComponent(types): ''
      uri += '&limit=5'
      // TODO: separate in another fn.
      const tokenOpts = {
        method: 'POST',
        uri: tokenUri,
        form: {
          'grant_type': 'client_credentials'
        },
        headers: {
          'Authorization': 'Basic ' + authString.toString('base64')
        }
      }

      const tokenResponse = await rp(tokenOpts)
      const spotifyToken = JSON.parse(tokenResponse)

      const opts = {
        uri: uri,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + spotifyToken.access_token
        },
        json: true
      }

      const data = await rp(opts)

      ctx.body = { success: true, data: data }

      await next().then(() => {
        // TODO: save the request
        const requestData = {
          url: uri,
          request: JSON.stringify(opts),
          response: JSON.stringify(data)
        }
        const request = new RequestModel(requestData)
        console.log(request)
        request.save()
          .then(result => {
            console.log('saved...' + requestData)
          }).catch(err => {
            console.error('---------', err)
          })
        // Promise.resolve(request.save()).then(result => {console.log('saving...' + requestData)})
        
        
      })
    } catch (e) {
      console.error('=> Error: get ', e)
      return ctx.throw(500, 'Internal server error')
    }     
  }
}
