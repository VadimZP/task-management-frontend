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
      <label htmlFor={id} className="mb-3 ml-1 text-blue-950 text-sm">
        {label}
      </label>
      <input
        name={name}
        id={id}
        {...(type ? { type } : {})}
        {...(required ? { required } : {})}
        className="border rounded-md border-slate-300 outline-none p-2 bg-slate-50 text-blue-950 focus:border-blue-700 text-sm"
      />
    </div>
  );
}
