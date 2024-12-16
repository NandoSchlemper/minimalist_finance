Reestruturação da Aplicação:

4 Layer
--> Based on: Domain-Driven + Ports & Adapters // Hexagonal Arquitecture

1. Application   Serviços da aplicação (casos de uso, coordenadores de fluxo)
--> services/   
--> ports/   Interfaces de entrada e saída
index.ts

2. Domain   Entidades, Regras de negocio e Validações
--> entities/
--> value-objects/
--> repositories/

3. Infraestructure   Integrações externas e implementações especificas
--> database/
--> server/
----> trpc/
------> routers/
--> config/

4. Adapters   Driving + Driven adapters (interfaces gerais)
--> controllers/
--> mappers/
--> dtos/

main.ts --> ponto de entrada para inicializar a aplicação

--- 

ports --> Interfaces
services --> abstração para a lógica
repository --> Lógica