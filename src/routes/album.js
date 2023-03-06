const express = require('express');
const router = express.Router();
const controllers = require('../controllers/album');

/**
 * @swagger
 * /artists/{artistId}/albums:
 *  post:
 *      tags:
 *          - albums
 *      description: Create new album
 *      consumes:
 *          - application/json
 *      parameters:
 *        - in: path
 *          name: artistId
 *          schema:
 *              type: number
 *          required: true
 *          description: number id of artist to add album
 *        - in: body
 *          name: album
 *          description: The album to update
 *          schema:
 *              type: object
 *              required:
 *                - name
 *              properties:
 *                  name:
 *                      type: string
 *                  year:
 *                      type: number
 *
 *      responses:
 *          201:
 *              description: Album created
 */
router.post('/artists/:id/albums', controllers.createAlbum);

/**
 * @swagger
 * /albums:
 *  get:
 *      tags:
 *          - albums
 *      description: Get all albums
 *      responses:
 *          200:
 *              description: All albums were retrieved
 */
router.get('/albums', controllers.readAlbum);

/**
 * @swagger
 * /albums/{albumId}:
 *  get:
 *      tags:
 *          - albums
 *      description: Get album with id
 *      parameters:
 *        - in: path
 *          name: albumId
 *          schema:
 *              type: number
 *          required: true
 *          description: number id of album to retrieve
 *      responses:
 *          200:
 *              description: Album that was retrieved
 *          404:
 *              description: Album is not found
 */
router.get('/albums/:id', controllers.readSingleAlbum);

/**
 * @swagger
 * /albums/{albumId}:
 *  put:
 *      tags:
 *          - albums
 *      description: Update all attributes of album
 *      consumes:
 *          - application/json
 *      parameters:
 *        - in: path
 *          name: albumId
 *          schema:
 *              type: number
 *          required: true
 *          description: number id of album to update
 *        - in: body
 *          name: album
 *          description: The album to update
 *          schema:
 *              type: object
 *              required:
 *                - name
 *              properties:
 *                  name:
 *                      type: string
 *                  year:
 *                      type: number
 *                  artistid:
 *                      type: number
 *      responses:
 *          200:
 *              description: Album updated
 *          404:
 *              description: Album is not found
 */
router.put('/albums/:id', controllers.updateAlbum);

/**
 * @swagger
 * /albums/{albumId}:
 *  patch:
 *      tags:
 *          - albums
 *      description: Update any attributes of album
 *      consumes:
 *          - application/json
 *      parameters:
 *        - in: path
 *          name: albumId
 *          schema:
 *              type: number
 *          required: true
 *          description: number id of album to patch
 *        - in: body
 *          name: album
 *          description: The album to patch
 *          schema:
 *              type: object
 *              required:
 *                - name
 *              properties:
 *                  name:
 *                      type: string
 *                  year:
 *                      type: number
 *      responses:
 *          200:
 *              description: Album patched
 *          404:
 *              description: Album is not found
 */
router.patch('/albums/:id', controllers.patchAlbum);

/**
 * @swagger
 * /albums/{albumId}:
 *  delete:
 *      tags:
 *          - albums
 *      description: Delete album
 *      parameters:
 *        - in: path
 *          name: albumId
 *          schema:
 *              type: number
 *          required: true
 *          description: number id of album to delete
 *      responses:
 *          200:
 *              description: Album that was deleted
 *          404:
 *              description: Album is not found
 */
router.delete('/albums/:id', controllers.deleteAlbum);

module.exports = router;
