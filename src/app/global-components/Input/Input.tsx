interface Input {
  label: string;
  name: string;
  type?: string;
  id: string;
  required?: boolean;
}

export function Input({ label, name, id, type, required }: Input) {
  return (
    <div className="flex flex-col">
      <label htmlFor="email">{label}</label>
      <input
        name={name}
        id={id}
        {...(type ? { type } : {})}
        {...(required ? { required } : {})}
        className="border rounded-md border-slate-300 outline-none p-0.5"
      />
    </div>
  );
}
