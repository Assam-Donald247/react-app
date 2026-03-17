import "./register.css"

function Continue ({ title }: { title: string }) {
    return (
        <a href = '#'><button className="cont-Button">{title}</button></a>
    );
}

export default Continue;