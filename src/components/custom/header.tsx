export default function Header({ title }: { title: string }) {
  return (
    <h1 className="text-white text-center text-2xl mt-4 font-bold">{title}</h1>
  );
}
