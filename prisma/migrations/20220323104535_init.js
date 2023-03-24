module.exports = {
  async up({ context: { prisma } }) {
    await prisma.$executeRaw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await prisma.$executeRaw(`
      CREATE TABLE "City" (
        "id"          SERIAL PRIMARY KEY,
        "name"        TEXT NOT NULL,
        "temperature" REAL,
        "feelsLike"   REAL,
        "humidity"    INTEGER,
        "pressure"    INTEGER,
        "description" TEXT
      );
    `);
  },
  async down({ context: { prisma } }) {
    await prisma.$executeRaw('DROP TABLE "City";');
  },
};
