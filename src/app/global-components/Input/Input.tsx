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
      <label htmlFor={id} className="mb-3 ml-1 font-bold text-primary">
        {label}
      </label>
      <input
        name={name}
        id={id}
        {...(type ? { type } : {})}
        {...(required ? { required } : {})}
        className="rounded-md border border-slate-300 bg-slate-50 p-2 text-sm text-primary outline-none focus:border-blue-700"
      />
    </div>
  );
}
