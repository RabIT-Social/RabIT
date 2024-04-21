import { faker } from "@faker-js/faker";
import { createId } from "@paralleldrive/cuid2";
import type { Profile } from "@prisma/client";


export const createUserProfile = ({
    id = createId(),
    bio = '',
    subscriptionCost = 0,
    userId = createId(),
    mediaId = createId(),
    createdAt = new Date(),
    updatedAt = new Date(),
} ={}): Profile => ({
    id,
    bio,
    subscriptionCost,
    userId,
    mediaId,
    createdAt,
    updatedAt
});


export const createPopulatedUserProfile = ({
    id = createId(),
    bio = faker.lorem.sentence(),
    subscriptionCost = faker.number.float(),
    userId = createId(),
    mediaId = createId(),
    updatedAt = faker.date.recent({ days: 10 }),
    createdAt = faker.date.past({ years: 3, refDate: updatedAt }),
} = {}): Profile => createUserProfile({
    id,
    bio,
    subscriptionCost,
    userId, 
    mediaId,
    updatedAt,
    createdAt
});