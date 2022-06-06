```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```
```
SELECT* FROM Actor;
SELECT id, name from Actor WHERE gender = "male"
```


b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%" ) AND salary > 350000
```

c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.*

```
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR "%G%" ) ;
```

d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

```
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR "%g%" OR NAME LIKE"%A%" OR "%a%") 
AND salary BETWEEN 350000 AND 900000;
```

a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.


Crie 4 filmes com as seguintes informações: 
```
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "002",
  ``` 

exercicio 5
a) Retorne o id, título e avaliação a partir de um id específico;
```
SELECT id, nome,avaliacao FROM Filmes
WHERE id=3;
```

b) Retorne um filme a partir de um nome específico;
```
SELECT * FROM Filmes
WHERE nome="Doce de mãe";
```

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7

```
SELECT id, nome,sinopse  FROM Filmes
WHERE avaliacao <= 7;
```

Exercício 7

a) Retorna um filme cujo título contenha a palavra `vida`
```
SELECT * FROM Filmes
WHERE title LIKE "%vida%";
```

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

```
SELECT * FROM Filmes
WHERE nome LIKE "%doce%" OR
 sinopse LIKE "%doce%";
 ```

c) Procure por todos os filmes que já tenham lançado

```
SELECT * FROM Filmes
WHERE data_lancamento > "2000-01-01";
```

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.




```
SELECT * FROM Filmes
WHERE data_lancamento > "2000-01-01" AND nome LIKE "%doce%" OR
 sinopse LIKE "%doce%" AND avaliacao < CURDATE() ;
 ```