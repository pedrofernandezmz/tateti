const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app.js');
const expect = chai.expect;

chai.use(chaiHttp);

// Cambio el puerto para probar.
const PORT = 8081;

describe('Pruebas unitarias para la aplicación', () => {
  let server;

  before((done) => {
    server = app.listen(PORT, () => {
      console.log(`Aplicación en el puerto ${PORT}`);
      done();
    });
  });

  after((done) => {
    server.close(() => {
      console.log(`Aplicación detenida`);
      done();
    });
  });

  it('Debería registrar un resultado ganador X', (done) => {
    chai.request(app)
      .get('/registrar-resultado?ganador=X')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Contador de ganador X actualizado');
        done();
      });
  });

  it('Debería registrar un resultado ganador O', (done) => {
    chai.request(app)
      .get('/registrar-resultado?ganador=O')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Contador de ganador O actualizado');
        done();
      });
  });

  it('Debería registrar un resultado empate', (done) => {
    chai.request(app)
      .get('/registrar-resultado?ganador=Empate')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Contador de empate actualizado');
        done();
      });
  });

  it('Debería obtener resultados', (done) => {
    chai.request(app)
      .get('/obtener-resultados')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('ganador_X');
        expect(res.body).to.have.property('ganador_O');
        expect(res.body).to.have.property('empate');
        done();
      });
  });

  it('Debería reiniciar resultados', (done) => {
    chai.request(app)
      .post('/reiniciar-resultados')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Resultados reiniciados');
        done();
      });
  });
});
