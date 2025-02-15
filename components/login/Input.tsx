interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="text-black block text-xs md:text-sm mb-1 md:mb-2">{label}</label>
      )}
      <input
        {...props}
        className="w-full p-2 md:p-3 bg-gray-100 rounded-xl md:rounded-2xl text-xs md:text-sm text-black"
      />
    </div>
  );
} 