export function Card({ children, ...props }) {
  return <div className="bg-white border rounded-2xl shadow-md" {...props}>{children}</div>;
}
export function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
