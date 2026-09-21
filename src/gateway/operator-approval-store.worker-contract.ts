import type * as store from "./operator-approval-store.kernel.js";
import type * as transitions from "./operator-approval-store.transitions.js";

type Mutations = {
  insert: typeof store.insertOperatorApproval;
  get: typeof store.getOperatorApprovalDetailed;
  pending: typeof store.listPendingOperatorApprovals;
  resolve: typeof transitions.resolveOperatorApproval;
  deny: typeof transitions.forceDenyOperatorApproval;
  expire: typeof transitions.expireDueOperatorApprovals;
  consume: typeof transitions.consumeOperatorApprovalAllowOnce;
};

export type OperatorApprovalWorkerOperations = {
  [Key in keyof Mutations as `operatorApprovals.${Key}`]: {
    input: Omit<NonNullable<Parameters<Mutations[Key]>[0]>, "databaseOptions">;
    output: ReturnType<Mutations[Key]>;
  };
};
