// server.js
const fastify = require('fastify')({ logger: true });

// Banco de dados em memória (Simulação)
let drivers = [
  { id: 1, name: 'Max Verstappen', team: 'Red Bull Racing' },
  { id: 2, name: 'Lewis Hamilton', team: 'Mercedes' },
  { id: 3, name: 'Lando Norris', team: 'McLaren' }
];

// READ: Obter todos os pilotos
fastify.get('/drivers', async (request, reply) => {
  return reply.code(200).send(drivers);
});

// READ: Obter um piloto específico por ID
fastify.get('/drivers/:id', async (request, reply) => {
  const id = parseInt(request.params.id);
  const driver = drivers.find(d => d.id === id);
  
  if (!driver) {
    return reply.code(404).send({ message: 'Piloto não encontrado' });
  }
  
  return reply.code(200).send(driver);
});

// CREATE: Adicionar um novo piloto
fastify.post('/drivers', async (request, reply) => {
  const { name, team } = request.body;
  
  if (!name || !team) {
    return reply.code(400).send({ message: 'Nome e equipe são obrigatórios' });
  }

  const newDriver = {
    id: drivers.length > 0 ? drivers[drivers.length - 1].id + 1 : 1,
    name,
    team
  };
  
  drivers.push(newDriver);
  return reply.code(201).send(newDriver);
});

// UPDATE: Atualizar dados de um piloto existente
fastify.put('/drivers/:id', async (request, reply) => {
  const id = parseInt(request.params.id);
  const { name, team } = request.body;
  const driverIndex = drivers.findIndex(d => d.id === id);

  if (driverIndex === -1) {
    return reply.code(404).send({ message: 'Piloto não encontrado' });
  }

  drivers[driverIndex] = { 
    id, 
    name: name || drivers[driverIndex].name, 
    team: team || drivers[driverIndex].team 
  };

  return reply.code(200).send(drivers[driverIndex]);
});

// DELETE: Remover um piloto
fastify.delete('/drivers/:id', async (request, reply) => {
  const id = parseInt(request.params.id);
  const driverIndex = drivers.findIndex(d => d.id === id);

  if (driverIndex === -1) {
    return reply.code(404).send({ message: 'Piloto não encontrado' });
  }

  drivers.splice(driverIndex, 1);
  return reply.code(204).send(); // 204 No Content
});

// Inicialização do Servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3333 });
    console.log('🏁 Servidor Fastify rodando na porta 3333');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();