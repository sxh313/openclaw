import type { ApnsRegistration } from "./push-apns-store.types.js";

export type ApnsRegistrationWorkerOperations = {
  "apns.registration.register": {
    input: { candidate: ApnsRegistration; expectedPairingGeneration?: string; nowMs: number };
    output:
      | { status: "pairing-changed" }
      | { status: "registered"; registration: ApnsRegistration };
  };
};
