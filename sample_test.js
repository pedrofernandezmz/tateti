Feature('Prueba');

Scenario('Preparar Tests', async ({ I }) => {
    I.amOnPage('https://frontend-g4uf37rhhq-rj.a.run.app/');
    I.wait(3);
    const numberOfElements = await I.grabNumberOfVisibleElements('.bg-zinc-300');
    if (numberOfElements > 0) {
        I.click('.bg-zinc-300');
    } else {
        console.log('Botón no encontrado. Continuando normalmente...');
    }
});

Scenario('Jugar - Ganador X/O/Empate', ({ I }) => {
  I.amOnPage('https://frontend-g4uf37rhhq-rj.a.run.app/');
//Ganador X
  I.click('.border:nth-child(1)');
  I.click('.border:nth-child(2)');
  I.click('.flex:nth-child(5)');
  I.click('.flex:nth-child(6)');
  I.click('.flex:nth-child(9)');
  I.click('.p-3');
//Ganador O
  I.click('.border:nth-child(1)');
  I.click('.border:nth-child(2)');
  I.click('.border:nth-child(3)');
  I.click('.flex:nth-child(5)');
  I.click('.flex:nth-child(6)');
  I.click('.flex:nth-child(8)');
  I.click('.fill-white');
//Empate
  I.click('.border:nth-child(1)');
  I.click('.border:nth-child(2)');
  I.click('.border:nth-child(3)');
  I.click('.flex:nth-child(9)');
  I.click('.flex:nth-child(8)');
  I.click('.flex:nth-child(7)');
  I.click('.flex:nth-child(4)');
  I.click('.flex:nth-child(5)');
  I.click('.flex:nth-child(6)');
  I.click('.p-3');
});

Scenario('Comprobar Resultados / Reinicio', ({ I }) => {
    I.amOnPage('https://frontend-g4uf37rhhq-rj.a.run.app/');
    I.wait(2);
    I.see('33.3%');
// Reinicar Resultados
    I.click('.bg-zinc-300');
    I.wait(2);
    I.see('empates: 0');
    I.see('0 ganadas');
  });
