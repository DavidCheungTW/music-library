const express = require('express');
const router = express.Router();
const {
  createAlbum,
  getArtistAlbums,
  readAlbum,
  readSingleAlbum,
  updateAlbum,
  patchAlbum,
  deleteAlbum,
} = require('../controllers/album');

// Adding the multer middleware to the album router:
const upload = require('../middleware/upload');

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
router
  .route('/artists/:id/albums')
  .post(upload.single('cover_image'), createAlbum)
  .get(getArtistAlbums);

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
router.route('/albums').get(readAlbum);

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
router
  .route('/albums/:id')
  .get(readSingleAlbum)
  .put(updateAlbum)
  .patch(patchAlbum)
  .delete(deleteAlbum);

module.exports = router;
