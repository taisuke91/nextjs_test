export default async function About({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <h1>Producct: {id}</h1>
}