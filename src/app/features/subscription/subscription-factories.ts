import { createId } from "@paralleldrive/cuid2"
import type { Subscription } from "@prisma/client"

export const createSubscription = ({
    id = createId(),
    creatorId = createId(),
    subscriberId = createId(),
} = {}): Subscription => ({
    id,
    creatorId,
    subscriberId
})