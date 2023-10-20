-- Crea la tabla "contador"
CREATE TABLE contador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ganador_X INT DEFAULT 0,
    ganador_O INT DEFAULT 0,
    empate INT DEFAULT 0
);

-- Inserta un registro inicial con valores 0 en la tabla "contador"
INSERT INTO contador (ganador_X, ganador_O, empate) VALUES (0, 0, 0);
