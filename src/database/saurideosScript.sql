-- criando banco de dados
CREATE DATABASE Saurideos;

-- criando tabela de distrito
CREATE TABLE Distrito (
idDistrito int primary key auto_increment,
nome varchar(45)
);

-- inserindo dados na tabela distrito
INSERT INTO Distrito(nome) VALUES 
('Distrito Herbívoro'),
('Distrito Tiranossauro'),
('Distrito Carnívoro'),
('Distrito Velociraptor'),
('Distrito Aquático');

-- criando tabela de espécie
CREATE TABLE Especie (
idEspecie int primary key auto_increment,
nomeEspecie varchar(50),
nomeCientifico varchar(60),
dieta varchar(45)
)auto_increment = 1000;

-- inserindo dados na tabela de espécie
INSERT INTO Especie(nomeEspecie, nomeCientifico, dieta) VALUES
('Espinossauro', 'Spinossaurus', 'piscívoro'),
('Tiranossauro', 'Tyrannosaurus rex', 'carnívoro'),
('Braquiossauro', 'Brachiosaurus altithorax', 'herbívoro');

-- criando tabela de dinossauro
CREATE TABLE Dinossauro(
idDinossauro int auto_increment,
nome varchar(45),
saude int,
dtNascimento date,
fkEspecie int,
fkDistrito int,
CONSTRAINT fkEspecieDino FOREIGN KEY (fkEspecie) REFERENCES Especie(idEspecie),
CONSTRAINT fkDistritoDino FOREIGN KEY (fkDistrito) REFERENCES Distrito(idDistrito),
PRIMARY KEY(idDinossauro, fkEspecie)
);

-- inserindo dados na tabela de dinossauro
INSERT INTO Dinossauro (nome, saude, dtNascimento, fkEspecie, fkDistrito) VALUES
('Pietro', 80, '2019-06-14', 1000, 5),
('Oscar', 95, '2019-05-22', 1000, 5),
('Rexy', 68, '2018-07-04', 1001, 2),
('Abigail', 100,'2018-11-28', 1002, 1),
('Colosso', 100,'2018-11-30', 1002, 1);

SELECT count(idDinossauro) FROM Dinossauro;
select * from Dinossauro;

SELECT idDinossauro, nome,  Especie.nomeEspecie as Especie, Especie.dieta, saude FROM Dinossauro
JOIN Especie ON Dinossauro.fkEspecie = Especie.idEspecie
WHERE fkDistrito = 1;

SELECT Dinossauro.nome, Especie.nomeEspecie FROM Dinossauro 
JOIN Especie ON Dinossauro.fkEspecie = Especie.idEspecie;

SELECT Especie.nomeEspecie ,count(idDinossauro) as qtdEspecie FROM Dinossauro
JOIN Especie ON Dinossauro.fkEspecie = Especie.idEspecie
GROUP BY fkEspecie;

SELECT idEspecie, nomeEspecie FROM Especie;

-- criando tabela de usuário
CREATE TABLE Usuario (
idUsuario int primary key auto_increment,
nome varchar(60),
email varchar(255),
senha varchar(60),
fkEspecieFavorita int,
CONSTRAINT fkEspecieUsuario FOREIGN KEY (fkEspecieFavorita) REFERENCES Especie(idEspecie)
);

select * from Especie;
select * from Usuario;

SELECT nomeEspecie, nomeCientifico, dieta FROM Especie;
update Usuario set fkEspecieFavorita = 1000 WHERE idUsuario in(2,3,4); 

SELECT Especie.nomeEspecie FROM Especie JOIN Usuario ON Especie.idEspecie = Usuario.fkEspecieFavorita
WHERE idUsuario = 2;

-- criando tabela de publicacao
CREATE TABLE Publicacao (
	idPublicacao int auto_increment,
    conteudo varchar(255),
    dtHorarioPublicacao datetime,
    fkUsuario int,
    constraint fkUsuarioPublicacao foreign key (fkUsuario) references Usuario(idUsuario),
    primary key (idPublicacao, fkUsuario)
);

-- inserindo dados na tabela de publicação
INSERT INTO Publicacao(conteudo, dtHorarioPublicacao, fkUsuario) VALUES
('Bem-Vindos ao Sauridios!', now(), 1);

SELECT conteudo, dtHorarioPublicacao, Usuario.nome FROM Publicacao
JOIN Usuario ON Publicacao.fkUsuario = Usuario.idUsuario; 

-- Criando tabela de curiosidade
CREATE TABLE Curiosidade (
idCuriosidade int primary key auto_increment,
conteudo varchar(250)
);

select * from especie;

SELECT conteudo FROM Curiosidade;

-- Inserindo valores na tabela curiosidade
INSERT INTO Curiosidade (conteudo) VALUES
("Tiranossauro Rex significa Lagarto Rei Tirano, possuia 3 metros de altura, 12 de comprimento e pesava 5 toneladas"),
("O T-Rex é a grande estrela da franquia jurassic park, aparecendo em todos os filmes e sendo o grande vilão tanto do primeiro filme"),
("O Braquiossauro foi o primeiro dinossauro que apareceu nos filmes de jurassic park, ele tinha 20 metros de altura e andava em bandos"),
("O Espinossauro podia andar sobre as quatro patas ou apenas sobre as patas traseiras o que poderia dar mais velocidade a ele"),
("O Espinossauro é o grande vilão do terceiro filme e por ser tão marcante se tornou o mascote do Saurideo");