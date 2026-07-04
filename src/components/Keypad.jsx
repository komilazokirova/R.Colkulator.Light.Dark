export default function Keypad({ onButtonClick }) {
    const buttons = [
        { value: "AC", variant: "clear" },
        { value: "$", variant: "number" },
        { value: "%", variant: "number" },
        { value: "÷", variant: "operator" },
        { value: "7", variant: "number" },
        { value: "8", variant: "number" },
        { value: "9", variant: "number" },
        { value: "×", variant: "operator" },
        { value: "4", variant: "number" },
        { value: "5", variant: "number" },
        { value: "6", variant: "number" },
        { value: "-", variant: "operator" },
        { value: "1", variant: "number" },
        { value: "2", variant: "number" },
        { value: "3", variant: "number" },
        { value: "+", variant: "operator" },
        { value: "0", variant: "number", span: 2 },
        { value: ".", variant: "number" },
        { value: "=", variant: "equals" },
    ];

    return (
        <div className="grid grid-cols-4 gap-2.5">
            {buttons.map((btn) => (
                <div key={btn.value} className={btn.span ? "col-span-2" : ""}>
                    <Button value={btn.value} variant={btn.variant} onClick={onButtonClick} />
                </div>
            ))}
        </div>
    );
}