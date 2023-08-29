## Finalizando CRUD

- CRUD de pessoas e contatos utilizando spring boot no back-end
- Front-end para consumir a api desenvolvido em Angular

### Database script
```
    CREATE DATABASE IF NOT EXISTS `api`;
    USE `api`;

    CREATE DATABASE IF NOT EXISTS `api_test`;
    USE `api_test`;

    CREATE TABLE IF NOT EXISTS `person` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `cpf` varchar(255) NOT NULL,
    `date_birth` date DEFAULT NULL,
    `name` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_ovihp2p82c97wbe60mv11txrj` (`cpf`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=UTF8MB4_GENERAL_CI;

    CREATE TABLE IF NOT EXISTS `contact` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) NOT NULL,
    `name` varchar(255) DEFAULT NULL,
    `phone` varchar(255) DEFAULT NULL,
    `person_id` bigint(20) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_gnqwbwwcn7x0m5jlt4158dass` (`email`),
    KEY `FKjbcdaayhsa4dhcuc5q0kkw8et` (`person_id`),
    CONSTRAINT `FKjbcdaayhsa4dhcuc5q0kkw8et` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=UTF8MB4_GENERAL_CI;

    INSERT INTO person VALUES (1, '688.424.400-35', '2012-09-12', 'Jean Soares');
    INSERT INTO person VALUES (2, '839.394.340-00', '2011-09-12', 'Cassia Silva');
    INSERT INTO person VALUES (3, '966.981.840-04', '2010-09-12', 'Ricardo almeida');
    INSERT INTO person VALUES (4, '867.076.660-45', '2009-09-12', 'Vinicius almeida');

    INSERT INTO contact VALUES (1, 'empresa@gmail.com', 'Empresa 1', '(44) 99999-9999', 1);
    INSERT INTO contact VALUES (2, 'empresa2@gmail.com', 'Empresa 2', '(44) 99999-9998', 2);
    INSERT INTO contact VALUES (3, 'empresa3@gmail.com', 'Empresa 3', '(44) 99999-9997', 3);
    INSERT INTO contact VALUES (4, 'empresa4@gmail.com', 'Empresa 4', '(44) 99999-9996', 4);
```

### Passos
 - Inicie o projeto back-end spring
 - Inicie o projeto front-end angular
 ```
    npm install
    ng serve --open
 ```

### Collection postman para testes
Acesse a collection [aqui](https://www.postman.com/winter-comet-282388/workspace/person)
