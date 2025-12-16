const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const username = 'admin_secure';
  const password = 'School_Website_2025!';
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    console.log('Seeding admin user...');

    // Upsert the admin user
    const user = await prisma.users.upsert({
      where: { username: username },
      update: {
        password: hashedPassword,
        role: 'ADMIN',
      },
      create: {
        username: username,
        email: 'admin@school.com',
        password: hashedPassword,
        role: 'ADMIN',
        created_at: new Date(),
      },
    });

    console.log('Admin user ensured:', user.username);
  } catch (e) {
    console.error('Error seeding admin:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
