import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='contatos'>
                <img src="/images/fb.png" alt="facebook icon"/>
                <img src="/images/tw.png" alt="twitter icon"/>
                <img src="/images/ig.png" alt="instagram icon"/>
            </div>
            <div className='logo'>
                <img src="/images/logo.png" alt="logo Organo" />
            </div>
            <div className='direitos'>
                <h4>Desenvolvido por Alura</h4>
            </div>
        </footer>
    )
}

export default Footer