const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findOrCreateCity = async (cityName) => {
    let city = await prisma.city.findFirst({
        where: {
            name: cityName,
        },
    });

    if (!city) {
        city = await prisma.city.create({
            data: {
                name: cityName,
            },
        });
    }

    return city;
};

module.exports = {
    findOrCreateCity,
};
