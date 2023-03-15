const express = require('express');
const router = express.Router();
const {
  createArtist,
  readArtist,
  readSingleArtist,
  updateArtist,
  patchArtist,
  deleteArtist,
} = require('../controllers/artist');

// $$$ my solution $$$
// router.post('/artists', (req, res) => {
//   artistController(req, res);
// });
// router.post('/artists', artistController);
// module.exports = router;

/**
 * @swagger
 * /artists:
 *  post:
 *      tags:
 *          - artists
 *      description: Create new artist
 *      consumes:
 *          - application/json
 *      parameters:
 *        - in: body
 *          name: artist
 *          description: The artist to create
 *          schema:
 *              type: object
 *              required:
 *                - name
 *              properties:
 *                  name:
 *                      type: string
 *                  genre:
 *                      type: string
 *      responses:
 *          201:
 *              description: Artist created
 *  get:
 *      tags:
 *          - artists
 *      description: Get all artists
 *      responses:
 *          200:
 *              description: All artists were retrieved
 */
router.route('/artists').post(createArtist).get(readArtist);

/**
 * @swagger
 * /artists/{artistId}:
 *  get:
 *      tags:
 *          - artists
 *      description: Get artist with id
 *      parameters:
 *        - in: path
 *          name: artistId
 *          schema:
 *              type: number
 *          required: true
 *          description: number id of artist to retrieve
 *      responses:
 *          200:
 *              description: Artist that was retrieved
 *          404:
 *              description: Artist is not found
 *  put:
 *      tags:
 *          - artists
 *      description: Update all attributes of artist
 *      consumes:
 *          - application/json
 *      parameters:
 *        - in: path
 *          name: artistId
 *          schema:
 *              type: number
 *          required: true
 *          description: number id of artist to update
 *        - in: body
 *          name: artist
 *          description: The artist to update
 *          schema:
 *              type: object
 *              required:
 *                - name
 *              properties:
 *                  name:
 *                      type: string
 *                  genre:
 *                      type: string
 *      responses:
 *          200:
 *              description: Artist updated
 *          404:
 *              description: Artist is not found
 *  patch:
 *      tags:
 *          - artists
 *      description: Update any attributes of artist
 *      consumes:
 *          - application/json
 *      parameters:
 *        - in: path
 *          name: artistId
 *          schema:
 *              type: number
 *          required: true
 *          description: number id of artist to patch
 *        - in: body
 *          name: artist
 *          description: The artist to patch
 *          schema:
 *              type: object
 *              required:
 *                - name
 *              properties:
 *                  name:
 *                      type: string
 *                  genre:
 *                      type: string
 *      responses:
 *          200:
 *              description: Artist patched
 *          404:
 *              description: Artist is not found
 *  delete:
 *      tags:
 *          - artists
 *      description: Delete artist
 *      parameters:
 *        - in: path
 *          name: artistId
 *          schema:
 *              type: number
 *          required: true
 *          description: number id of artist to delete
 *      responses:
 *          200:
 *              description: Artist that was deleted
 *          404:
 *              description: Artist is not found
 */
router
  .route('/artists/:id')
  .get(readSingleArtist)
  .put(updateArtist)
  .patch(patchArtist)
  .delete(deleteArtist);

module.exports = router;
