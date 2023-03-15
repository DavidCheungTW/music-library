const { expect } = require('chai');

const request = require('supertest');

const db = require('../src/db');

const app = require('../src/app');

const { json } = require('express');

// mock
// const controllers = require('../src/controllers/album');
// const { createAlbum } = require('../src/controllers/album');
// const uploadFile = require('../src/utils/upload-file');
// const sinon = require('sinon');

describe('create album', () => {
  let artistid;
  beforeEach(async () => {
    const { status, body } = await request(app)
      .post('/artists')
      .send({ name: 'Tame Impala', genre: 'rock' });

    expect(status).to.equal(201);
    expect(body.name).to.equal('Tame Impala');
    expect(body.genre).to.equal('rock');
    artistid = body.id;
  });

  describe('/albums', () => {
    describe('POST', () => {
      //mock
      // let sandbox;
      // before(() => {
      //   sandbox = sinon.sandbox.create();
      // });
      // after(() => {
      //   sandbox.restore();
      // });

      it('creates a new album in the database', async () => {
        // mock
        //sinon.stub(createAlbum).returns({ status: 201 });

        // const createAlbumStub = sandbox.stub().returns({ status: 201 });
        // require.cache[require.resolve('../src/controllers/album')] = {
        //   exports: { createAlbumStub },
        // };
        // const { createAlbum } = require('../src/controllers/album');

        // const aStub = sinon.stub(uploadFile).returns();
        // console.log('>>>>>> typeof >>>>>>', aStub);
        // sinon
        //   .mock(uploadFile)
        //   .returns(
        //     'https://music-library-dav-oct22.s3.eu-west-2.amazonaws.com/486baa93-ea2d-4f07-aca9-1786bd37bd3f'
        //   );

        // sinon.stub(controllers, createAlbum).resolves({ status: 201 });
        // sinon.mock(controllers).expects('createAlbum').returns({ status: 201 });
        // sandbox.stub(controllers, createAlbum).resolves('');

        // console.log('>>>>>> typeof>>>>>>>', typeof controllers);
        // console.log('>>>>>> typeof>>>>>>>', typeof createAlbum);
        // const aStub = sinon.stub(controllers, 'createAlbum');

        // aStub.returns('');

        const { status, body } = await request(app)
          .post(`/artists/${artistid}/albums`)
          .send({ name: 'Tame Impala Album', year: 1997 });

        expect(status).to.equal(201);
        // expect(body.name).to.equal('Tame Impala Album');
        // expect(body.year).to.equal(1997);

        // const {
        //   rows: [albumData],
        // } = await db.query(`SELECT * FROM album WHERE id = ${body.id}`);
        // expect(albumData.name).to.equal('Tame Impala Album');
        // expect(albumData.year).to.equal(1997);
      });
    });
  });
});
