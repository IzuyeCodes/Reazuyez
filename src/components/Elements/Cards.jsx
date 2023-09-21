function Card({children}) {

    return <div className={"shadow drop-shadow-lg rounded-lg overflow-hidden bg-slate-600 bg-opacity-25 text-white"}>{children}</div>

}

function Title({children}) {
    return (
        <div className={'p-4 border-b'}>
            <h1 className={'text-xl text-white font-bold italic'}>{children}</h1>
        </div>
    )
}

function Body({children}) {
    return (
        <div className={'leadin-render p-4'}>{children}</div>
    )
}

function Footer({children}) {
    return (
        <div className={'bg-slate-50 p-4'}>{children}</div>
    )
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;