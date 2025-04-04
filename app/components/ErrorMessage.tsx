export default function ErrorMessage({ message = "" }: { message: string }) {
  return (
    <div className="text-red-700 " role="alert">
      <p>{message}</p>
    </div>
  );
}
