/**
 * The μLearn wordmark, shielded from any inherited `text-transform`.
 * Use inside intentionally uppercase labels (mono metadata, buttons)
 * so the brand always renders exactly as "μLearn".
 */
export function MuLearn() {
  return <span className="normal-case">μLearn</span>;
}
