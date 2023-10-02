export default function MainContent({ children }) {
  return (
    <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black p-3.5 lg:p-6">
        <div className="space-y-8">{children}</div>
      </div>
    </div>
  );
}
