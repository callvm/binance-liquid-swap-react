const Header = ({ toggleTheme, theme }) => {
    return (
        <div className='header-div'>
            <div className='header-div-inner'>
                <div className='header-div-inner-top'>
                    <div style={{ alignItems: 'center', display: 'flex', WebkitBoxAlign: 'center' }}>
                        <div style={{ display: 'flex', width: 'fit-content', alignItems: 'center', display: 'block', margin: 'auto' }}>
                            <a href='/'> <img className="logo" src='https://cryptologos.cc/logos/binance-coin-bnb-logo.png' alt='' style={{ width: '60px', height: '60px' }} /></a>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridAutoRows: 'auto', rowGap: '1rem', margin: 'auto', textAlign: 'left', width: '100%', marginLeft: '24px' }}>
                        <div style={{ color: 'white', fontSize: '16px', fontWeight: '800px' }}>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ marginRight: '0.75rem' }}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                Overview
                                </a>
                        </div>
                        <div style={{ color: 'white', fontSize: '16px', fontWeight: '800px' }}>
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ marginRight: '0.75rem' }}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                            Coins
                                </a>
                        </div>
                        <div style={{ color: 'white', fontSize: '16px', fontWeight: '800px' }}>
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ marginRight: '0.75rem' }}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                            Pools
                                </a>
                        </div>
                        <div style={{ color: 'white', fontSize: '16px', fontWeight: '800px' }}>
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ marginRight: '0.75rem' }}><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
                                Stats
                                </a>
                        </div>

                    </div>
                </div>
                <div className='header-div-inner-bottom'>
                    <div style={{ display: 'grid', gridAutoRows: 'auto', rowGap: '0.5rem', margin: 'auto', textAlign: 'left', width: '100%', marginLeft: '24px' }}>
                        <a style={{ color: 'white', fontSize: '14px', fontWeight: '500px' }}>GitHub</a>
                        <a style={{ color: 'white', fontSize: '14px', fontWeight: '500px' }}>About</a>
                        <a style={{ color: 'white', fontSize: '14px', fontWeight: '500px' }}>Add Liquidity</a>
                        <a onClick={toggleTheme} style={{ color: 'white', fontSize: '14px', fontWeight: '500px', cursor: 'pointer' }}>{theme === 'light' ? 'Dark mode' : 'Light mode'}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header