import { faker } from '@faker-js/faker';
import type {  Media, Post, Reaction } from '@prisma/client';
import { createId} from '@paralleldrive/cuid2'

export const createUserFeedPost = ({
    id = createId(),
    content = '',
    onlySubscribers = false,
    createdAt = new Date(),
    updatedAt = new Date(),
    createdById = createId(),
}= {}): Post => ({
    id,
    content,
    onlySubscribers,
    createdAt,
    updatedAt,
    createdById
});

export const createPopulatedUserFeedPost = ({
    id = createId(),
    content = faker.lorem.sentence(),
    onlySubscribers = faker.datatype.boolean(),
    updatedAt = faker.date.recent({ days: 10 }),
    createdAt = faker.date.past({ years: 3, refDate: updatedAt }),
    createdById = createId(),
} = {}) => createUserFeedPost({
    id,
    content,
    onlySubscribers,
    updatedAt,
    createdAt,
    createdById
})

export const createUserPostReaction = ({
    id = createId(),
    postId = createId(),
    reactorId = createId(),
    reactionType = 'like',
}= {}): Reaction => ({
    id,
    postId,
    reactorId,
    reactionType
});

export const createPopulatedUserFeedPostReaction = ({
    id = createId(),
    postId = createId(),
    reactorId = createId(),
    reactionType = faker.helpers.arrayElement(['like', 'dislike'])
} = {}): Reaction => createUserPostReaction({
    id,
    postId,
    reactorId,
    reactionType
})


export const createUserFeedPostMedia = ({
    id = createId(),
    url = '',
    createdAt = new Date(),
    updatedAt = new Date(),
    postId = createId(),
} ={}): Media => ({
    id,
    url,
    createdAt,
    updatedAt,
    postId
})


export const createPopulatedUserFeedPostMedia = ({
    id = createId(),
    url = faker.internet.url(),
    createdAt = faker.date.past({ years: 3 }),
    updatedAt = faker.date.recent({ days: 10 }),
    postId = createId()
} = {}): Media => createUserFeedPostMedia({
    id,
    url,
    postId,
    createdAt,
    updatedAt
})