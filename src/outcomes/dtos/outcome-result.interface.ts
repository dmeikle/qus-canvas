export interface OutcomeResultInterface {
    id: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    outcomeNumber: bigint;
    studentNumber: number;
    score?: number;
    mastery: boolean;
    originalMastery: boolean;
    assessedAt?: Date;
    artifactType?: string;
    artifactNumber?: bigint;
    possible?: number;
    courseNumber?: number;
    alignment?: string;
    assignmentNumber?: number;
    percent?: number;
    submittedOrAssessedAt?: Date;
    hidePoints: boolean;
    hidden: boolean;
    outcomeResultsNumber: number;

}