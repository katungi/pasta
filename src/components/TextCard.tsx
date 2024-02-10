interface TextCardProps {
    text: string,
    index: number
}

export const TextCard: React.FC<TextCardProps> = ({ text, index }: TextCardProps) => (
    <div className="w-full text-white px-8 p-3 border border-neutral-600 mb-2 mt-2 hover:bg-green-200 hover:text-green-300 rounded-lg" key={index}>
        <p className="">{text}</p>
    </div>
)