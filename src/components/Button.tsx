interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    text?: string;
    className?: string;
} 

const Button = ({ icon, text, className, ...props }: ButtonProps) => {
    return (
        <button 
            className={`${className} p-2 w-full rounded-sm hover:cursor-pointer`} 
            {...props}
        >
            {icon}{text}
        </button>
    );
};

export default Button;
