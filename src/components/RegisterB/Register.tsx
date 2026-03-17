import "./register.css"

function Continue ({ title }: { title: string }) {
    return (
        <div className="reg-Button">
            <a href = '#'><button className="cont-Button">{title}</button></a>
        </div>
    );
}

export default Continue;