import { v4 } from "uuid"

export class IdGenerateId {
    generateId =():string => v4()
} 