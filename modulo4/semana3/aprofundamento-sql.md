### Exercicio 1

a) vai apagr a coluna de salario

```sql
    ALTER TABLE Actor DROP COLUMN salary;
```

b)vai mudar o campo de genero para sexo;

```sql
   ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

c) vai alterar o campo de genero para um VARCHAR DE 255 CARACTERES

```sql
    ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

d) _Agora, altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres_

- Dicas

  d)

  ```sql
  ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
  ```

  ### Exercicio 2

  a) _Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`_

  ```
  UPDATE Actor
  SET name = "Michael Douglas",birth_date="1993-11-16", gender="male"
  WHERE id = "003"
  ```

b) _Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior._

```
  UPDATE Actor
  SET name=  UPPER(name)
  WHERE id = "005"
```

```
  UPDATE Actor
  SET name=  lower(name)
  WHERE id = "005"
```

c) _Escreva uma query que atualize todas as informações do ator com o id `005`_

d) _Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, 
anote e explique o resultado._

```
  UPDATE Actor
  SET name="Nastia", salary=500000, birth_date="1996-04-05",gender="female",filhos="tres"
  WHERE id = "00

  ```
  ```
  09:15:01	UPDATE Actor SET name="Nastia", salary=500000, birth_date="1996-04-05",gender="female",filhos="tres" WHERE id = "005"	Error Code: 1054. Unknown column 'filhos' in 'field list'	0,205 sec
 ```

 ```
 A Query retorna o erro 1054, que significa que o busca que esta tentando ser alterado nao existe, logo nao eh possivel alterar o mesmo.
 ```

 ### Exercício 3
 a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*

 ```
    DELETE FROM Actor WHERE id="007";
    ```


b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*
```
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary <1000000
  ```

  ### Exercicio 4
  a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*
  ```
      SELECT MAX(salary) FROM Actor;
  ```
b) *Escreva uma query que pegue o menor salário das atrizes*
```
    SELECT MIN(salary) FROM Actor WHERE gender="female";
 ```

c) *Escreva uma query que pegue a quantidade de atrizes*

```
    SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d) *Escreva uma query que pegue a soma de todos os salários*
```
    SELECT SUM(salary) FROM Actor WHERE gender="female";

```
### Exercicio 5 
a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*
```
    SELECT id, name FROM Actor
    ORDER BY name DESC;
```
b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*

```
    SELECT id, name FROM Actor
    ORDER BY name DESC;
```
c) *Faça uma query que retorne todos os atores ordenados pelo salário*
```
     SELECT id,name FROM Actor  ORDER BY name DESC;
```
d) *Faça uma query que retorne os atores com os três maiores salarios*
```
    SELECT * FROM Actor
    ORDER BY salary;
```
e) *Faça uma query que retorne a média de salário por gênero*

```
    SELECT AVG(salary), gender FROM Actor
    GROUP BY gender;
```