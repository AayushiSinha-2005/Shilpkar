/**
 * Lightfall — a soft, slowly drifting shaft of gold light that sweeps
 * across the hero, echoing light falling through a window into an interior.
 */
export default function Lightfall() {
  return (
    <div className="lightfall" aria-hidden="true">
      <span className="lightfall__beam lightfall__beam--a" />
      <span className="lightfall__beam lightfall__beam--b" />
      <span className="lightfall__grain" />
    </div>
  );
}
