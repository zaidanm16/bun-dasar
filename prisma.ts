import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
  data: {
    name: "Muhammad Zaidan",
    email: "zaidanmz@example.com",
    phone: "089999999999",
  },
});

console.info(contact);
