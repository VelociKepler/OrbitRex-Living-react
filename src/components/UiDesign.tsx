const UiDesign = () => {
    return (
        <div>
            <div className="max-w-lg gap-2">
                <button className="primary-bnt-xs">Extra small</button>
                <button className="primary-bnt-sm">Small</button>
                <button className="primary-bnt">Base</button>
                <button className="primary-bnt-lg">Large</button>
            </div>
            <div className="max-w-lg gap-2">
                <button className="outline-bnt-xs">Extra small</button>
                <button className="outline-bnt-sm">Small</button>
                <button className="outline-bnt">Base</button>
                <button className="outline-bnt-lg">Large</button>
            </div>
            <form>
                <input className="input-form" type="text" />
            </form>
        </div>
    );
};

export default UiDesign;
