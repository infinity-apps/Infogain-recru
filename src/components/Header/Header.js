import { LogoIcon } from 'components/Icons';

const Header = () => {
    return (
        <header style={{padding: 15, background: '#192a55', color: '#fff'}}>
            <figure style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <LogoIcon width="2.5em" height="2.5em" />
                <figcaption style={{marginLeft: '0.5em'}}><span style={{fontWeight: 'bold'}}>Kacper Ziuzia -</span> Rewards program</figcaption>
            </figure>
        </header>
    );
};

export default Header;