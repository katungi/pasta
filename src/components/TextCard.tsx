interface TextCardProps {
    text: string,
    index: number
}

export const TextCard: React.FC<TextCardProps> = ({ text, index }: TextCardProps) => (
    <div className="w-full text-white px-8 p-3 mb-2 mt-2 rounded-lg" key={index}>
        <p className="">{text}</p>
    </div>
)