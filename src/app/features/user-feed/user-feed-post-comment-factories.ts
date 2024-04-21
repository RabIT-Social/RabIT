import { faker } from "@faker-js/faker";
import { createId } from "@paralleldrive/cuid2";
import type { Comment } from "@prisma/client";


export const createUserFeedPostComment = ({
    id = createId(),
    content = '',
    createdAt = new Date(),
    updatedAt = new Date(),
    postId = createId(),
    createdById = createId(),
} = {}): Comment => ({
    id,
    content,
    createdAt,
    updatedAt,
    postId,
    createdById,
});


export const createPopulatedUserFeedPostComment = ({
    id = createId(),
    content = faker.lorem.sentence(),
    createdAt = faker.date.recent({ days: 10 }),
    updatedAt = faker.date.recent({ days: 5 }),
    postId = createId(),
    createdById = createId(),
} = {}): Comment => createUserFeedPostComment({
    id,
    content,
    createdAt,
    updatedAt,
    postId,
    createdById
})