interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({ label, ...props }: TextAreaProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium  text-black">{label}</label>
      <textarea
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        rows={4}
        {...props}
      />
    </div>
  );
} 