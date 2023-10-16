export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <section className="locations">{children}</section>
  );
}
